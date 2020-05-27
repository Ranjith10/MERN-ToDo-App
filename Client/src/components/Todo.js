import React, { useState, useReducer, useEffect } from "react";

import "./Todo.css";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import { getTodos, addTodo} from "../service/FetchData";

const todoListReducer = (state, action) => {
  switch (action.type) {
    case "fetch-list-todos": {
      return action.todoList
    }
    case "add-todo": {
      return [action.todoItem, ...state];
    }
    case "complete-todo": {
      let modifiedTodo = state.map(todo => {
        if (todo._id === action.id) {
          todo.active = !todo.active;
        }
        return todo;
      });
      return modifiedTodo;
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

  //didMount equivalent 
  useEffect(() =>{
    getTodos()
    .then(result => {
      todoListDispatch({
        type: "fetch-list-todos",
        todoList: result.data
      })
    })
    .catch(err => console.log('err', err))
  },[])

  const handleOnSubmit = e => {
    //form submit by default reloads page on submit
    //stop the default behavior
    e.preventDefault();
    let todoItem = {
      todoItem: e.target[0].value,
      active: true,
    };
    setTodoValue("");
    
    //POST call for adding new Todos
    addTodo(todoItem)
    .then(result => {
      todoListDispatch({
        type: "add-todo",
        todoItem: result.data
      });
    })
    .catch(err => console.log("err", err))
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
