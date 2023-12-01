from flask import *
from database.db_conn import connect
from flask_cors import *
from credentials.usermgt import add_user
from credentials.auth import authenticate

app = Flask(__name__)
app.secret_key = "Schedulify"
cors = CORS(app, resources={r"*": {"origins": "*"}})

method_type = ['GET', 'POST']

@app.route('/', methods=method_type)
def get_data():
    connection = connect()
    if connection:
        response = jsonify({
            'message': 'Connected to the database!'
        }), 200 # 200 is the status code for OK
        return response
    
    else:    
        response = jsonify({'error': 'Unable to connect to the database'})
        return response, 500 # 500 is the status code for internal server error


@app.route('/user/signin', methods=method_type)
def signin():
    UserData = request.get_json()
    print(UserData)
    if UserData is None:
        response = jsonify({
            'status':'error',
            'message': 'No data received'
        }), 400 # 400 is the status code for bad request
        return response
    username = UserData['username']
    password = UserData['password']
    if not authenticate(username,password):
        response = jsonify({
                'status':'error',
                'message':'Invalid username or password'
            }), 401 # 401 is the status code for unauthorized
        return response

    response = jsonify({
        'status':'success'
    }), 200
    return response
    


@app.route('/user/signup', methods=method_type)
def signup():
    UserData = request.get_json()
    print(UserData)
    if UserData is None:
        response = jsonify({
            'status':'error',
            'message': 'No data received'
        }), 400
        return response
    
    username = UserData['username']
    email = UserData['emailId']
    password = UserData['password']
    if not add_user(username, email, password):
        response = jsonify({
            'status': 'error',
            'message': 'User with the same username or email already exists!'
        }), 409 # 409 is the status code for conflict
        return response
    else:
        try:
            add_user(username,email,password)
        except:
            response =jsonify({
                'status':'error'
            }) , 500 
            return response
        
        response = jsonify({
            'status':'success'
        }) , 200
        return response
    


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')