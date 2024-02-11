import os
from flask import Flask, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_login import LoginManager
from api.models import db
from api.routes import auth_routes
from api.config import Config

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)

Migrate(app, db)

# Application Security
CORS(app, supports_credentials=True)


@app.route("/api/healthchecker", methods=["GET"])
def healthchecker():
    return {"status": "success", "message": "Integrate Flask Framework with Next.js"}


if __name__ == "__main__":
    app.run()
