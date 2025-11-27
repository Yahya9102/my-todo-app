import type { Todo } from "./todoTypes";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}



export function TodoList({todos, onToggle, onDelete}: TodoListProps) {
    
    if (todos.length === 0) {
        return <p>Inga todos ännu.</p>
    }

    return (
        <ul style={{listStyle: "none", padding: "0"}}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    )
}