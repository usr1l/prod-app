from api.models import db, User, environment, FlashCard, Deck, Task, Note, deck_users
from sqlalchemy.sql import text
from datetime import datetime

# Adds a demo user, you can add other users here if you want


def seed_users():
    user_seeds = [
        {
            "username": "Demo",
            "email": "demo@aa.io",
            "firstname": "Demo",
            "lastname": "DemoDemo",
            "password": "password"
        },
        {
            "username": "Marnie",
            "email": "marnie@aa.io",
            "firstname": "Marnie",
            "lastname": "Dem",
            "password": "password"
        },
        {
            "username": "Bobbie",
            "email": "bobbie@aa.io",
            "firstname": "Bobbie",
            "lastname": "Bob",
            "password": "password"
        },
        {
            "username": "Momo",
            "email": "momo@app.io",
            "firstname": "Momo",
            "lastname": "Alam",
            "password": "momoalam"
        },
        {
            "username": "Tony",
            "email": "tony@app.io",
            "firstname": "Tony",
            "lastname": "Zheng",
            "password": "tonyzheng"
        }
    ]

    users = User.add_users(user_seeds)
    new_users = [db.session.add(user) for user in users]
    db.session.commit()
    return

# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.


def undo_users():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()


def seed_tasks():
    seed_tasks = [
        {
            "label": "Project Planning",
            "description": "Plan the project roadmap and milestones",
            "startTime": datetime(2024, 1, 20, 9, 0),
            "endTime": datetime(2024, 1, 20, 11, 0),
            "completed": False,
            "ownerId": 4
        },
        {
            "label": "Write Report",
            "description": "Prepare the weekly financial report",
            "startTime": datetime(2024, 1, 21, 10, 0),
            "endTime": datetime(2024, 1, 21, 12, 0),
            "completed": True,
            "ownerId": 5
        },
        {
            "label": "Team Meeting",
            "description": "Discuss project progress with the team",
            "startTime": datetime(2024, 1, 22, 14, 0),
            "endTime": datetime(2024, 1, 22, 15, 0),
            "completed": False,
            "ownerId": 2
        },
        {
            "label": "Code Review",
            "description": "Review the new code submissions",
            "startTime": datetime(2024, 1, 23, 16, 0),
            "endTime": datetime(2024, 1, 23, 18, 0),
            "completed": False,
            "ownerId": 1
        },
        {
            "label": "Client Presentation",
            "description": "Present the project proposal to the client",
            "startTime": datetime(2024, 1, 24, 13, 0),
            "endTime": datetime(2024, 1, 24, 14, 30),
            "completed": False,
            "ownerId": 3
        }
    ]

    tasks = Task.add_tasks(seed_tasks)
    new_tasks = [db.session.add(task) for task in tasks]
    db.session.commit()


def undo_tasks():
    if environment == "Production":
        db.session.execute(
            f"TRUNCATE table tasks RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM tasks"))

    db.session.commit()


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
            f"TRUNCATE table decks RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM decks"))

    db.session.commit()


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
            f"TRUNCATE table decks RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM decks"))

    db.session.commit()
