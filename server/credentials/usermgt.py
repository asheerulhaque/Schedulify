from database.db_conn import connect
import psycopg2

def add_user(username, email, password):
    conn = connect()
    cursor = conn.cursor()

    try:
        # Use parameterized query to prevent SQL injection
        cursor.execute(
            '''
            SELECT * FROM USER_CREDENTIALS 
            WHERE USERNAME = %s OR EMAIL = %s;
            ''',
            (username, email)
        )

        existing_record = cursor.fetchone()
        
        if existing_record:
            return False
        else:
            # Use parameterized query for insertion
            cursor.execute(
                '''
                INSERT INTO USER_CREDENTIALS 
                (serial_number, username, password, email, user_type)
                VALUES (DEFAULT, %s, %s, %s, 'user');
                ''',
                (username, password, email)
            )

            conn.commit()
            return True
    except psycopg2.Error as e:
        print(e)
    finally:
        conn.close()

if __name__ == '__main__':
    add_user()
