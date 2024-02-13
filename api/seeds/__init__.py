from flask.cli import AppGroup
from .users import seed_users, undo_users
from api.models import db, environment

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below

        undo_users()

    seed_users()

    # Add other seed functions here

# @seed_commands.command('users')
# def user_seed():
#     seed_users()

# @seed_commands.command('users undo')
# def user_unseed():
#     undo_users()

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
