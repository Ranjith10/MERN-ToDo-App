import React from "react";

import TodoListItem from "./TodoListItem";

const TodoList = props => {
  let { todoList } = props;
  console.log({ todoList });
  return (
    <div className="todo-list-container">
      {todoList.map((todo, index) => {
        return <TodoListItem key={index} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
