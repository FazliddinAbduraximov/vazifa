import type React from "react"
import { Link, useLocation } from "react-router-dom"

export const ActiveLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const location = useLocation()
    return <Link to={href} className={`${location.pathname === href ? "bg-blue-300" : ""} flex items-center gap-3 p-3`}>
        {children}
    </Link>
}
