import React, { useState, Fragment } from "react";

import "../App.css";

const Tasks = ({ completed }) => {
  const date = Date();
  const [tasks, setTask] = useState([{ id: 1, title: "1", date: date }]);
  const [value, setValue] = useState("");

  const addTask = () => {
    setTask([...tasks, { id: value, title: value, date: date }]);
  };
  const addTaskByEnter = (event) => {
    console.log(123);
    if (event.key === "Enter") {
      setTask([...tasks, { title: value }]);
    }
  };
  const delTask = (idx) => {
    const filteredTasks = tasks.filter((value, index) => {
      return idx !== index;
    });
    setTask(filteredTasks);
  };

  const [checked, setChecked] = useState(completed);
  // const classes = ["tasks"];
  // if (checked) {
  //   classes.push("completed");
  // }
  return (
    <div className="taskContainer">
      <input
        className="search"
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={addTaskByEnter}
      />
      <button onClick={addTask} onKeyPress={addTaskByEnter} className="buttonPush">
        {" "}
        +
      </button>
      <div className="tasks">
        <ul className="taskList">
          {tasks.map((task, index) => (
            <Fragment key={task + index}>
              <li className={checked ? "completed" : ""}>
                <input type="checkbox" className="checkbox" checked={completed} onChange={() => setChecked(!checked)} />
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
