import React, { useState, useEffect } from "react";
import "../App.css";
import Tasks from "./Tasks";
import AddTipForm from "./AppTipForm";
import AddTaskForm from "./AddTaskForm";

function Main() {
  // States
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/tasks").then((response) =>
      response.json().then((data) => {
        setTasks(data.tasks);
      })
    );
  }, []);

  console.log(tasks);

  const [isTaskFormOpen, setTaskFormStatus] = useState(false);
  const [isTipFormOpen, setTipFormStatus] = useState(false);

  // Remove Task
  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Open and Close Task Form
  function toggleTaskForm() {
    setTaskFormStatus(!isTaskFormOpen);
  }

  // Open and Close Tip Form
  function toggleTipForm() {
    setTipFormStatus(!isTipFormOpen);
  }

  function onNewTask(task) {
    setTasks([task, ...tasks]);
  }

  return (
    <React.Fragment>
      <div className="utilities">
        <h3 className="textLeftAlign">You have {tasks.length} tasks left</h3>
        <button className="addButton" onClick={toggleTaskForm}>
          Add Task
        </button>
      </div>
      {isTaskFormOpen && (
        <AddTaskForm onNewTask={onNewTask} toggleForm={toggleTaskForm} />
      )}
      {isTipFormOpen && (
        <AddTipForm onNewTask={onNewTask} toggleForm={toggleTipForm} />
      )}
      <Tasks className="temp-tasks" tasks={tasks} remove={removeTask} />
    </React.Fragment>
  );
}

export default Main;
