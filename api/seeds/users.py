from api.models import db, User, environment
from sqlalchemy.sql import text


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
