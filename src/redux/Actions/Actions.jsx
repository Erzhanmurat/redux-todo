import {nanoid} from "nanoid";
import {ADD_TODO, COMPLETE_TODO, DELETE_TODO} from "./ActionTypes";

export const addNewTodo = (todo) => {
    return (dispatch, getState) => {
        const updatedTodos = [...getState().todos, {
            id: nanoid(),
            title: todo,
            completed: false
        }]
        dispatch({
            type: ADD_TODO,
            payload: updatedTodos

        })
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }
}
export const deleteTodo = (id) => {
    return (dispatch, getState) => {
        const updatedTodos = getState().todos.filter(item => item.id !== id)
        dispatch({
            type: DELETE_TODO,
            payload: updatedTodos
        })
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }
}

export const completedTodo = (id) => {
    return (dispatch, getState) => {
        const updatedTodos = getState().todos.map(item => {
            if (item.id === id) {
                return {...item, completed: !item.completed}
            }
            return item
        })
        dispatch({
            type: COMPLETE_TODO,
            payload: updatedTodos
        })
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }
}