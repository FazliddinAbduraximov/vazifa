import React from "react";
import { Login } from "../components/login";
import { Register } from "../components/register";

export const Auth = () => {
    const [toggle, setToggle] = React.useState(false);
    return (
        <div className="h-screen flex justify-center items-center bg-blue-300">
            <div className="bg-white h-[380px] w-[300px] p-5">
                <div className="flex justify-between mb-5">
                    {toggle ? <h1 className="text-3xl">Login</h1> : <h1 className="text-3xl">Register</h1>}
                    <div className="flex gap-1">
                        <button
                            className="p-1 bg-amber-300 cursor-pointer"
                            onClick={() => setToggle(false)}
                        >
                            register
                        </button>
                        <button
                            className="p-1 bg-amber-300 cursor-pointer"
                            onClick={() => setToggle(true)}
                        >
                            login
                        </button>
                    </div>
                </div>
                {toggle ? <Login /> : <Register />}
            </div>
        </div>
    );
};
