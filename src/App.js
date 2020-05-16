import React from "react";
import "./styles.css";

import Todo from "./components/Todo";

export default function App() {
  return (
    <div className="App">
      <div className="todo-header">ToDo Manager</div>
      <Todo />
    </div>
  );
}
