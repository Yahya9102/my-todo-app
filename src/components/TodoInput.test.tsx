import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import { TodoInput } from "./TodoInput"


describe.skip("Todoinput- component test)", () => {
    it("låter användare skriva text och anropa add via submit", async () => {
        const user = userEvent.setup();
        const handleAdd = vi.fn();

        render(<TodoInput onAdd={handleAdd} />);


        const input = screen.getByPlaceholderText("Lägg till todo...");
        const button = screen.getByRole("button", {name: /Lägg till/i});

        await user.type(input, "Handla mjölk");

        await user.click(button);

        expect(handleAdd).toHaveBeenCalledTimes(1);
        expect(handleAdd).toHaveBeenCalledWith("Handla mjölk");
        expect(input).toHaveValue("");

    })
})