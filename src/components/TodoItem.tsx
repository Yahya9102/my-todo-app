import type { Todo } from "./todoTypes";


type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}


export function TodoItem ({todo, onToggle, onDelete}: TodoItemProps) {

    return (
        <li 
            style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                margin: "0.25rem"
            }}
        >
            <input
             type="checkbox" 
             checked={todo.completed}
             onChange={() => onToggle(todo.id)}
             />
             <span 
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    flex: 1
                }}
             
             >{todo.title}</span>
             <button onClick={() => onDelete(todo.id)}>Ta bort</button>
        </li>
    )


}
