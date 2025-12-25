# 🚀 Legend of the Web-Verse: Media Vault

A secure, dynamic media upload and gallery system built for the Web-Verse. This project allows users to upload multiple images or a single video with strict server-side sanitization and real-time frontend previews.

## ✨ Features
* **Dual-Mode Upload:** Supports multiple image uploads (up to 10) or a single video upload (up to 100MB).
* **Instant Preview:** Dynamically generated image gallery and video player using JavaScript.
* **Strict Sanitization:** Validates file extensions (`.jpeg`, `.png`, `.mp4`, etc.) and MIME types on both client and server.
* **Size Constraints:** Prevents server bloat by enforcing strict file size limits.

---

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Backend:** Node.js, Express.js
* **Middleware:** Multer (for handling `multipart/form-data`)

---

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/VJTI-Coding-Academy/Legend-of-the-Web-Verse.git](https://github.com/VJTI-Coding-Academy/Legend-of-the-Web-Verse.git)
    cd Legend-of-the-Web-Verse
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create an uploads folder:**
    ```bash
    mkdir uploads
    ```

4.  **Run the server:**
    ```bash
    node server.js
    ```

---

## 🛡️ Security & Constraints

To protect the Web-Verse, the following rules are enforced:

| Resource | Limit | Allowed Types |
| :--- | :--- | :--- |
| **Images** | Max 10 files | `.jpg`, `.jpeg`, `.png` |
| **Video** | Max 100 MB | `.mp4`, `.webm` |
| **Filename** | Sanitized | Timestamps added to prevent overwriting |

---

## 📂 Project Structure
```text
Legend-of-the-Web-Verse/
├── uploads/          # Sanitized files stored here
├── public/
│   ├── index.html    # Main UI
│   └── script.js     # Frontend logic & previews
├── server.js         # Node.js backend & Multer config
└── package.json      # Dependencies