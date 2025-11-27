import { useState } from "react";

type TodoInputProps = {
    onAdd: (title: string) => void;
};


export function TodoInput({onAdd}: TodoInputProps) {
    const [value, setValue] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onAdd(value);
        setValue("");
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Lägg till todo..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{padding: "0.5rem", margin: "0.5rem"}}
            />
            <button type="submit">Lägg till</button>
        </form>
    )
}
