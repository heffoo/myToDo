import React from "react";

import "./sidestyles.css";

const List = ({ showChecked, showAll, showNotChecked}) => {
  return (
    <div className="sidebar">
      <div className="sidetasks">
        <button className="btn showAll" onClick={() => showAll() } >showAll</button>
        <button className="btn showChecked" onClick={() => showChecked() }>
          showChecked
        </button>
        <button className="btn showCompleted" onClick={()=> showNotChecked()}>showNotCompleted</button>
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
