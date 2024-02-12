from sqlalchemy import Column, Integer, String
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime
from . import db

# User Model


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    # if environment == "production":
    #     __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    firstname = db.Column(db.String(40), nullable=False)
    lastname = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    _hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)

    @property
    def password(self):
        return self._hashed_password

    @password.setter
    def password(self, password):
        self._hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "lastname": self.lastname,
            "email": self.email,
            "created_at": self.created_at
        }

    def __repr__(self):
        return f"<User {self.id}: {self.lastname}, {self.firstname}>"
