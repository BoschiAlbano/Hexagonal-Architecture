import React, { useState } from "react";
import { trpc } from "../trpc";

const Register = () => {
    const [state, setstate] = useState({ email: "", password: "", name: "" });
    const { data, error, mutate, isLoading, isSuccess } =
        trpc.Register.useMutation();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        mutate(state);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setstate({ ...state, [e.target.name]: e.target.value });
    };

    isSuccess && console.log(data);

    return (
        <>
            <section>
                <h1>Register</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="email"
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="password"
                        onChange={(e) => handleChange(e)}
                    />
                    <button type="submit">
                        {isLoading ? "Cargando..." : "Enviar"}
                    </button>
                    <p>{error && error?.message}</p>
                </form>
            </section>
        </>
    );
};

export default Register;
