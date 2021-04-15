import React, { useState } from "react";

function AddTipForm({ type, toggleForm, onNewTask }) {
  const [tipName, setTipName] = useState("");
  const [tipDescription, setTipDescription] = useState("");

  return (
    <React.Fragment>
      <div className="covering-panel"></div>
      <form className="modal">
        <h2 className="textSpaceTop">Add Tip</h2>
        <h4 className="textLeftAlign textSpaceBottom">Tip</h4>
        <input
          type="text"
          onChange={(e) => setTipName(e.target.value)}
          value={tipName}
        ></input>
        <h4 className="textLeftAlign textSpaceBottom">Tip Description</h4>
        <textarea
          rows="6"
          onChange={(e) => setTipDescription(e.target.value)}
          value={tipDescription}
        ></textarea>
        <br />
        {/* <button className="addButton" onClick={addTip}>
          Add
        </button>
        <button className="cancelButton" onClick={toggleForm}>
          Cancel
        </button> */}
      </form>
    </React.Fragment>
  );
}

export default AddTipForm;
