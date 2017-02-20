"""Default configuration."""
import os

from path import Path

SETTINGS_DIR = os.path.abspath(os.path.split(__file__)[0])
PROJECT_DIR = os.path.join(SETTINGS_DIR, '..', '..')
ROOT_DIR = Path(__file__).parent.parent.parent.parent.abspath()

UI_HOST = '127.0.0.1'
UI_PORT = '8000'
UI_STATIC_FOLDER = ROOT_DIR / "gites" / "ui" / "static"
