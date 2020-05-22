import React, { useState, useReducer } from "react";

import "./Todo.css";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

let nextId = 0;

const todoListReducer = (state, action) => {
  switch (action.type) {
    case "add-todo": {
      let addedTodo = {
        id: nextId++,
        todoItem: action.item,
        active: true
      };
      return [addedTodo, ...state];
    }
    case "complete-todo": {
      let modifiedTodo = state.map(todo => {
        if (todo.id === action.id) {
          todo.active = !todo.active;
        }
        return todo;
      });
      return modifiedTodo;
    }
    case "delete-todo": {
      let filteredTodo = state.filter(todo => todo.id !== action.id);
      return filteredTodo;
    }
    case "clear-completed-todo": {
      let filteredTodo = state.filter(todo => todo.active === true);
      return filteredTodo;
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
        {todoList.length > 0 && (
          <TodoList
            todoList={
              todoFilter === "All"
                ? todoList
                : todoFilter === "Active"
                ? todoList.filter(todo => todo.active === true)
                : todoList.filter(todo => todo.active !== true)
            }
            todoListDispatch={todoListDispatch}
          />
        )}
        {todoList.length > 0 && (
          <TodoFooter
            todoFilter={todoFilter}
            handleFilter={handleFilter}
            todoList={todoList}
            todoListDispatch={todoListDispatch}
          />
        )}
      </div>
    </>
  );
};

export default Todo;
