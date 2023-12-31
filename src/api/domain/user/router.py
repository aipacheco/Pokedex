from flask import Flask, request, jsonify, url_for, Blueprint
from ...models.index import User
from ..user import controller as Controller
# from ...handle_response import handle_response as Response



api = Blueprint('api/user', __name__)

@api.route('/', methods=['POST'])
def create_user():
    body = request.get_json()
    new_user = Controller.create_user(body)
    if isinstance(new_user, User):
        return jsonify(new_user.serialize(), "usuario creado correctamente", 201)