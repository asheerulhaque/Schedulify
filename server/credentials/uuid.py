from uuid import uuid4

def get_uuid():
    return str(uuid4())


if __name__ == '__main__':
    get_uuid()