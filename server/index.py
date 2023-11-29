from flask import *
from database.db_conn import connect
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = "Schedulify"
# Allow requests only from the React development server
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route('/', methods=['GET'])
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


@app.route('/user/signin', methods=['POST'])
def signin():
    UserData = request.get_json()
    print(UserData)
    Status ={
        'status':'error'
    }
    return jsonify(Status)


@app.route('/user/signup', methods=['POST'])
def signup():
    UserData = request.get_json()
    print(UserData)
    Status ={
        'status':'error'
    }
    return jsonify(Status)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')