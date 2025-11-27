import { useEffect, useState } from "react";

type ExternalUser = {
    id: number;
    name: string;
}

export function ExternalUserList() {
    const [users, setUsers] = useState<ExternalUser[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")


    useEffect( () => {
        async function loadUSers() {
            try{
                setLoading(true);
                setError("")


                const res = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!res.ok){
                    throw new Error("Kunde inte hämta användare");
                }

                const data: ExternalUser[] = await res.json();

                setUsers(data);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch(err: any) {
                setError(err ?? "Okänt fel");
            } finally {
                setLoading(false)
            }
        }


        loadUSers();
    }, [])

    if(loading) {
        return <p>Laddar externa användare...</p>
    }

    if (error) {
        return (
            <p role="alert">
                Fel: {error}
            </p>
        )
    }


    return (
        <div>
            <h1>Externa avnändare från live api</h1>
            {users.length === 0 ? (
                <p>Inga användare hittades</p>
            ) : (
                <ul>
                    {users.map((u) => (
                        <li key={u.id}>{u.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )





}