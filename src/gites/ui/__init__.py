"""Gites Web Based GUI configuration and setup."""
from flask import Flask
from gites.etc import settings

app = Flask(__name__, static_folder=settings.UI_STATIC_FOLDER)
app.config.from_object(settings)

# View imports after app registration
from gites.ui.views import home

__all__ = ('home')
