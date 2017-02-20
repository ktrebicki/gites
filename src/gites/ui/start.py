#!/usr/bin/env python
"""Run web application."""
from flask import Flask

from gites.ui import app
from gites.etc import settings


if __name__ == '__main__':
    with app.app_context():
        app.run(
            host=settings.UI_HOST,
            port=settings.UI_PORT,
        )
