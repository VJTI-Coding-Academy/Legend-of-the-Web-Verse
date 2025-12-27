***A generic, high-performance authentication template featuring a Flask backend, SQLAlchemy database, and a Dynamic Parallax Glassmorphism UI.***

>This project serves as a foundational template for web applications requiring secure user management. It includes a futuristic, interactive "Mainframe" aesthetic where the background grid reacts to mouse movements, creating a 3D depth effect.

## ✨ Features
### 🖥️ Frontend & UI
1. Glassmorphism Design: Modern, translucent cards with blur effects (backdrop-filter).

2. Dynamic Parallax Background:

3. Auto-Scroll: Infinite grid animation simulating forward movement.

4. Interactive Depth: The grid and forms tilt and shift based on mouse position (JS + CSS Variables).

5. Responsive: Centered layout that adapts to screen sizes.

### ⚙️ Backend & Logic
1. User Authentication: Secure Login and Signup flows   using Flask-Login.

2. Password Security: Scrypt hashing via werkzeug.security.

3. Password Recovery: "Forgot Password" functionality with secure, time-sensitive email tokens (Flask-Mail).

4. Session Management: Protected Dashboard route (accessible only after login).

5. Flash Messages: Instant feedback for errors (e.g., "Invalid password") or success.


## 🛠️ Tech Stack
>Language: Python 3.x

>Framework: Flask

>Database: SQLite (Default, easily scalable to PostgreSQL/MySQL via SQLAlchemy)

>ORM: Flask-SQLAlchemy

>Styling: CSS3 (Animations, Variables, Flexbox)

>Scripting: Vanilla JavaScript (Mouse tracking logic)

## 🚀 Installation Guide
Follow these steps to get the system running locally.

### 1. Prerequisites
>1. Python 3.8 or higher installed.

>2. A Gmail account (or any SMTP provider) for the "Forgot Password" email feature.

### 2. Clone or Download
>Download the project files to your local machine.

### 3. Set Up Virtual Environment (Recommended)
>It is best practice to run Flask apps in a virtual environment to isolate dependencies.

Windows:
```
python -m venv venv
venv\Scripts\activate
```
Mac/Linux:
```
python3 -m venv venv
source venv/bin/activate
```
### 4. Install Dependencies
Install the required packages listed in `requirements.txt`.
```
pip install -r requirements.txt
```
## ⚙️ Configuration (.env)
>You must create a .env file in the root directory to store sensitive keys and email settings.

1. Create a file named .env.

2. Paste the following content and update the values:
```
# Security
SECRET_KEY=your_super_secure_random_string
DATABASE_URL=sqlite:///db.sqlite3

# Email Settings (Required for Forgot Password)
# Note: For Gmail, you must use an "App Password", not your login password.
MAIL_SERVER=smtp.gmail.com
MAIL_PORT=587
MAIL_USE_TLS=True
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_app_password
```
`Tip:` To get a Gmail App Password: Go to Google Account > Security > 2-Step Verification > App Passwords.

## 🏃‍♂️ Usage
### 1. Initialize Database
The application is configured to create the database automatically on the first run.

### 2. Run the App
Execute the main application file:

```
python app.py
```
### 3. Access
Open your browser and navigate to: http://127.0.0.1:5000/

>`Sign Up:` Create a new account.

>`Login:` Access the dashboard.

>`Forgot Password:` Test the email recovery link (check your .env email inbox/spam folder).

## 📂 Project Structure
```
/project-root
│
├── app.py                 # Main Flask application logic (Routes, Models, Config)
├── requirements.txt       # List of Python dependencies
├── .env                   # Environment variables (Hidden file)
│
├── instance/
│   └── db.sqlite3         # Database file (Created after running app)
│
├── static/
│   ├── style.css          # Global styles, Glassmorphism, Animations
│   └── parallax.js        # Mouse tracking logic for parallax effect
│
└── templates/
    ├── base.html          # Base layout (includes grid background & scripts)
    ├── login.html         # Login Form
    ├── signup.html        # Registration Form
    ├── forgot_password.html # Email entry for reset
    ├── reset_token.html   # New password entry
    └── dashboard.html     # Protected user area
```

## ❓ Troubleshooting
`Q: The email isn't sending!`

>A: Ensure you are NOT using your standard Gmail password. You must generate an App Password if 2-Factor Authentication is on. Also, check that MAIL_PORT is 587 and MAIL_USE_TLS is True.

`Q: "Table not found" error?`

>A: If you changed the database models (added columns), delete the instance/db.sqlite3 file and restart the app. It will regenerate a fresh database.

`Q: The background isn't moving with my mouse.`

>A: Ensure parallax.js is correctly linked in base.html and that your browser has JavaScript enabled.

## 📜 License
>This project is open-source and free to use for personal or commercial projects.