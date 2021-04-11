import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import Tips from "./components/Tips";
import Form from "./components/Form";

function App() {
  // States
  const [tasks, setTasks] = useState([
    {
      id: "0",
      name: "AP Chem: Homework 19",
      description: "p. 825 (51, 52, 53, 57, 58, 60)",
      date: "April 13, 2021",
    },
    {
      id: "1",
      name: "AP Calc: Homework 22",
      description: "p. 409 (1-21 odd, 37-45 EOO, 53-57, 59)",
      date: "April 16, 2021",
    },
  ]);

  const [tips, setTips] = useState([
    {
      id: "0",
      name: "Mean Value Theorem",
      description: `
        Definition: the slope of the tangent line is equal to the 
        slope of the secant line. In other terms, the average slope
        is equal to the instantaneous slope. Claiming that there exists
        some x = c such that f(b) - f(a) / b - a = f'(c).
      `,
    },
  ]);

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [isTaskFormOpen, setTaskFormStatus] = useState(false);
  const [tipName, setTipName] = useState("");
  const [tipDescription, setTipDescription] = useState("");
  const [isTipFormOpen, setTipFormStatus] = useState(false);

  // Update Task Name
  function updateTaskName(event) {
    setTaskName(event.target.value);
  }

  // Update Task Description
  function updateTaskDescription(event) {
    setTaskDescription(event.target.value);
  }

  // Update Task Date
  function updateTaskDate(event) {
    setTaskDate(event.target.value);
  }

  // Update Tip Name
  function updateTipName(event) {
    setTipName(event.target.value);
  }

  // Update Tip Description
  function updateTipDescription(event) {
    setTipDescription(event.target.value);
  }

  // Add Task
  function addTask(event) {
    const id = Math.floor(Math.random() * 100000);
    const newTask = {
      id: parseInt(id),
      name: taskName,
      description: taskDescription,
      date: taskDate,
    };

    setTasks([...tasks, newTask]);
    setTaskName("");
    setTaskDescription("");
    setTaskDate("");
    setTaskFormStatus(!isTaskFormOpen);
    event.preventDefault();
  }

  // Remove Task
  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Open and Close Task Form
  function toggleTaskForm() {
    setTaskFormStatus(!isTaskFormOpen);
  }

  // Add Tip
  function addTip(event) {
    const id = Math.floor(Math.random() * 100000);
    const newTip = {
      id: parseInt(id),
      name: tipName,
      description: tipDescription,
    };

    setTips([...tips, newTip]);
    setTipName("");
    setTipDescription("");
    setTipFormStatus(!isTipFormOpen);
    event.preventDefault();
  }

  // Remove Task
  function removeTip(id) {
    setTips(tips.filter((tip) => tip.id !== id));
  }

  // Open and Close Task Form
  function toggleTipForm() {
    setTipFormStatus(!isTipFormOpen);
  }

  return (
    <div className="App">
      <div className="utilities">
        <h1>Task Tracker</h1>
        <h3 className="textLeftAlign">You have {tasks.length} tasks left</h3>
        <button className="addButton" onClick={toggleTaskForm}>
          Add Task
        </button>
      </div>
      {isTaskFormOpen && (
        <Form
          type="task"
          name={taskName}
          description={taskDescription}
          date={taskDate}
          updName={updateTaskName}
          updDescription={updateTaskDescription}
          updDate={updateTaskDate}
          addTask={addTask}
          toggleForm={toggleTaskForm}
        />
      )}
      {isTipFormOpen && (
        <Form
          type="tip"
          name={tipName}
          description={tipDescription}
          updName={updateTipName}
          updDescription={updateTipDescription}
          addTip={addTip}
          toggleForm={toggleTipForm}
        />
      )}
      <Tasks tasks={tasks} remove={removeTask} />
      <div className="utilities">
        <h3 className="textLeftAlign">Tips</h3>
        <button className="addButton" onClick={toggleTipForm}>
          Add Tip
        </button>
      </div>
      <Tips tips={tips} remove={removeTip} />
    </div>
  );
}

export default App;
