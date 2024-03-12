import os
from flask import Flask, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_wtf.csrf import CSRFProtect, generate_csrf
from api.config import Config
from api.models import db, User, FlashCard, Deck, Note, Task, deck_users
from api.routes import auth_routes, user_routes
from api.seeds import seed_commands, seed_decks, undo_decks, seed_flashcards, undo_flashcards, seed_notes, undo_notes, seed_tasks, undo_tasks, seed_users, undo_users


app = Flask(__name__)

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)


app.config.from_object(Config)
db.init_app(app)
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(user_routes, url_prefix='/api/users')
Migrate(app, db)

# Application Security
CORS(app, supports_credentials=True)

# create tables in the vercel postgres database
if os.environ.get('FLASK_ENV') == 'production':
    with app.app_context():
        db.create_all()

        # first unseed all tables
        undo_notes()
        undo_tasks()
        undo_flashcards()
        undo_decks()
        undo_users()

        # then seed all tables
        seed_users()
        seed_decks()
        seed_flashcards()
        seed_tasks()
        seed_notes()


@app.route('/api/hello', methods=['GET'])
def hello_world():
    return "Hello, World!"


@app.route("/api/healthchecker", methods=["GET"])
def healthchecker():
    return {"status": "success", "message": "Integrate Flask Framework with Next.js, AppRoute"}


@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
        samesite='Strict' if os.environ.get(
            'FLASK_ENV') == 'production' else None,
        httponly=True
    )
    return response


@app.route("/api/docs")
def api_help():
    """
    Returns all API routes and their doc strings
    """
    acceptable_methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
    route_list = {rule.rule: [[method for method in rule.methods if method in acceptable_methods],
                              app.view_functions[rule.endpoint].__doc__]
                  for rule in app.url_map.iter_rules() if rule.endpoint != 'static'}
    return route_list


if __name__ == "__main__":
    app.run()
