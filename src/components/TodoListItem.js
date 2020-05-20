import React from "react";

import "./TodoListItem.css";

const TodoListItem = props => {
  const { todo, index } = props;
  return (
    <>
      <div className="todo-list-item">
        <div className="todo-done-toggle">
          <input type="checkbox" id={`checkbox${index}`} />
          <label htmlFor={`checkbox${index}`} />
        </div>
        <div className="todo-item-task">{todo.todoItem}</div>
        <div className="todo-delete-icon"> &#10006; </div>
      </div>
    </>
  );
};

export default TodoListItem;
