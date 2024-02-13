from . import db, environment, SCHEMA
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

# deck_users = db.Table(
#     "deck_users",
#     db.Model.metadata,
#     db.Column("deck_id", db.Integer, db.ForeignKey(
#         add_prefix_for_prod("decks.id")), primary_key=True),
#     db.Column("user_id", db.Integer, db.ForeignKey(
#         add_prefix_for_prod("users.id")), primary_key=True)
# )


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    firstname = db.Column(db.String(40), nullable=False)
    lastname = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    _hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)

    # tasks = db.relationship("Task", back_populates="owner",
    #                         cascade="all, delete-orphan")
    # notes = db.relationship("Note", back_populates="owner",
    #                         cascade="all, delete-orphan")
    # decks = db.relationship("Deck", back_populates="owner",
    #                         cascade="all, delete-orphan")

    # saved_decks = db.relationship(
    #     "Deck", secondary=deck_users, back_populates="deck_users")

    @property
    def password(self):
        return self._hashed_password

    @password.setter
    def password(self, password):
        self._hashed_password = generate_password_hash(password)

    @classmethod
    def add_users(cls, users):
        if isinstance(users, list):

            # use property names here to go through setter checks
            new_users = [
                cls(
                    username=user["username"],
                    firstname=user["firstname"],
                    lastname=user["lastname"],
                    email=user["email"],
                    password=user["password"]
                ) for user in users
            ]

        if isinstance(users, dict):
            new_users = cls(
                username=users["username"],
                firstname=users["firstname"],
                lastname=users["lastname"],
                email=users["email"],
                password=users["password"]
            )

        return new_users if new_users else None

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'firstname': self.firstname,
            'lastname': self.lastname,
            'email': self.email,
            'createdAt': str(self.created_at)
        }

    def __repr__(self):
        return f"<User {self.id}: {self.lastname}, {self.firstname}>"
