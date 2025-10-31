import { Outlet } from "react-router-dom"
import { Header } from "./header/header"

export const MainLayout=()=>{
    return (
        <>
            <Header/>
            <main>
                <Home/>
                <Outlet />
            </main>
            <footer>
                fouter
            </footer>

        </>
    )
}