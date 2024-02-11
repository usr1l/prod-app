from flask import Blueprint, request, jsonify


auth_routes = Blueprint("auth_routes", __name__)


@auth_routes.route("/api/healthchecker", methods=["GET"])
def healthchecker():
    return {"status": "success", "message": "Integrate Flask Framework with Next.js"}
