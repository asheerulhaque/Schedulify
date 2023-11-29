from database.db_conn import connect
import psycopg2

def authenticate(username , password):
    
    conn = connect()
    cursor = conn.cursor()

    try:
        cursor.execute(f'''SELECT COUNT(*) FROM USER_CREDENTIALS WHERE USERNAME = \'{username}\' AND PASSWORD = \'{password}\';''')
        count = cursor.fetchone()[0]
        if count == 1:
            return True
        else:
            return False
    except psycopg2.Error as e:
        print(e)

    finally:
        conn.close()
    

if __name__ == '__main__':
    authenticate()