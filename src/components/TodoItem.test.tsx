import {render, screen} from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { TodoItem } from "./TodoItem"
import type { Todo } from "./todoTypes"
import userEvent from "@testing-library/user-event"


describe("TodoItem component test", () => {

    it("visar titel och completed status korrekt", () => {
        const todo: Todo = {
            id: 1,
            title: "Hej",
            completed: true,
        }

        const handleToggle = vi.fn();
        const handleDelete = vi.fn();


        render(
            <TodoItem
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete}
            />
        );

        expect(screen.getByText("Hej")).toBeInTheDocument();

        const checkbox = screen.getByRole("checkbox")
        expect(checkbox).toBeChecked();
    });

    it("anropa onToggle och onDelete med rätt ID", async () => {
        const user = userEvent.setup();

        const todo: Todo = {
            id: 42,
            title: "Hej",
            completed: false,
        }

        const handleToggle = vi.fn();
        const handleDelete = vi.fn();


        render(
            <TodoItem
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete}
            />
        );


        const checkbox = screen.getByRole("checkbox");
        const deleteButton = screen.getByRole("button", {name: /Ta bort/i})


        await user.click(checkbox);
        expect(handleToggle).toHaveBeenCalledTimes(1)
        expect(handleToggle).toHaveBeenCalledWith(42)


        await user.click(deleteButton)

        expect(handleDelete).toHaveBeenCalledTimes(1);
        expect(handleDelete).toHaveBeenCalledWith(42)

    })

})
