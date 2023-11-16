import traceback
from flask import Blueprint, Response, jsonify
from dataclasses import asdict
from database.eventhosting import get_engine, get_admin

admin_routes = Blueprint('admin_routes', __name__)

@admin_routes.route("/admin_details/<username>", methods = ["GET"])
def index(username: str) -> Response:
    try:
        engine = get_engine()
        admin = get_admin(engine, username)
        return asdict(admin)
    except Exception as e:
        return jsonify(error=traceback.format_exc()),500