import traceback
from flask import Blueprint, Response, jsonify
from dataclasses import asdict
from database.eventhosting import get_engine, get_student

student_routes = Blueprint('student_routes', __name__)

@student_routes.route("/student_details/<username>", methods = ["GET"])
def index(username: str) -> Response:
    try:
        engine = get_engine()
        student = get_student(engine, username)
        return asdict(student)
    except Exception as e:
        return jsonify(error=traceback.format_exc()),500