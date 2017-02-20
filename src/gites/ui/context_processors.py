from flask import url_for

from gites.ui import app


def static_url(path):
    return url_for('static', filename=path)


@app.context_processor
def custom_processors():
    return {
        'static_url': static_url
    }