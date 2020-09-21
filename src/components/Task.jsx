import React, { useState, Fragment } from "react";

import "../App.css";

const Task = ({ task, index, delTask, completed, addTask, editTask }) => {
  const [checked, setChecked] = useState(completed);
  const [edited, setEdited] = useState(false);

  return (
    <Fragment key={task + index}>
      <li className={checked ? "completed" : "simpleLi"}>
        <input type="checkbox" className="checkbox" checked={completed} onChange={() => setChecked(!checked)} />
        {edited ? <input type="text" className="editTaskInp" defaultValue={task.title} /> : task.title}
        {/* <span>{task.date}</span> */}
        <button className="delTask" onClick={() => delTask(index)}>
          ✕
        </button>
        <button
          className="editTask"
          onClick={() => {
            if (edited) {
              editTask(index, document.getElementsByClassName("editTaskInp")[0].value);
            }
            setEdited(!edited);
          }}
        >
          {edited ? <i>	&#x21ba;</i> : <i>&#x270e;</i>}
        </button>
      </li>
    </Fragment>
  );
};

export default Task;
