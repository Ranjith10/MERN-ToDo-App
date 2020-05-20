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
  const { todoFilter, handleFilter, todoList } = props;
  return (
    <div className="todo-container-footer">
      <div className="todo-items-msg">{todoList.length} items left</div>
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
      <div className="todo-clear-container">Clear completed</div>
    </div>
  );
};

export default TodoFooter;
