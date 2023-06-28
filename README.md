# LZWCompression

## Table of Contents

- [Description](#description)
- [Deployed Web](#deployed-web) 
- [Program Requirements and Installation](#program-requirements-and-installation)
- [Get Started](#get-started)
- [Author](#author)

## Description
This is a simple web app that can perform data compression and decompression using LZW Algorithm. The program use 256 ASCII character as the initial dictionary.

<img width="1440" alt="Screenshot 2023-06-28 at 17 28 38" src="https://github.com/Putinabillaa/LZWCompression/assets/109022993/f9515e7c-65e6-4688-af5d-da02b81412f2">



## Deployed Web
https://lzw-compression-zmji.vercel.app/

## Program Requirements and Installation

> all installation except Python should be done in the virtual ennvironment
- Python 3.9 or Above
  ```
  sudo apt install python3
  ```
- Django
  ```
  % pip install django
  ```
- Django corsheaders
  ```
  % pip install django-cors-headers
  ```
- Other frontend dependencies
  ```
  % cd frontend
  % npm install
  ```

## Get Started
1. Create virtual environment
    ```
    # Linux
    python3 -m venv .venv
    source .venv/bin/activate
    
    # macOS
    python3 -m venv .venv
    source .venv/bin/activate
    
    # Windows
    py -3 -m venv .venv
    .venv\scripts\activate
    ```
2. Run local backend development server

    > optional, deployed backend server already provided
   ```
   % python backend/manage.py runserver
   # edit the fetch link in frontend/src/App.js line 24 & 37 to your local server
   # example: 'http://127.0.0.1:8000/api/compress'
   ```
4. Run local frontend development server
   ```
   % cd frontend
   % npm start
   ```
## How to Use
1. Compression
   - write your text in the input text box
   - set the desired compression output format to either binary or decimal
   - click 'Compress' button
     
2. Decompression
   - write your compressed text in the input text box
   - set the compressed text input format to either binary or decimal
   - click 'Decompress' button
   - if there is an error message, check your input format setting
## Author
Puti Nabilla Aidria (13521088)
