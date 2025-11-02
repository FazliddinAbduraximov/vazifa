import { Outlet } from "react-router-dom"
import { Header } from "./header/header"
import { Call } from "../layout/footer/call"
import Link from "./footer/link"


export const MainLayout = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                    <Outlet />
                </main>
                <Call />
                <Link />
            </div>
        </>
    )
}