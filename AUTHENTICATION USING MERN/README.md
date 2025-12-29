*A high-performance, full-stack authentication template built on the MERN Stack (MongoDB, Express, React, Node.js). It features a futuristic Glassmorphism UI with a dynamic, mouse-responsive Parallax Grid.*

>This project separates concerns into a robust REST API backend and a responsive React frontend, making it a perfect foundation for modern web applications requiring secure user management and detailed user registration.

# ✨ Features
### 🖥️ Frontend (React)
1. `Glassmorphism UI`: Translucent cards with blur effects (backdrop-filter) for a modern aesthetic.

2. `Dynamic Parallax Background`:

    >`Interactive Depth`: The background grid and forms tilt and shift based on mouse position using CSS Variables and React Hooks.

    >`Infinite Animation`: A continuous scrolling grid simulating forward movement.

3. `Detailed Registration`: Captures Username, Email, Password, Date of Birth, Gender, and Country (full list).

4. `Flexible Login`: Users can sign in using either their Username OR Email.

### ⚙️ Backend (Node.js & Express)
1. `Secure API`: RESTful architecture handling authentication routes.

2. `Database`: MongoDB (via Mongoose) for flexible data       storage.

3. `Security`:

    >Password Hashing with bcryptjs.

    >JWT (JSON Web Tokens) for secure session management.

4. `Validation`: Checks for existing users/emails to prevent duplicates.

# 🛠️ Tech Stack
> **Frontend**: React.js, React Router, Axios, CSS3 (Variables, Animations).

> **Backend**: Node.js, Express.js.

> **Database**: MongoDB (Atlas Cloud or Local).

> **Authentication**: JWT, Bcrypt.js.

# 🚀 Installation Guide
Follow these steps to get the system running locally.

1. Prerequisites
    > Node.js (v14 or higher) installed.

    > A MongoDB Connection String (local or MongoDB Atlas).

2. Clone the Repository
    > Download the project files to your local machine.

3. Backend Setup (API)
    > Navigate to the backend folder, install dependencies, and start the API.

    ```
    cd backend
    npm install
    ```
    `Configuration`: Create a `.env` file inside the backend folder:
    ```
    # backend/.env
    MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDB?retryWrites=true&w=majority
    JWT_SECRET=your_super_secret_key_here
    PORT=5000
    ```
    **Note**: Replace <username> and <password> with your actual MongoDB credentials.

    ``Start Server:``
    ```
    node index.js
    # Output: Backend server is running on port 5000!
    # Output: ✅ DB Connection Successful
    ```
4. Frontend Setup (Client)
    - Open a new terminal window, navigate to the frontend folder, and install dependencies.
    ```
    cd frontend
    ```
    `Start Client:`
    ```
    npm start
    ```
    The application will launch in your browser at `http://localhost:3000`.

# 🏃‍♂️ Usage
1. Register:

    - Go to the Signup page.

    - Fill in all details (Username, Email, DOB, Country, etc.).

    - Click "Create ID".

2. Login:

    - Use either your Username or Email.

   - Enter your password.

3. Dashboard:

    - Upon success, you are redirected to the protected Dashboard.

    - View your user profile details (ID, Origin, Class/Gender).

    - Click "Terminate Session" to logout.

# 📂 Project Structure
```
/project-root
│
├── backend/                # Backend API (Node/Express)
│   ├── models/
│   │   └── User.js         # Mongoose Schema
│   ├── routes/
│   │   └── auth.js         # API Endpoints (/register, /login)
│   ├── .env                # Database Secrets (Create this file!)
│   └── index.js            # Server Entry Point
│
└── frontend/               # Frontend Client (React)
    ├── src/
    │   ├── components/
    │   │   └── Background.jsx  # Parallax Logic
    │   ├── pages/
    │   │   ├── Login.jsx       # Login Form
    │   │   ├── Signup.jsx      # Registration Form
    │   │   └── Dashboard.jsx   # Protected User Area
    │   ├── App.js              # Routing
    │   └── index.css           # Global Styles & Animations
    └── package.json
```

# ❓ Troubleshooting
Q: `MongoServerError: bad auth : authentication failed`

    A: The password in your .env file is incorrect.

    1. Go to MongoDB Atlas > Database Access.

    2. Edit your user and reset the password.

    3. Update the MONGO_URL in backend/.env with the new password.

Q:  `MongooseError: The 'uri' parameter... got "undefined"`

    A: The server cannot find your .env file. Ensure the file is named exactly .env (no .txt extension) and is located inside the backend/ folder, not the root.

Q: `Registration works, but Login fails?`

    A: Check your browser console (F12) for network errors. Ensure your backend is running on Port 5000 and the frontend is sending requests to http://localhost:5000.

# 📜 License
This project is open-source and free to use for personal or commercial projects.