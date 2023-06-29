from flask import Flask, request, jsonify, url_for, Blueprint
from ...models.index import User
from ..user import controller as Controller
import handle_response 

Response = handle_response()

api_user = Blueprint('api/user', __name__)

@api_user.route('/', methods=['POST'])
def create_user():
    body = request.get_json()
    new_user = Controller.create_user(body)
    if isinstance(new_user, User):
        return Response.ok(new_user.serialize(), "usuario creado correctamente", 201)