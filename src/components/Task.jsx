import React, { useState } from "react";

import "../App.css";

const Task = ({ task, index, delTask,  checkedTask, editTask }) => {
    const [edited, setEdited] = useState(false);

  return (
    <>
      <li >
        <input type="checkbox" className="checkbox" checked={task.completed} onChange={() => checkedTask(task.id)} />
        {edited ? <input type="text" className="editTaskInp" value={task.title} /> : <span className={task.completed ? "completed" : "simpleLi"}>{task.title}</span>}
        {/* <span>{task.date}</span> */}
        <button className="delTask" onClick={() => delTask(task.id)}>
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
          {edited ? <i> &#x21ba;</i> : <i>&#x270e;</i>}
        </button>
      </li>
    </>
  );
};

export default Task;
