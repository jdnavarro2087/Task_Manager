from flask import (
    Flask,
    request
)
from app.database import task


app = Flask (__name__)

@app.get("/task")
def get_all_task():
    task_list = task.scan()
    out = {
        "task": task_list,
        "ok": True
    }
    return out

@app.get("/task/<int:pk>")
def get_single_task(pk):
    single_task = task.select_by_id(pk)
    out = {
        "task": single_task,
        "ok": True
    }
    return out 

@app.put("/tasks")
def create_task():
    task_data = request.json
    task.insert(task_data)
    return "", 204

@app.put("/task/<int:pk>")
def update_task(pk):
    task_data = request.json
    task.update_by_id(task_data, pk)
    return "", 204

@app.delete("/task/<int:pk>")
def delete_task(pk):
    task.delete_by_id(pk)
    return "", 204
