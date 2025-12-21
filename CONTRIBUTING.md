# Contributing to Legend of the Web-Verse

First off, thank you for considering contributing to **The Coding Academy, VJTI**! It's people like you that make our community great.

This guide will help you set up your local environment, keep it synced with the main repository, and submit your web development projects correctly.

---

## 🚀 Step-by-Step Contribution Guide

### 1. Fork the Repository
Click the **Fork** button in the top-right corner of this page to create a copy of this repository on your own GitHub account.

### 2. Clone the Repository
Clone your **forked** copy to your local machine (replace `YOUR-USERNAME` with your actual GitHub username):

```bash
git clone [https://github.com/YOUR-USERNAME/Coding-Academy-Legend-of-the-Web-Verse.git](https://github.com/YOUR-USERNAME/Coding-Academy-Legend-of-the-Web-Verse.git)
```

### 3. Navigate to the Directory
Enter the project directory:
```
cd Coding-Academy-Legend-of-the-Web-Verse
```
### 4. Configure Upstream Remote
To keep your local repository updated with the main VJTI repository, you need to add it as an "upstream" remote. This prevents merge conflicts later.
```
git remote add upstream https://github.com/VJTI-Coding-Academy/Coding-Academy-Legend-of-the-Web-Verse.git
(https://github.com/VJTI-Coding-Academy/Coding-Academy-Legend-of-the-Web-Verse.git)
```
### 🔄 How to Sync (Important!)
Before you start working on any new project, always sync your local repository with the upstream (VJTI) repository to get the latest changes from other students.

Run these commands in order:
```
# 1. Fetch the latest changes from the main VJTI repo
git fetch upstream

# 2. Switch to your main branch
git checkout main

# 3. Merge the changes from VJTI into your local main
git merge upstream/main
```
---
## 🛠️ Creating Your Project
### 1. Create a New Branch
Never push directly to the `main` branch. Create a new `branch` for your specific project. Naming Convention: firstname_projectname (e.g., Kebab_weather-app)
```
git checkout -b <your_branch_name>
```
### 2. Project Directory Structure
You must follow this folder structure strictly. Create a folder in the root directory named `projectname`.

### Your folder must contain:
>`Project Code Folder`: A sub-folder containing your actual code (HTML, CSS, JS, etc.).

>`README.md`: Documentation explaining your specific project.

>`CONTRIBUTOR.md`: A file listing the people who worked on this specific project and their roll_no.

### 📂 Visual Structure:
```
Coding-Academy-Legend-of-the-Web-Verse/
├── ...
└── yourname_projectname/        <-- YOUR MAIN FOLDER
    ├── source_code/             <-- Sub-folder 
    ├── CONTRIBUTOR.md          <-- List who worked on 
    └── README.md                <-- Explanation of your project
```
### 3. Commit Your Changes
Stage your files and commit them with a meaningful message.
```
git add .
git commit -m "feat: added <project-name> by <your-name>"
```
### 4. Push to Your Fork
Push your new branch to your GitHub fork:
```
git push origin <your_branch_name>
```
### 📮 Submitting a Pull Request (PR)
1. Go to project repo on `GitHub`.
2. You will see a banner saying "Compare & pull request". Click it.
3. Ensure the base repository is VJTI-Coding-Academy/Coding-Academy-Legend-of-the-Web-Verse and the branch is main.
4. Write a brief title and description of what you added.
5. Click Create Pull Request.

### 📝 General Rules
>`No node_modules`: Ensure you create a .gitignore inside your project folder if you are using Node.js, so you don't push heavy library files.

>`Clean Code`: Formatting matters. Use Prettier or standard code indentations.

>`Be Respectful`: If you are reviewing other people's code or commenting on issues, always be kind and constructive.
**`No Racism allowed`**!!!!

**Happy Coding! 🕸️**



