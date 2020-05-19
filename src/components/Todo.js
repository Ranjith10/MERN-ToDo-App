import React, { useState } from "react";

import "./Todo.css";
import TodoList from "./TodoList";

const Todo = props => {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleOnSubmit = e => {
    //form submit by default reloads page on submit
    //stop the default behavior
    e.preventDefault();
    let todoItem = e.target[0].value;
    let todoValue = {
      todoItem,
      isActive: true
    };
    setTodoValue("");
    let listTodo = [...todoList, todoValue];
    setTodoList(listTodo);
  };
  return (
    <>
      <div className="todo-container">
        <form onSubmit={handleOnSubmit}>
          <input
            className="todo-input-box"
            placeholder="What needs to be done ?"
            value={todoValue}
            onChange={e => setTodoValue(e.target.value)}
          />
        </form>
        {todoList.length > 0 && <TodoList todoList={todoList} />}
        <div className="todo-container-footer">
          <div className="todo-items-msg">1 items left</div>
          <div className="todo-status-container">
            <div>All</div>
            <div>Active</div>
            <div>Completed</div>
          </div>
          <div className="todo-clear-container">Clear completed</div>
        </div>
      </div>
    </>
  );
};

export default Todo;
