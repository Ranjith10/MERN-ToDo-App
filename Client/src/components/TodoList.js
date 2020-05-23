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
            key={todo.id}
            index={todo.id}
            todo={todo}
            todoListDispatch={todoListDispatch}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
