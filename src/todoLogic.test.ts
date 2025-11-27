import { describe, it, expect } from "vitest";
import { addTodo } from "./todoLogic";
import type { Todo } from "./components/todoTypes";


describe("Testar todoLogic, bara unittester", () => {
    it("addTodo lägger till en ny todo i slutet av listan och trimmar texten", () => {

        const start: Todo[] = []

        const result = addTodo("  Handla mjölk  ", start)

        expect(result.length).toBe(1)
        expect(result[0].title).toBe("Handla mjölk")
        expect(start.length).toBe(0)
    })
})