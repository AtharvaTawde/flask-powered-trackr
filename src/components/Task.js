import React from "react";

function Task({ task, remove }) {
  return (
    <div className="card">
      <h2 className="name">{task.name}</h2>
      <h4 className="description">{task.description}</h4>
      <h5 className="date">{task.date}</h5>
      <button className="closeButton" onClick={() => remove(task.id)}>
        Remove Task
      </button>
    </div>
  );
}

export default Task;
