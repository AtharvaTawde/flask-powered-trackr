import React, { useState, useEffect } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTipForm from "./components/AppTipForm";
import AddTaskForm from "./components/AddTaskForm";

function App() {
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
    <div className="App">
      <div className="utilities">
        <h1>Trackr</h1>
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
    </div>
  );
}

export default App;
