import React, { useState } from "react";

import "./Todo.css";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

const Todo = props => {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todoFilter, setTodoFilter] = useState("All");

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

  const handleFilter = filterValue => {
    setTodoFilter(filterValue);
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
        {todoList.length > 0 && (
          <TodoFooter todoFilter={todoFilter} handleFilter={handleFilter} />
        )}
      </div>
    </>
  );
};

export default Todo;
