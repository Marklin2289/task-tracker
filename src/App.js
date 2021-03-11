import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

import React, { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
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
  // Add Task
  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // Delete Task
  const deleteTask = (id) => {
    // console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "nothing is show"
      )}
    </div>
  );
}

export default App;
