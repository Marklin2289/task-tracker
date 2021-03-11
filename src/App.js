import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's appointment",
      day: "Feb 5th at 2:30PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Doctor's appointment2",
      day: "Feb 5th at 2:30PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Doctor's appointment3",
      day: "Feb 5th at 2:30PM",
      reminder: false,
    },
    {
      id: 4,
      text: "Doctor's appointment4",
      day: "Feb 5th at 2:30PM",
      reminder: true,
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
