import { describe, it, expect } from "vitest";
import { addTodo, sortTodosCompletedFirst } from "./todoLogic";
import type { Todo } from "./components/todoTypes";


describe.skip("Testar todoLogic, bara unittester", () => {
    it("addTodo lägger till en ny todo i slutet av listan och trimmar texten", () => {

        const start: Todo[] = []

        const result = addTodo("  Handla mjölk  ", start)

        expect(result.length).toBe(1)
        
    })

})

describe("Testar todoLogic, bara unittester", () => {
    it("sortTodosCompeltedFirst lägger compelted = true först i listan", () => {
        const todos: Todo[] = [
            {id: 1, title: "A", completed: false},
            {id: 2, title: "B", completed: true},
            {id: 3, title: "C", completed: false},
        ];

        const sorted = sortTodosCompletedFirst(todos);

        expect(sorted[0].id).toBe(2);
    })
})