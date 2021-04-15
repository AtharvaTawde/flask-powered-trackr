# How to create a fresh new database
# delete the old database.db file
# navigate to api, run `pipenv shell` then open `python` terminal
# run this script using `python create_database.py`

from api.models import Task
from api import db, create_app

db.create_all(app=create_app())