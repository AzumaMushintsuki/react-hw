import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {getToDos} from "../../services/api.servises.ts";
import TodoComponent from "../TodoComponent/TodoComponent.tsx";
import './TodosComponent.css'

export const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        getToDos()
            .then(response => setTodos(response));
    }, []);
    return (
        <div className='main'>
            {
                todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)
            }
        </div>)
}