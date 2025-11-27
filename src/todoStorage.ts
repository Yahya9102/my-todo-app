import type { Todo } from "./components/todoTypes";

const STORAGE_KEY = "todos";


export function loadTodos(): Todo[] {
    try {
        const raw = localStorage.getItem(STORAGE_KEY); 
        if (!raw) return [];

        const parsed = JSON.parse(raw) as Todo[];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return []
    }
}


export function saveTodos(todos: Todo[]): void {
    try {
        const json = JSON.stringify(todos)
        localStorage.setItem(STORAGE_KEY,json)
    } catch {
        console.error("Något gick fel när jag försökte spara mina todos")
        //   
    }

}