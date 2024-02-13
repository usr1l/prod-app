from api.models import db, FlashCard, environment
from sqlalchemy.sql import text


def seed_flashcards():
    seed_flashcards = [
        # Deck 1 Flashcards
        {"front": "What is the capital of France?", "back": "Paris", "deckId": 1},
        {"front": "What is the currency of Japan?", "back": "Yen", "deckId": 1},
        {"front": "In which year did the Titanic sink?", "back": "1912", "deckId": 1},

        # Deck 2 Flashcards
        {"front": "Who wrote 'Romeo and Juliet'?",
         "back": "William Shakespeare", "deckId": 2},
        {"front": "What is the chemical formula for water?",
            "back": "H2O", "deckId": 2},
        {"front": "Who painted the Mona Lisa?",
         "back": "Leonardo da Vinci", "deckId": 2},

        # Deck 3 Flashcards
        {"front": "What is the nearest planet to the Sun?",
         "back": "Mercury", "deckId": 3},
        {"front": "What is the largest mammal?",
            "back": "Blue Whale", "deckId": 3},
        {"front": "What is the longest river in the world?",
         "back": "Nile River", "deckId": 3}
    ]

    flashcards = FlashCard.add_flash_cards(seed_flashcards)
    new_flashcards = [db.session.add(card) for card in flashcards]
    db.session.commit()
    return


def undo_flashcards():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table flashcards RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM flashcards"))

    db.session.commit()
