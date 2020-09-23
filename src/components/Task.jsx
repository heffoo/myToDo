import React, { useState } from "react";
import createIcon from '../img/create.svg'
import saveIcon from '../img/save.svg'


import "../App.css";

const Task = ({ task, index, delTask,  checkedTask, editTask }) => {
    const [edited, setEdited] = useState(false);

    const editFunc = () => {
       if (edited) {
      editTask(index, document.getElementsByClassName("editTaskInp")[0].value);
      
    }
    setEdited(!edited);
  }
  return (
    <>
      <li className="mainLi">
        <input type="checkbox" className="checkbox" checked={task.completed} onChange={() => checkedTask(task.id)} />
        {edited ? <div className="forInput"><input type="text" className="editTaskInp" defaultValue={task.title} onKeyPress={(e) => e.key === "Enter" && editFunc() }/> </div> : <div className={task.completed ? "completed" : "simpleLi"}>{task.title}</div>}
        {/* <span>{task.date}</span> */}
       
        <button
          className="editTask"
          onClick={editFunc}
          
        >
          {edited ? <img src={saveIcon}/> : <img src={createIcon}/>}
        </button>
         <button className="delTask" onClick={() => delTask(task.id)}>
          ✕
        </button>
      </li>
    </>
  );
};

export default Task;
