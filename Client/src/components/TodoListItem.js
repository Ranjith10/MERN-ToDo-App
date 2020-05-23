import React from "react";

import "./TodoListItem.css";

const TodoListItem = props => {
  const { todo, index, todoListDispatch } = props;

  const handleRemoveTodo = index => {
    todoListDispatch({
      type: "delete-todo",
      id: index
    });
  };

  const handleCompleteTodo = index => {
    todoListDispatch({
      type: "complete-todo",
      id: index
    });
  };

  return (
    <>
      <div className="todo-list-item">
        <div className="todo-done-toggle">
          <input
            type="checkbox"
            onChange={() => handleCompleteTodo(index)}
            id={`checkbox${index}`}
            checked={!todo.active}
          />
          <label htmlFor={`checkbox${index}`} />
        </div>
        <div
          className={
            todo.active ? "todo-item-task" : "todo-item-task completed"
          }
        >
          {todo.todoItem}
        </div>
        <div
          className="todo-delete-icon"
          onClick={() => handleRemoveTodo(index)}
        >
          {" "}
          &#10006;{" "}
        </div>
      </div>
    </>
  );
};

export default TodoListItem;
