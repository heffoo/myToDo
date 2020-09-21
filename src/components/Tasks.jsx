import React, { useState, Fragment } from "react";
import Task from "./Task";

import "../App.css";

const Tasks = ({ completed }) => {
  const date = Date();
  const [tasks, setTask] = useState([{ title: "first task" }, { title: "first task" }]);
  const [value, setValue] = useState("");

  const addTask = () => {
    if (value !== "") {
      setTask([...tasks, { title: value, date: date }]);
      setValue("");
    } else {
      alert("pls type smth");
    }
  };

  const editTask = (idx, value) => {
    let elemTask = tasks[idx];
    elemTask.title = value;
    console.log(elemTask);
  };

  const addTaskByEnter = (event) => {
    if (event.key === "Enter" && value !== "") {
      setTask([...tasks, { title: value }]);
      setValue("");
    }
  };
  const delTask = (idx) => {
    const filteredTasks = tasks.filter((value, index) => {
      return idx !== index;
    });
    setTask(filteredTasks);
  };

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
        +
      </button>
      <div className="tasks">
        <ul className="taskList">
          {tasks.map((task, index) => (
            <Task task={task} index={index} delTask={delTask} completed={completed} editTask={editTask} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
