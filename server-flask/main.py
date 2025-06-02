from flask import Flask
from flask-cors import CORS

app = Flask(__name__)

@app.route('/')
def hello_word():
    return'Hello, World!'

@app.route('/api/users')
def get_users():
    return {
        'user': ['Alice', 'Bob', 'Charlie']
    }

@app.route('/api/fruits')
def get_fruits():
    return ['Apple', 'Banana', 'Cherry']

if __name__ == '__main__':
    app.run(debug=True)