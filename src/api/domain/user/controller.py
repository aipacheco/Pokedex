from ..user import repository as Repository
from ...functions import hash_pass, verify_user
import bcrypt

def create_user(new_user):
    correct_user = verify_user(new_user)
    if correct_user.get("error") is not None:
        return correct_user
    hashed = hash_pass(new_user['password'])
    return Repository.create_user(new_user['email'], hashed.decode())