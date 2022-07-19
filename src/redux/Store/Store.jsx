import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {ADD_TODO, COMPLETE_TODO, DELETE_TODO} from "../Actions/ActionTypes";

const initialValue = {
    todos: JSON.parse(localStorage.getItem("todos")) || []
}
const storeReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos: action.payload}
        case DELETE_TODO:
            return {...state, todos: action.payload}
        case COMPLETE_TODO:
            return {...state, todos: action.payload}
        default :
            return state
    }
}
export const store = createStore(storeReducer, composeWithDevTools(
    applyMiddleware(thunk)))