import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie';

export const MainLayout = () => {
    const token = Cookies.get("token");
    if (!token) {
        return <Navigate to={"/"} />;
    }
    return (
        <>
            <header className='bg-green-400 flex gap-6 p-4 items-center justify-center'>
                <NavLink to={"/app"}>
                    Home
                </NavLink>
                <NavLink to={"/app/profile"}>
                    Profile
                </NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}
