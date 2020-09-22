import React, { useState } from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

import "../App.css";

const Tasks = () => {
  const [tasks, setTask] = useState([
    { title: "first task", completed: false, id: uuidv4() },
    { title: "first task", completed: false, id: uuidv4() },
  ]);
  const [value, setValue] = useState("");

  const addTask = () => {
    if (value !== "") {
      setTask([{ title: value, completed: false, id: uuidv4() }, ...tasks]);
      setValue("");
      console.log(tasks.id);
    } else {
      alert("pls type smth");
    }
  };

  const editTask = (id, value) => {
    let elemTask = tasks[id];
    elemTask.title = value;
  };


  const delTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTask(filteredTasks);
  };

  const checkedTask = (id) => {
    const tasksChecked = tasks.map((task) => {
      if (task.id === id) return { ...task, completed: !task.completed };
      else return task;
    });
    setTask(tasksChecked);
  };

  return (
    <div className="taskContainer">
      <input
        className="search"
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTask()}
      />
      <button onClick={addTask} onKeyPress={addTask} className="buttonPush">
        +
      </button>
      <div className="tasks">
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
