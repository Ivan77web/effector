import { changeComplete, removeTodo } from "./store";

export interface TodoProps {
    id: number;
    value: string;
    complete: boolean;
}

export const Todo = (todo: TodoProps) => {
    return (
        <div key={todo.id} style={{ display: 'flex', border: '1px solid teal', width: '300px', margin: '10px', padding: '10px' }}>
            <input type='checkbox' checked={todo.complete} onChange={() => changeComplete(todo.id)} />

            {
                todo.value
            }

            <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </div>
    )
}