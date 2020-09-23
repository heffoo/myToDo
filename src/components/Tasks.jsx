import React, { useState } from "react";
import Task from "./Task";
import List from "./sidebar/Sidelist";
import { v4 as uuidv4 } from "uuid";

import "../App.css";

const Tasks = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("data")) || []);
  const [value, setValue] = useState("");
  const [staticTasks, setStaticTasks] = useState(tasks);
  const [taskState, setTaskState] = useState('showAll');

  const addTask = () => {
    if (value !== "") {
      setTasks([{ title: value, completed: false, id: uuidv4() }, ...tasks]);
      setStaticTasks([{ title: value, completed: false, id: uuidv4() }, ...staticTasks]);

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
    setTasks(filteredTasks);
    localStorage.setItem("data", JSON.stringify(filteredTasks));
  };

  const showChecked = () => {
    setTaskState("showChecked");
  if (taskState === "showAll") {
      const filteredTasks = tasks.filter((task) => task.completed);
      setStaticTasks(tasks);
      localStorage.setItem("data", JSON.stringify(staticTasks));
      setTasks(filteredTasks);
      
      console.log("filtered", filteredTasks);
      console.log("taskState", taskState);
      console.log("tasks", tasks);
      console.log("staticTasks", staticTasks);
  }
  };

  const showAll = () => {
    setTaskState("showAll");
     if (taskState === "showChecked") {
      setTasks(staticTasks);
      
      localStorage.setItem("data", JSON.stringify(staticTasks));

      console.log("taskState2", taskState);
      console.log("tasks2", tasks);
      console.log("staticTasks2", staticTasks);
  }
  };
  const checkedTask = (id) => {
    const tasksChecked = tasks.map((task) => {
      if (task.id === id) return { ...task, completed: !task.completed };
      else return task;
    });
    localStorage.setItem("data", JSON.stringify(tasksChecked));
    setTasks(tasksChecked);
    const staticTasksChecked = staticTasks.map((task) => {
      if (task.id === id) return { ...task, completed: !task.completed };
      else return task;
    });
    setStaticTasks(staticTasksChecked);
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
