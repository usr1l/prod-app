from . import db, environment
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

deck_users = db.Table(
    "deck_users",
    db.Model.metadata,
    db.Column("deck_id", db.Integer, db.ForeignKey(
        "decks.id"), primary_key=True),
    db.Column("user_id", db.Integer, db.ForeignKey(
        "users.id"), primary_key=True)
)


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

    tasks = db.relationship("Task", back_populates="owner",
                            cascade="all, delete-orphan")
    notes = db.relationship("Note", back_populates="owner",
                            cascade="all, delete-orphan")
    decks = db.relationship("Deck", back_populates="owner",
                            cascade="all, delete-orphan")

    saved_decks = db.relationship(
        "Deck", secondary=deck_users, back_populates="deck_users")

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


class Task(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    label = db.Column(db.String, nullable=False)
    description = db.Column(db.Text, nullable=False)
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime, nullable=False)
    completed = db.Column(db.Boolean, nullable=False, default=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    owner_id = db.Column(db.Integer, db.ForeignKey(
        "users.id"), nullable=False)
    last_edit = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    owner = db.relationship("User", back_populates="tasks", single_parent=True)

    @classmethod
    def add_tasks(cls, tasks):
        if isinstance(tasks, list):
            new_tasks = [
                cls(
                    label=task["label"],
                    description=task["description"],
                    start_time=task["startTime"],
                    end_time=task["endTime"],
                    completed=task["completed"],
                    owner_id=task["ownerId"]
                ) for task in tasks
            ]

        if isinstance(tasks, dict):
            new_tasks = cls(
                label=tasks["label"],
                description=tasks["description"],
                start_time=tasks["startTime"],
                end_time=tasks["endTime"],
                completed=tasks["completed"],
                owner_id=tasks["ownerId"]
            )

        return new_tasks if new_tasks else None

    def to_safe_dict(self):
        return {
            "id": self.id,
            "label": self.label,
            "description": self.description,
            "startTime": self.start_time,
            "endTime": self.end_time,
            "completed": self.completed,
            "ownerId": self.owner_id,
            "createdAt": self.created_at,
            "lastEdit": self.last_edit
        }

    def __repr__(self):
        return f"<Task {self.id}: {self.label}, Owner: {self.owner_id}>"


class Note(db.Model):
    __tablename__ = 'notes'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    content = db.Column(db.Text, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    last_edit = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    owner = db.relationship("User", back_populates="notes", single_parent=True)

    @classmethod
    def add_notes(cls, notes):
        if isinstance(notes, list):
            new_notes = [
                cls(
                    title=note["title"],
                    content=note["content"],
                    owner_id=note["ownerId"]
                ) for note in notes
            ]

        if isinstance(notes, dict):
            new_notes = cls(
                title=notes["title"],
                content=notes["content"],
                owner_id=notes["ownerId"]
            )

        return new_notes if new_notes else None

    def to_safe_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "content": self.content,
            "usersId": self.owner_id,
            "createdAt": self.created_at,
            "lastEdit": self.last_edit
        }

    def __repr__(self):
        return f"<Note {self.id}: {self.title}, Owner: {self.owner_id}>"


class FlashCard(db.Model):
    __tablename__ = "flashcards"

    id = db.Column(db.Integer, primary_key=True)
    front = db.Column(db.Text, nullable=False)
    back = db.Column(db.Text, nullable=False)
    deck_id = db.Column(db.Integer, db.ForeignKey("decks.id"), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    last_edit = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    deck = db.relationship(
        "Deck", back_populates="flashcards", single_parent=True)

    @classmethod
    def add_flash_cards(cls, cards):
        if isinstance(cards, list):
            new_cards = [
                cls(
                    front=card["front"],
                    back=card["back"],
                    deck_id=card["deckId"]
                ) for card in cards
            ]

        if isinstance(cards, dict):
            new_cards = cls(
                front=cards["front"],
                back=cards["back"],
                deck_id=cards["deckId"]
            )

        return new_cards if new_cards else None

    def to_safe_dict(self):
        return {
            "id": self.id,
            "front": self.front,
            "back": self.back,
            "deckId": self.deck_id,
            "createdAt": self.created_at,
            "lastEdit": self.last_edit
        }

    def __repr__(self):
        return f"<FlashCard {self.id}, Deck {self.deck_id}>"


class Deck(db.Model):
    __tablename__ = "decks"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey(
        "users.id"), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    last_edit = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    flashcards = db.relationship(
        "FlashCard", back_populates="deck", cascade="all, delete-orphan")
    owner = db.relationship("User", back_populates="decks", single_parent=True)
    deck_users = db.relationship(
        "User", secondary=deck_users, back_populates="saved_decks")

    @classmethod
    def add_decks(cls, decks):
        if isinstance(decks, list):
            new_decks = [
                cls(
                    name=deck["name"],
                    owner_id=deck["ownerId"]
                ) for deck in decks
            ]

        if isinstance(decks, dict):
            new_decks = cls(
                name=decks["name"],
                owner_id=decks["ownerId"]
            )

        return new_decks if new_decks else None

    def to_safe_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "ownerId": self.owner_id,
            "createdAt": self.created_at,
            "lastEdit": self.last_edit
        }

    def __repr__(self):
        return f"<Deck {self.id}: {self.name}, Owner: {self.owner_id}>"
