import React from "react";
import Tasks from "../Tasks"
import "./sidestyles.css";

const List = ({ showChecked, showAll }) => {
  return (
    <div className="sidebar">
      <div className="sidetasks">
        <button className="btn showAll" onClick={() => showAll() } disabled=''>showAll</button>
        <button className="btn showChecked" onClick={() => showChecked()}>
          showChecked
        </button>
        <button className="btn showCompleted">showNotCompleted</button>
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
