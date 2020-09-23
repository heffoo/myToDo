import React from "react";


import "./sidestyles.css";

const List = ({ showChecked, showAll, showNotChecked, taskState}) => { console.log(taskState)
  return (
    <div className="sidebar">
      <div className="simpleTxt">my todo</div>
      <div className="sidetasks">
        
        <button className={taskState === 'showAll' ? 'activebtn' : "btn"  } onClick={() => showAll() } >showAll</button>
        <button className={taskState === "showChecked" ? 'activebtn' : "btn"  } onClick={() => showChecked() }>
          showChecked
        </button>
        <button className={taskState === "showNotChecked" ? 'activebtn' : "btn"  } onClick={()=> showNotChecked()}>showNotCompleted</button>
      </div>
      {/* <ul className="sideTasks">
        {items.map((items, index) => (
          <li key={items + index}>{items.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
};
export default List;
