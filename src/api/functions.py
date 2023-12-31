import bcrypt

def hash_pass(password):
    hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    return hashed

def verify_user(new_user):
    required_fields = {
        'email': "El campo email debe estar completo",
        'password': "El campo contraseña no puede estar vacío",
    }

    for field, error_msg in required_fields.items():
        if new_user[field] is None or new_user[field] == "":
            return {"msg": error_msg, "error": True, "status": 400}
        
        if field == 'password' and len(new_user[field]) < 8:
            return {"msg": "La contraseña debe tener al menos 8 caracteres", "error": True, "status": 400}
        
        if field == 'password' and len(new_user[field]) > 20 :
            return {"msg": "La contraseña debe ser como máximo de 20 caracteres", "error": True, "status": 400}

    return new_user