import psycopg2
from database.db_config import config
from credentials.uuid import get_uuid
def connect():
    try:
        db_params = config()
        conn = psycopg2.connect(**db_params)

        cursor = conn.cursor()
        try:
            print("executing the user table")
            cursor.execute ( "CREATE TABLE IF NOT EXISTS USER_CREDENTIALS ( \
                SERIAL_NUMBER SERIAL, \
                USER_ID VARCHAR(50) PRIMARY KEY UNIQUE DEFAULT %s, \
                USERNAME VARCHAR(50) UNIQUE NOT NULL, \
                PASSWORD VARCHAR(50) NOT NULL, \
                EMAIL VARCHAR(50) NOT NULL, \
                USER_TYPE VARCHAR(50) NOT NULL \
                );", (get_uuid(),))

        except psycopg2.Error as e:
            print(e)
            print("problem with query")
        finally:
            conn.commit()
            cursor.close()


        return conn
    except (Exception, psycopg2.DatabaseError) as error:
        # Log the error or handle it appropriately
        print(f"Database connection error: {error}")
        return None
        
if __name__ == '__main__':
    connect()