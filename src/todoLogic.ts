import type { Todo } from "./components/todoTypes";


export function addTodo(title: string, todos: Todo[]): Todo[]{
 
    const trimmed = title.trim()

    if(trimmed === "") return todos;

    const newTodo: Todo = {
        id: Date.now(),
        title: trimmed,
        completed: false,
    }

    return [...todos, newTodo];

}


export function deleteTodo(id: number, todos: Todo[]): Todo[]{
    return todos.filter((todo) => todo.id !== id)
}


export function toggleTodo(id: number, todos: Todo[]): Todo[]{
    return todos.map((todo) => 
        todo.id === id 
        ? { ...todo, completed: !todo.completed}
        : todo,
    )
}



export function sortTodosCompletedFirst(todos: Todo[]): Todo[] {

    return[...todos].sort((a,b) => {
        if(a.completed === b.completed) return 0;
        return a.completed ? -1 : 1
    })
}

