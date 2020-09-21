import React from "react";
import List from "./components/sidebar/Sidelist";
import Tasks from "./components/Tasks";

import "./App.css";

function App() {
  // const [state, setState] = useState({
  //   tasks: [1, 3, 4],
  //   value: ''
  // });

  return (
    <div className="mainContainer">
      <List
        items={[
          {
            name: "first",
          },
          {
            name: "second",
          },
        ]}
      />
      <Tasks />
    </div>
  );
}

export default App;
