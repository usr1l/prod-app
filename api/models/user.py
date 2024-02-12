from sqlalchemy import Column, Integer, String
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.orm import relationship, Mapped, mapped_column
from datetime import datetime
from . import db

# User Model


class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(nullable=False, unique=True)
    firstname: Mapped[str] = mapped_column(nullable=False)
    lastname: Mapped[str] = mapped_column(nullable=False)
    email: Mapped[str] = mapped_column(nullable=False, unique=True)
    _hashed_password: Mapped[str] = mapped_column(nullable=False)
    created_at: Mapped[str] = mapped_column(
        nullable=False, default=datetime.utcnow)

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
