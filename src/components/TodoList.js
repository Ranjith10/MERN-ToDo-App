import React from "react";

import "./TodoList.css";
import TodoListItem from "./TodoListItem";

const TodoList = props => {
  let { todoList } = props;
  return (
    <div className="todo-list-container">
      {todoList.map((todo, index) => {
        return <TodoListItem key={index} index={index} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
