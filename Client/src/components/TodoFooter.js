import React from "react";

import "./TodoFooter.css";

const TodoFilter = props => {
  const { todoFilter, handleFilter, filter } = props;
  return (
    <div
      onClick={() => handleFilter(`${filter}`)}
      className={todoFilter === `${filter}` ? "active" : ""}
    >
      {filter}
    </div>
  );
};

const TodoFooter = props => {
  const { todoFilter, handleFilter, todoList, todoListDispatch } = props;

  const todoItemsActive = todoList.filter(todo => todo.active === true).length;
  const msg = todoItemsActive === 1 ? "item left" : "items left";
  const clearCompletedMsg =
    todoList.filter(todo => todo.active !== true).length > 0;

  const handleClearCompleted = () => {
    todoListDispatch({
      type: "clear-completed-todo"
    });
  };

  return (
    <div className="todo-container-footer">
      <div className="todo-items-msg">
        {todoItemsActive} {msg}
      </div>
      <div className="todo-status-container">
        {["All", "Active", "Completed"].map((filter, index) => {
          return (
            <TodoFilter
              key={index}
              filter={filter}
              todoFilter={todoFilter}
              handleFilter={handleFilter}
            />
          );
        })}
      </div>
      {clearCompletedMsg ? (
        <div className="todo-clear-container" onClick={handleClearCompleted}>
          Clear completed
        </div>
      ) : (
        <div className="todo-clear-container" />
      )}
    </div>
  );
};

export default TodoFooter;
