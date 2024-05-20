import React, { useState } from "react";
import { trpc } from "../trpc";

const Login = () => {
    const [state, setstate] = useState({ email: "", password: "" });
    const { data, error, mutate, isLoading, isSuccess } =
        trpc.login.useMutation();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        mutate(state);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setstate({ ...state, [e.target.name]: e.target.value });
    };

    isSuccess && data && console.log(data);
    isSuccess && error && console.log(error);

    return (
        <>
            <section>
                <h1>Login</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
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
                    <p>
                        {error && error?.message === "User not found"
                            ? "Usuario no Registrado"
                            : error?.message}
                    </p>
                </form>
            </section>
        </>
    );
};

export default Login;
