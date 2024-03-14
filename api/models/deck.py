from . import db, environment, deck_users
from datetime import datetime

# # many-to-many table for decks and flashcards
# deck_flashcards = db.Table(
#   "deck_flashcards",
#   db.Model.metadata,
#   db.Column("deck_id", db.Integer, db.ForeignKey(add_prefix_for_prod("decks.id")), primary_key=True),
#   db.Column("flashcard_id", db.Integer, db.ForeignKey(add_prefix_for_prod("flashcards.id"), primary_key=True))
# )


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
