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
      <div className="tasks">
        <ul className="taskList">
          {tasks.map((task, index) => (
            <Fragment key={task + index}>
              <li>
                <span>{task.title} </span>
                <span>{task.date}</span>
              </li>
              <button onClick={() => delTask(index)}>del</button>
            </Fragment>
          ))}
        </ul>
        <input value={value} type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={addTask} className="buttonPush">
          {" "}
          add
        </button>
      </div>
    </div>
  );
};
export default Tasks;
