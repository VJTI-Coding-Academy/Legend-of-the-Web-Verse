from flask import Flask, jsonify, request, render_template
import requests
from flask_sqlalchemy import SQLAlchemy
from config import SQLALCHEMY_DATABASE_URI

# creating flask app instance
app = Flask(__name__)


#configuring to database
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
# print(app.config["SQLALCHEMY_DATABASE_URI"])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


# database model - kind of like an SQL table
class Entry(db.Model):
    id = db.Column(db.Integer, primary_key =True)
    username = db.Column(db.String(100), unique = True, nullable = False)
    rating = db.Column(db.Integer, unique = False, nullable = False)


# header for graphql api call
header = {"User-Agent": "Web Agent", "Content-Type": "application/json"}

# fetch LC rating
def fetch_leetcode_rating(username):
    api_url = "https://leetcode.com/graphql"
    payload = {
        "query": """
        query userContestRankingInfo($username: String!) {
          userContestRanking(username: $username) {
            rating
          }
        }
        """,
        "variables": {"username": username},
        "operationName": "userContestRankingInfo",
    }

    response = requests.post(api_url, headers=header, json=payload).json()
    data = response.get("data", {})

    if not data or not data.get("userContestRanking"):
        return None

    return data["userContestRanking"]["rating"]


# run once fetch to update ratings at app start
def update_all_ratings():
    # print("🔄 Updating ratings on startup...")

    entries = Entry.query.all()

    for entry in entries:
        new_rating = fetch_leetcode_rating(entry.username)

        if new_rating is not None:
            entry.rating = new_rating
            # print(f"✔ {entry.username}: {new_rating}")
        else:
            print(f"⚠ Failed to fetch rating for {entry.username}")

    db.session.commit()
    # print("✅ Ratings updated")




# home page
@app.route('/')
def home():
    # render index.html from templates folder
    return render_template('index.html')

# Add by username API call
@app.route('/api/add', methods=['POST'])
def add_user():
    data = request.get_json()
    # Check sanity of data
    if not data or "user" not in data or data["user"] is None:
        return jsonify({"error": "Missing username"}), 400
    
    # API call
    username = data["user"]
    api_url = "https://leetcode.com/graphql"
    upload = {
        "query": "\n  query userContestRankingInfo($username: String!) {\n  userContestRanking(username: $username) {\n    attendedContestsCount\n    rating\n    globalRanking\n    totalParticipants\n    topPercentage\n    badge {\n      name\n    }\n  }\n  userContestRankingHistory(username: $username) {\n    attended\n    trendDirection\n    problemsSolved\n    totalProblems\n    finishTimeInSeconds\n    rating\n    ranking\n    contest {\n      title\n      startTime\n    }\n  }\n}\n    ",
        "variables": {"username": username},
        "operationName": "userContestRankingInfo",
    }
    response = requests.post(api_url, headers=header, json=upload).json()

    # Validate entry
    dat1 = response["data"]
    if not "userContestRanking" in dat1:
        return jsonify({"error": "Wrong username"}), 404
    rating = dat1["userContestRanking"]["rating"]

    # Add new row to table
    new_entry = Entry(username = username, rating = rating)
    db.session.add(new_entry)
    db.session.commit()
    return jsonify({"rating":rating}),200

# fetch all users to make leaderboard
@app.route('/api/all_users',methods=['GET'])
def get_users():
    entries = Entry.query.all()
    return jsonify([
        {
            "id": e.id,
            "username": e.username,
            "rating": e.rating
        }
        for e in entries
    ]), 200

# delete an entry by id
@app.route('/api/delete/<int:id>',methods=['DELETE'])
def delete_user(id):
    entry = Entry.query.get(id)
    if entry is None:
        return jsonify({"error": "Invalid username"}), 400
    
    db.session.delete(entry)
    db.session.commit()
    return "", 204

if __name__ == "__main__":
    # Application startup configuration
    with app.app_context():
        db.create_all()
        update_all_ratings()

    # run app
    app.run(debug=True)