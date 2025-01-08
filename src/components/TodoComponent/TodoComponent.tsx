import {ITodoProps} from "../../models/ITodoProps.ts";
import './TodoComponent.css'

const TodoComponent = ({item}: ITodoProps) => {
    return (
        <div className={item.completed ? 'done' : 'notDone'}>
            <div className='inner-div'>
                <h2>ID: {item.id}</h2>
                <h3>{item.todo}</h3>
            </div>
            <h5>This task was created by user {item.userId}</h5>
        </div>
    );
};

export default TodoComponent;