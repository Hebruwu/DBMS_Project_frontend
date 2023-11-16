import traceback
from flask import Blueprint, Response, jsonify, request
from dataclasses import asdict
from database.eventhosting import get_engine, get_student, authenticate_student

student_routes = Blueprint('student_routes', __name__)

@student_routes.route("/student_details/<username>", methods = ["GET"])
def index(username: str) -> Response:
    try:
        engine = get_engine()
        student = get_student(engine, username)
        return asdict(student)
    except Exception as e:
        return jsonify(error=traceback.format_exc()),500
    
@student_routes.route("authenticate", methods=["GET"])
def authenitcate() -> Response:
    try:
        engine = get_engine()
        auth_args = request.json
        authenitcated = authenticate_student(engine, auth_args["username"], auth_args["password"])
        return jsonify(is_authenticated=authenitcated), (200 if authenitcated \
        else 401)
    except Exception as e:
        return jsonify(error=traceback.format_exc()),500