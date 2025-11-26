import { Input } from '@/components/ui/input'
import { useSearch } from '@/service/useSearch'
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useDebounce } from '@uidotdev/usehooks'
import { Spinner } from '@/components/ui/spinner'

import { IconFolderCode } from "@tabler/icons-react"
import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"

export const MainLayout = () => {

    const [input, setInput] = React.useState("")
    const value = useDebounce(input, 500)

    const { data, isLoading } = useSearch(value);

    const location = useLocation();
    React.useEffect(() => {
        setInput("")
    }, [location.pathname])

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-amber-400 py-5">
                <div className='container flex justify-end gap-[30px] items-center'>
                    <Link to={'/users'}>Users</Link>
                    <div className='w-[400px] relative'>
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value.trim())}
                            placeholder='search'
                            className=' bg-white '
                        />

                        {input ? (
                            <div className="absolute bg-white rounded-2xl w-full p-2.5 shadow top-10">
                                {isLoading ? (
                                    <Spinner />
                                ) : (
                                    <>
                                        {data?.length === 0 ? (
                                            <Empty>
                                                <EmptyHeader>
                                                    <EmptyMedia variant="icon">
                                                        <IconFolderCode />
                                                    </EmptyMedia>
                                                    <EmptyTitle>Name not found</EmptyTitle>
                                                    <EmptyDescription>
                                                        No results matched your search query
                                                    </EmptyDescription>
                                                </EmptyHeader>
                                            </Empty>
                                        ) : (
                                            data?.map((item) => (
                                                <div key={item.id} className='my-2'>
                                                    <h1 className='text-2xl'>
                                                        <Link to={`product/${item.id}`}>{item.title}</Link>
                                                    </h1>
                                                </div>
                                            ))
                                        )}
                                    </>
                                )}
                            </div>
                        ) : null}

                    </div>
                </div>
            </header>

            <main className="flex-1">
                <Outlet />
            </main>

            <footer className="bg-amber-400 py-5 mt-auto">
                <div className="container">
                    <h1>footer</h1>
                </div>
            </footer>
        </div>
    )
}
