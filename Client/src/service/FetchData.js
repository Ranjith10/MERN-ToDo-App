
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
    return axios(`/api/todos:${id}`, {
        method: "DELETE",
    })
}
