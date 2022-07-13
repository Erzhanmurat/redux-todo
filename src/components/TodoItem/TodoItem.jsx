import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({todo}) => {
    const handleDelete = () => {
        console.log(1111)
    }
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <div>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <span
                        className={`ms-3 "text-decoration-line-through" : ''}`}>{todo.title}</span>
                </div>
                <button className="btn btn-danger btn-sm" onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} size={"xs"}/>
                </button>
            </li>
        </>
    );
};

export default TodoItem;