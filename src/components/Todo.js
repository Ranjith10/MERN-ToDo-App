import React, { useState, useReducer } from "react";

import "./Todo.css";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

const todoListReducer = (state, action) => {
  switch (action.type) {
    case "add-todo": {
      let addedTodo = {
        id: state.length,
        todoItem: action.item,
        active: true
      };
      return [addedTodo, ...state];
    }
    default: {
      return state;
    }
  }
};

const initialValue = [];

const Todo = props => {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, todoListDispatch] = useReducer(
    todoListReducer,
    initialValue
  );
  const [todoFilter, setTodoFilter] = useState("All");

  const handleOnSubmit = e => {
    //form submit by default reloads page on submit
    //stop the default behavior
    e.preventDefault();
    let todoItem = e.target[0].value;
    setTodoValue("");
    todoListDispatch({
      type: "add-todo",
      item: todoItem
    });
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
          <TodoFooter
            todoFilter={todoFilter}
            handleFilter={handleFilter}
            todoList={todoList}
          />
        )}
      </div>
    </>
  );
};

export default Todo;
