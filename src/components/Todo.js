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
    let todoValue = {
      todoItem: e.target[0].value,
      isActive: true
    };
    setTodoValue("");
    let listTodo = todoList;
    listTodo.push(todoValue);
    setTodoList(listTodo);
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          className="todo-input-box"
          placeholder="What needs to be done ?"
          value={todoValue}
          onChange={e => setTodoValue(e.target.value)}
        />
      </form>
      {todoList.length > 0 && <TodoList todoList={todoList} />}
    </>
  );
};

export default Todo;
