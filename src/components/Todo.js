import React, { useReducer, useState } from "react";

import "./Todo.css";
import TodoList from "./TodoList";

const todoReducer = (state, action) => {
  switch (action) {
    case "add":
      return { todoList: [...state.todoList, ...state.interimTodo] };
    default:
      throw new Error();
  }
};

const Todo = props => {
  const initialValue = { todoList: [] };

  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useReducer(todoReducer, initialValue);
  const [interimTodo, setInterimTodo] = useState([]);

  const handleOnSubmit = e => {
    //form submit by default reloads page on submit
    //stop the default behavior
    e.preventDefault();
    let todoValue = [];
    todoValue.push(e.target.value);
    setTodoValue("");
    setInterimTodo(todoValue);
    setTodoList("add");
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
