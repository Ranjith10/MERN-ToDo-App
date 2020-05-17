import React from "react";

import "./TodoListItem.css";

const TodoListItem = props => {
  const { todo } = props;
  return <div className="todo-list-item">{todo.todoItem}</div>;
};

export default TodoListItem;
