import React, { useState } from "react";
import Task from "./Task";
import List from "./sidebar/Sidelist";
import { v4 as uuidv4 } from "uuid";

import "../App.css";

const Tasks = () => {
  const [tasks, setTask] = useState(JSON.parse(localStorage.getItem("data")) || []);
  const [value, setValue] = useState("");
  const [staticTask, setStaticTask] = useState(tasks);
  const [taskState, setTaskState] = useState("showAll");

  const addTask = () => {
    if (value !== "") {
      setTask([{ title: value, completed: false, id: uuidv4() }, ...tasks]);
      setValue("");
      localStorage.setItem("data", JSON.stringify([{ title: value, completed: false, id: uuidv4() }, ...tasks]));
    } else {
      alert("pls type smth");
    }
  };

  const editTask = (id, value) => {
    let elemTask = tasks[id];
    elemTask.title = value;
    localStorage.setItem("data", JSON.stringify(tasks));
  };

  const delTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTask(filteredTasks);
    localStorage.setItem("data", JSON.stringify(filteredTasks));
  };

  const showChecked = () => {
    setTaskState("showChecked");
    if (taskState === "showAll") {
      const filteredTasks = tasks.filter((task) => task.completed);
      setStaticTask(tasks);
      localStorage.setItem("data", JSON.stringify(staticTask));
      setTask(filteredTasks);

      console.log("taskState", taskState);
      console.log("tasks", tasks);
      console.log("staticTasks", staticTask);
    }
  };

  const showAll = () => {
    setTaskState("showAll");
    if (taskState === "showChecked") {
      setTask(staticTask);
      localStorage.setItem("data", JSON.stringify(staticTask));
      console.log("taskState2", taskState);
      console.log("tasks2", tasks);
      console.log("staticTasks2", staticTask);
    }
  };
  const checkedTask = (id) => {
    const tasksChecked = tasks.map((task) => {
      if (task.id === id) return { ...task, completed: !task.completed };
      else return task;
    });
    localStorage.setItem("data", JSON.stringify(tasksChecked));
    setTask(tasksChecked);
  };

  return (
    <div className="mainContainer">
      <List showChecked={showChecked} showAll={showAll} />
      <div className="taskContainer">
        <div className="seButton">
          <input
          className="search"
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={addTask} onKeyPress={addTask} className="buttonPush">
          +
        </button>
        </div>
          <ul className="taskList">
            {tasks.map((task, index) => (
              <Task
                task={task}
                index={index}
                key={index}
                delTask={delTask}
                editTask={editTask}
                checkedTask={checkedTask}
              />
            ))}
          </ul>
      </div>
    </div>
  );
};

export default Tasks;
