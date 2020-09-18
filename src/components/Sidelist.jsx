import React from "react";

import "../App.css";

const List = ({ items }) => {
  return (
    <div className="sidebar">
      <ul className="sideTasks">
        {items.map((items, index) => (
          <li key={items + index}>{items.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default List;
