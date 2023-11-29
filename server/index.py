from flask import *
from database.db_conn import connect
from flask_cors import CORS
from credentials.usermgt import add_user
from credentials.auth import authenticate

app = Flask(__name__)
app.secret_key = "Schedulify"
# Allow requests only from the React development server
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

method_type = ['GET', 'POST']

@app.route('/', methods=method_type)
def get_data():
    connection = connect()
    if connection:
        data = {
            'message': 'Connected to the database!'
        }
        return jsonify(data)
    
    else:    
        error_data = {'error': 'Unable to connect to the database'}
        return jsonify(error_data), 500


@app.route('/user/signin', methods=method_type)
def signin():
    UserData = request.get_json()
    print(UserData)
    if UserData is None:
        Status = {
            'status':'error',
            'message': 'No data received'
        }
        return jsonify(Status)
    username = UserData['username']
    password = UserData['password']
    
    if not authenticate(username,password):
        Status = {
                'status':'error',
                'message':'Invalid username or password'
            }
        return jsonify(Status)

    Status = {
        'status':'success'
    }
    return jsonify(Status)
    


@app.route('/user/signup', methods=method_type)
def signup():
    UserData = request.get_json()
    print(UserData)
    if UserData is None:
        Status = {
            'status':'error',
            'message': 'No data received'
        }
        return jsonify(Status)
    
    username = UserData['username']
    email = UserData['emailId']
    password = UserData['password']
    if not add_user(username, email, password):
        Status = {
            'status': 'error',
            'message': 'User with the same username or email already exists!'
        }
        return jsonify(Status)
    else:
        try:
            add_user(username,email,password)
        except:
            Status ={
                'status':'error'
            }
            return jsonify(Status)
        
        Status = {
            'status':'success'
        }
        return jsonify(Status)
    


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')