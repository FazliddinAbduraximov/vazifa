import { Input } from '@/components/ui/input'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-amber-400 py-5">
                <div className='container flex justify-end'>
                    <div className='w-[400px] relative'>
                        <Input placeholder='search' className=' bg-white ' />
                        <div className="absolute bg-white rounded-2xl w-full p-2.5 shadow top-10">

                        </div>

                    </div>
                </div>
            </header>

            <main className="flex-1">
                <Outlet />
            </main>

            <footer className="bg-amber-400 py-5"></footer>
        </div>
    )
}
