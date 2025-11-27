import { useState, useEffect } from "react";
import type { Todo } from "./todoTypes";
import { 
    addTodo, 
    toggleTodo, 
    deleteTodo, 
    sortTodosCompletedFirst,
 } from "../todoLogic";

import { loadTodos, saveTodos } from "../todoStorage";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList"; 


export function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>(() => loadTodos())
    const [sortCompletedFirst, setSortComplatedFirst] = useState(true)


    useEffect(() => {
        saveTodos(todos);
    }, [todos])



    function handleAdd(title: string) {
        setTodos(prev => addTodo(title, prev))
    }

    function handleToggle(id: number){
        setTodos(prev => toggleTodo(id, prev))
    }

    function handleDetele(id: number){
        setTodos(prev => deleteTodo(id, prev))
    }

    const visibleTodos = sortCompletedFirst 
    ? sortTodosCompletedFirst(todos)
    : todos


    return (
        <div>
            <TodoInput onAdd={handleAdd}/>
            <label style={{display: "block", marginBottom:"0.5rem"}} >
                <input 
                    type="checkbox"
                    checked={sortCompletedFirst}
                    onChange={e => setSortComplatedFirst(e.target.checked)}
                />
                Visa klara todos först
            </label>
            <TodoList
                todos={visibleTodos}
                onToggle={handleToggle}
                onDelete={handleDetele}
            />
        </div>
    );
}