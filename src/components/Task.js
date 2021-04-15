import React, { useState } from "react";
import UpdateForm from "./UpdateForm";

function Task({ task }) {
  const [isUpdateTaskFormOpen, setUpdateTaskFormStatus] = useState(false);

  function toggleUpdateTaskForm() {
    setUpdateTaskFormStatus(!isUpdateTaskFormOpen);
  }

  return (
    <React.Fragment>
      <div className="card">
        <h2 className="name">{task.name}</h2>
        <h4 className="description">{task.description}</h4>
        <h5 className="date">{task.date}</h5>
        <button
          className="closeButton"
          onClick={async () => {
            const send_number = { number: task.number.toString() };
            const response = await fetch(`/delete_task`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(send_number),
            });

            if (response.ok) {
              console.log("response worked");
            }
            window.location.reload(); // reload to show deletion
          }}
        >
          Remove Task
        </button>
        <button className="cancelButton" onClick={toggleUpdateTaskForm}>
          Update Task
        </button>
      </div>
      {isUpdateTaskFormOpen && (
        <React.Fragment>
          <UpdateForm
            toggleForm={toggleUpdateTaskForm}
            currentTaskName={task.name}
            currentTaskDescription={task.description}
            currentTaskDate={task.date}
            currentTaskNumber={task.number}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Task;
