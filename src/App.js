import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import Tips from "./components/Tips";
import Form from './components/Form'

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

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [isTaskFormOpen, setTaskFormStatus] = useState(false);

  // Update Task Name
  function updateName(event) {
    setName(event.target.value);
  }

  // Update Task Description
  function updateDescription(event) {
    setDescription(event.target.value);
  }

  // Update Task Date
  function updateDate(event) {
    setDate(event.target.value);
  }

  // Add Task
  function addTask(event) {
    const id = Math.floor(Math.random() * 100000);
    const newTask = {
      id: parseInt(id),
      name: name,
      description: description,
      date: date,
    };

    setTasks([...tasks, newTask]);
    setName("");
    setDescription("");
    setDate("");
    setTaskFormStatus(!isTaskFormOpen);
    event.preventDefault();
  }

  // Remove Task
  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Open and Close Form
  function toggleTaskForm() {
    setTaskFormStatus(!isTaskFormOpen);
  }

  return (
    <div className={isTaskFormOpen ? "stop-scrolling" : ""}>
      <div className="utilities">
        <h1>Task Tracker</h1>
        <h3 className="textLeftAlign">You have {tasks.length} tasks left</h3>
        <button className="addButton" onClick={toggleTaskForm}>Add Task</button>
      </div>
      {isTaskFormOpen && (
        <Form
          name={name}
          description={description}
          date={date}
          updName={updateName}
          updDescription={updateDescription}
          updDate={updateDate}
          addTask={addTask}
          toggleForm={toggleTaskForm}
        />
      )}
      <Tasks tasks={tasks} remove={removeTask} />
      <div className="utilities">
        <h3 className="textLeftAlign">Tips</h3>
      </div>
      <Tips tips={tips} />
    </div>
  );
}

export default App;
