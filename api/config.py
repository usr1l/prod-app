import os

if os.environ.get('FLASK_DEBUG') == True:
    dbURI = os.environ.get('DATABASE_URL')
else:
    dbURI = os.environ.get('POSTGRES_URL')


class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = dbURI
    SQLALCHEMY_ECHO = True
