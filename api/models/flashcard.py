from . import db
from datetime import datetime


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
