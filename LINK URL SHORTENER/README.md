# Project Linkly - A friendly personal URL shortener

## Introduction

Ever had a lot of long links like your universities' outdated aah software account link or perhaps some weird piracy site for you to "definitely avoid buying games from shady people" or just websites with unnecessary long names?

Well you are in luck because this project will allow you to store all these links in small 6 character short codes, with the option of adding a small prefix too ! The logic of code generation is based on modular arithmetic and the fact that every element of any group of form 
```math 
\mathbb{Z}_p \ ,  where \ p \ is \ prime
``` 

is a generator except for the identity element.

## Setup

The project is based on Python, mainly flask. 

It works with 
1. flask for the routing
2. sqlite3 for the db handling
3. urllib3 for handling the links
4. modules like random, json, etc.

Additionally html and css are used for minimal frontend and styling.

## How to install and run

1. Create any directory to store the project in.
2. Clone the repository and copy all the contents of the directory __Awwab_Wadekar_Linkly_URL_shortener/source_code__ to your directory.
3. Set up venv in your directory with:
    - Open terminal in your directory (normal bash/zsh in case of linux or wsl in case of windows)
    - Enter ```python -m venv venv``` to create venv
    - Enter ```source venv/bin/activate``` to activate it
    - Enter ```venv/bin/pip install -r requirements.txt``` to install dependencies
    - Enter ```venv/bin/python app.py``` to start app
    - Open [Linkly App](http://127.0.0.1:5001) and enjoy !
4. In case the port shows up as in use and the app doesn't work go to [app.py](app.py), scroll to the last line and change port number in  ```app.run(debug=True, port=5001) ``` to some other port number(like **6769** or something random).
5. In case of any issues do leave a comment down inside my repo to tag me !

## Demo

![Screenshot](assets/demo_ss_1.png)





https://github.com/user-attachments/assets/548e18b4-29bf-4abc-a389-8c7e60cf1ab7




