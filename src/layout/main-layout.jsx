import { Outlet } from "react-router-dom"
import { Header } from "./header/header"
import { Call } from "../layout/footer/call"
import Link from "./footer/link"


export const MainLayout=()=>{
    return (
        <>
            <Header/>
            <main>
                <Outlet />
            </main>
            <Call />
            <Link />

        </>
    )
}