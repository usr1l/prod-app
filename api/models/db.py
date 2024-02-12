import os
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase

environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


class Base(DeclarativeBase):
    pass


db = SQLAlchemy(model_class=Base)

# # helper function for adding prefix to foreign key column references in production
# def add_prefix_for_prod(attr):
#     if environment == "production":
#         return f"{SCHEMA}.{attr}"
#     else:
#         return attr
