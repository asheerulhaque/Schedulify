from flask import Flask, jsonify
from database.db_conn import connect
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = "Schedulify"
CORS(app)

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

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')