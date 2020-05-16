import React from "react";

const TodoListItem = props => {
  const { todo } = props;
  return <div className="todo-list-item">{todo}</div>;
};

export default TodoListItem;
