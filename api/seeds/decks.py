from api.models import db, Deck, environment
from sqlalchemy.sql import text


def seed_decks():
    seed_decks = [
        {"name": "Geography", "ownerId": 1},
        {"name": "Science", "ownerId": 4},
        {"name": "History", "ownerId": 5}
    ]

    decks = Deck.add_decks(seed_decks)
    new_decks = [db.session.add(deck) for deck in decks]
    db.session.commit()

    return


def undo_decks():
    if environment == "production":
        db.session.execute(
            text("TRUNCATE table decks RESTART IDENTITY CASCADE;"))
    else:
        db.session.execute(text("DELETE FROM decks"))

    db.session.commit()
