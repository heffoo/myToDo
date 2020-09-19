import React, { useState, Fragment } from "react";

import "../App.css";

const Tasks = (props) => {
  const date = Date();
  const [tasks, setTask] = useState([{ title: "1", date: date }]);
  const [value, setValue] = useState("");

  const addTask = () => {
    setTask([...tasks, { title: value, date: date }]);
  };
  const delTask = (idx) => {
    const filteredTasks = tasks.filter((value, index) => {
      return idx !== index;
    });
    setTask(filteredTasks);
  };

  return (
    <div className="taskContainer">
      <input className="search" value={value} type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={addTask} className="buttonPush">
        {" "}
        +
      </button>
      <div className="tasks">
        <ul className="taskList">
          {tasks.map((task, index) => (
            <Fragment key={task + index}>
              <li>
                {" "}
                <input className="checkbox" type="checkbox" />
                <span>{task.title} </span>
                {/* <span>{task.date}</span> */}
                <button className="delTask" onClick={() => delTask(index)}>
                  ✕
                </button>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Tasks;
