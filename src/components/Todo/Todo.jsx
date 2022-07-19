import React, {useState} from 'react';
// import axios from "axios";
import TodoItem from "../TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {addNewTodo, completedTodo, deleteTodo} from "../../redux/Actions/Actions";
// import Spinner from "../Spinner";

const Todo = () => {
    const [todo, setTodo] = useState("")
    // const [isLoader, setIsLoader] = useState(true)
    const {todos} = useSelector((store) => store)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     axios("https://62cdc30a066bd2b6992beb4d.mockapi.io/todo")
    //         .then(({data}) => {
    //             setTodo(data)
    // setIsLoader(false)
    //         })
    // }, [])
    console.log(todos)
    const handleClick = () => {
        dispatch(addNewTodo(todo))
        setTodo("")
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter" && todo.trim().length) {
            handleClick()
        }
    }
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }
    const handleDone = (id) => {
        dispatch(completedTodo(id))
    }
    // if (isLoader) {
    //     return <Spinner/>
    // }
    return (
        <div className="todo-page">
            <div className="row">
                <div className="col-md-6 offset-md-3 mt-5">
                    <div className="d-flex justify-content-between text-white">
                        <h1 className="text-center">TodoList</h1>
                        <h2 className="align-items-center">Items: {todos.length}</h2>
                    </div>
                    <input className="form-control" type="text" value={todo} onChange={handleChange}
                           onKeyPress={handleKeyPress}/>
                    <button className="btn btn-success w-100 mt-2" disabled={todo.trim().length === 0}
                            onClick={handleClick}>Добавить
                    </button>
                    <ul className="list-group mt-5">
                        {
                            todos.map((todo) => (
                                <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete}
                                          handleDone={handleDone}/>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Todo;