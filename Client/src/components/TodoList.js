import React from "react";

import "./TodoList.css";
import TodoListItem from "./TodoListItem";

const TodoList = props => {
  let { todoList, todoListDispatch } = props;
  return (
    <div className="todo-list-container">
      {todoList.map((todo, index) => {
        return (
          <TodoListItem
            key={todo._id}
            index={todo._id}
            todo={todo}
            todoListDispatch={todoListDispatch}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
