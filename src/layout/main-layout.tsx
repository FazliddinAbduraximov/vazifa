import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-amber-400 py-5"></header>

            <main className="flex-1">
                <Outlet />
            </main>

            <footer className="bg-amber-400 py-5"></footer>
        </div>
    )
}
