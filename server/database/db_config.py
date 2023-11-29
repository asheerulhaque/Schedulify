import os
from configparser import ConfigParser

def config(section='postgresql'):
    db_conf_parser = ConfigParser()
    db_conf_parser.read(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'db_config.ini'))
    
    db_conf = {}
    if db_conf_parser.has_section(section):
        db_conf = dict(db_conf_parser.items(section))
    else:
        raise Exception(f"Section '{section}' not found in the configuration file.")

    return db_conf

if __name__ == '__main__':
    config()