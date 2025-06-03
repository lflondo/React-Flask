from flask import Flask #type: ignore
from flask_cors import CORS #type: ignore

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def hello_word():
    return'Hello, World!'

@app.route('/api/users')
def get_users():
    return {
        'user': [
            {
                'id': 1,
                'name':'Alice'
            }, 
             {
                'id': 2,
                'name':'Bob'
            },  {
                'id': 3,
                'name':'Charlie'
            }
        ]
    }

@app.route('/api/fruits')
def get_fruits():
    return ['Apple', 'Banana', 'Cherry']

if __name__ == '__main__':
    app.run(debug=True)