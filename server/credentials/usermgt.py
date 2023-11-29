from database.db_conn import connect
from flask import *
import psycopg2

def add_user(username,email,password):
    
    conn = connect()
    cursor = conn.cursor()
    
    try :
        cursor.execute(f'''SELECT * FROM USER_CREDENTIALS WHERE USERNAME = \'{username}\' OR EMAIL = \'{email}\';''')
        existing_record = cursor.fetchone()
        print(existing_record)
        if existing_record:
            return False
        else:
            cursor.execute(f'''INSERT INTO USER_CREDENTIALS ( 
                serial_number,  username, password , email)
                VALUES (
                    DEFAULT, 
                    \'{username}\', 
                    \'{password}\',
                    \'{email}\');''')

            conn.commit()
            return True
    except psycopg2.Error as e:
        print(e)

    finally:
        conn.close()

if __name__ == '__main__':
    add_user()