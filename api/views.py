from flask import Blueprint, jsonify, request, json

from . import db
from .models import Task

main = Blueprint('main', __name__)


@main.route('/add_task', methods=['POST'])
def add_task():
    task_data = request.get_json()
    new_task = Task(number=task_data['taskNumber'], name=task_data['taskName'],
                    description=task_data['taskDescription'], date=task_data['taskDate'])
    db.session.add(new_task)
    db.session.commit()
    return 'Done', 201


@main.route('/delete_task', methods=['POST'])
def delete_task():
    taskNumber = request.get_json()["number"]
    Task.query.filter_by(number=taskNumber).delete()
    db.session.commit()
    return "Tasks deleted successfully", 202 


@main.route('/update_task', methods=['POST'])
def update_task():
    new_task = request.get_json()
    updated_task = {
        "name": new_task["taskName"],
        "description": new_task["taskDescription"],
        "date": new_task["taskDate"],
        "number": new_task["number"],
    }
    Task.query.filter(Task.number == new_task["number"]).update(updated_task)
    db.session.commit()

    return "Updated successfully", 203


@main.route('/tasks')
def tasks():
    task_list = Task.query.all()
    tasks = []

    for task in task_list:
        tasks.append({"number": task.number, "name": task.name, "description": task.description, "date": task.date})

    return jsonify({"tasks": tasks})
 