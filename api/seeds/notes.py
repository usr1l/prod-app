from api.models import db, Note, environment, SCHEMA
from sqlalchemy.sql import text


def seed_notes():
    seed_notes = [
        {"title": "Meeting Notes",
            "content": "Discussed project milestones and deadlines.", "ownerId": 1},
        {"title": "Grocery List", "content": "Milk, Eggs, Bread, Apples", "ownerId": 1},
        {"title": "Python Study Guide",
         "content": "Review OOP concepts and Python standard library.", "ownerId": 2},
        {"title": "Workout Plan",
         "content": "Monday - Cardio, Tuesday - Strength training", "ownerId": 2},
        {"title": "Book Recommendations",
         "content": "The Alchemist, 1984, To Kill a Mockingbird", "ownerId": 3},
        {"title": "Travel Itinerary",
         "content": "Visit Paris, Rome, and Barcelona in July", "ownerId": 3}
    ]

    notes = Note.add_notes(seed_notes)
    new_notes = [db.session.add(note) for note in notes]
    db.session.commit()


def undo_notes():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.decks RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM decks"))

    db.session.commit()
