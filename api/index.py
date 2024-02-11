import os
from flask import Flask, request, session, redirect
from flask_cors import CORS
from flask_login import LoginManager


app = Flask(__name__)


# Application Security
CORS(app, supports_credentials=True)


@app.route("/api/healthchecker", methods=["GET"])
def healthchecker():
    return {"status": "success", "message": "Integrate Flask Framework with Next.js"}


if __name__ == "__main__":
    app.run()
