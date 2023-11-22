import psycopg2
from database.db_config import config

def connect():
    try:
        db_params = config()
        conn = psycopg2.connect(**db_params)
        return conn
    except (Exception, psycopg2.DatabaseError) as error:
        # Log the error or handle it appropriately
        print(f"Database connection error: {error}")
        return None