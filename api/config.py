import os

# if os.environ.get('FLASK_DEBUG') == True:
#     db_URI = os.environ.get('DATABASE_URL')
# else:
#     db_URI = os.environ.get('POSTGRES_URL')


class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI')
    SQLALCHEMY_ECHO = True
