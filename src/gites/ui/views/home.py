"""Home page views."""
from flask import render_template

from gites.ui import app


@app.route('/')
def home():
    return render_template('home.html')
