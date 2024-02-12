import os
from flask import Flask, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_wtf.csrf import CSRFProtect, generate_csrf
from http.server import BaseHTTPRequestHandler
from api.config import Config
from api.models import db, User
from api.routes import auth_routes

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
app.register_blueprint(auth_routes, url_prefix='/api/auth')
Migrate(app, db)

# Application Security
CORS(app, supports_credentials=True)

# if os.environ.get('FLASK_ENV') == 'production':
#     with app.app_context():
#         db.create_all()


@app.route('/api/hello', methods=['GET'])
def hello_world():
    return "Hello, World!"


@app.route("/api/healthchecker", methods=["GET"])
def healthchecker():
    return {"status": "success", "message": "Integrate Flask Framework with Next.js, AppRoute"}


# @app.after_request
# def inject_csrf_token(response):
#     response.set_cookie(
#         'csrf_token',
#         generate_csrf(),
#         secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
#         samesite='Strict' if os.environ.get(
#             'FLASK_ENV') == 'production' else None,
#         httponly=True
#     )
#     return response

if __name__ == "__main__":
    app.run()
