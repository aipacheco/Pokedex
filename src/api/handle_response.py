from flask import jsonify


def error(msg, status_code):
    return jsonify({
        "msg": msg,
        "error": True
    }), status_code

def ok(data, msg, status_code):
    return jsonify({
        "msg": msg,
        "error": False,
        "data": data
    }), status_code