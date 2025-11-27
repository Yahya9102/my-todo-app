import {render, screen} from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { ExternalUserList } from "./ExternalUserList"


describe.skip("ExternalUSerList Integration mot extern REST-api", () => {
    it("Hämtar användare från api och visar minst en rad i listan", async () => {
        render(<ExternalUserList />)

        // Steg 1
        expect(screen.getByText(/Laddar externa användare.../i)).toBeInTheDocument();


        // Steg 2 vi väntar på minst en listitem ska dyka upp, data från extern API
        const listITem = await screen.findAllByRole("listitem");

        // Steg 3 ska finnas minst en användare
        expect(listITem.length).toBeGreaterThan(0);


        // Steg 4 Kolla så texten inte längre är "laddar..."

        expect(screen.queryByText(/Laddar externa användare.../i)).not.toBeInTheDocument()

    })
})