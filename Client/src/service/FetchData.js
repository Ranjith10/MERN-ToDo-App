
import axios from "axios";

export const getTodos = () => {
    return axios("/api/todos", {
        method: "GET",
        headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        }
    })
}

export const deleteTodo = (id) => {
    return axios(`/api/todos/${id}`, {
        method: "DELETE",
    })
}

export const addTodo = (todoItem) => {
    return axios("/api/todos", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        data: todoItem
    })
}

export const toggleActive = (todo) => {
  return axios("/api/todos", {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    data: todo
  })
}