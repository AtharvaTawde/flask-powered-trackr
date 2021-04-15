from . import db


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.Integer)
    name = db.Column(db.String(50))
    description = db.Column(db.String(200))
    date = db.Column(db.String(50))
