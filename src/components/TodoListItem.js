import React from "react";

const TodoListItem = props => {
  const { todo } = props;
  console.log({ todo });
  return <div className="todo-list-item">{todo.todo}</div>;
};

export default TodoListItem;
