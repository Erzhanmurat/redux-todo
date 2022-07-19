import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({todo, handleDelete, handleDone}) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <div>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={todo.completed}
                        onChange={() => handleDone(todo.id)}
                    />
                    <span
                        className={`ms-3 ${todo.completed ? "text-decoration-line-through" : ''} `}>{todo.title}</span>
                </div>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(todo.id)}>
                    <FontAwesomeIcon icon={faTrash} size={"xs"}/>
                </button>
            </li>
        </>
    );
};

export default TodoItem;