import React from "react";

function Form({ name, description, date, updName, updDescription, updDate, addTask, toggleForm }) {
  return (
    <React.Fragment>
      <div className="covering-panel"></div>
      <form className="modal">
        <h2 className="textSpaceTop">Add Task</h2>
        <h4 className="textLeftAlign textSpaceBottom">Task</h4>
        <input type="text" onChange={updName} value={name}></input>
        <h4 className="textLeftAlign textSpaceBottom">Task Description</h4>
        <textarea rows="6" onChange={updDescription} value={description}></textarea>
        <h4 className="textLeftAlign textSpaceBottom">Task Date</h4>
        <input type="text" onChange={updDate} value={date}></input>
        <br />
        <button className="addButton" onClick={addTask}>Add</button>
        <button className="cancelButton" onClick={toggleForm}>Cancel</button>
      </form>
    </React.Fragment>
  );
}

export default Form;
