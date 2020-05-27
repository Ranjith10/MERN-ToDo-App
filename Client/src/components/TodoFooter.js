import React from "react";

import {deleteTodo, getTodos} from "../service/FetchData";
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
    let completedListIds = todoList.filter(todo => todo.active === false).map(item => item._id);
    deleteTodo(completedListIds)
    .then(result => {
      if(result.status === 200) {
        console.log("in")
        getTodos()
          .then(result => {
            console.log(result.data)
            todoListDispatch({
              type: "fetch-list-todos",
              todoList: result.data
            })
          })
          .catch(err => console.log('err', err))
      }
    })  
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
