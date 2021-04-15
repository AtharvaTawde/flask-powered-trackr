import React, { useState } from "react";

function AddTaskForm({ toggleForm, onNewTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");

  return (
    <React.Fragment>
      <div className="covering-panel" onClick={toggleForm}></div>
      <form className="modal">
        <h2 className="textSpaceTop">Add Task</h2>
        <h4 className="textLeftAlign textSpaceBottom">Task</h4>
        <input
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
        ></input>
        <h4 className="textLeftAlign textSpaceBottom">Task Description</h4>
        <textarea
          rows="6"
          onChange={(e) => setTaskDescription(e.target.value)}
          value={taskDescription}
        ></textarea>
        <h4 className="textLeftAlign textSpaceBottom">Task Date</h4>
        <input
          onChange={(e) => setTaskDate(e.target.value)}
          value={taskDate}
        ></input>
        <br />
        <button
          type="submit"
          className="addButton"
          onClick={async () => {
            const taskNumber = Math.floor(Math.random() * 1000000000);
            const new_task = {
              taskNumber,
              taskName,
              taskDescription,
              taskDate,
            };
            const response = await fetch("/add_task", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(new_task),
            });

            console.log(response.ok, new_task);

            if (response.ok) {
              console.log("response worked");
              onNewTask(new_task);
              setTaskName("");
              setTaskDescription("");
              setTaskDate("");
            }
          }}
        >
          Add
        </button>
        <button className="cancelButton" onClick={toggleForm}>
          Cancel
        </button>
      </form>
    </React.Fragment>
  );
}

export default AddTaskForm;
