import React, { useState } from "react";

function UpdateForm({ toggleForm, currentTaskName, currentTaskDescription, currentTaskDate, currentTaskNumber }) {
  const [taskName, setTaskName] = useState(currentTaskName);
  const [taskDescription, setTaskDescription] = useState(currentTaskDescription);
  const [taskDate, setTaskDate] = useState(currentTaskDate);

  return (
    <React.Fragment>
      <div className="covering-panel" onClick={toggleForm}></div>
      <form className="modal">
        <h2 className="textSpaceTop">Update Task</h2>
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
						const number = currentTaskNumber
						const new_task = {
							taskName,
              taskDescription,
              taskDate,
							number,
            };

            const response = await fetch("/update_task", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(new_task),
            });

            if (response.ok) {
              console.log("response worked");
            }
						window.location.reload();
          }}
        >
          Update
        </button>
        <button className="cancelButton" onClick={toggleForm}>
          Cancel
        </button>
      </form>
    </React.Fragment>
  );
}

export default UpdateForm;
