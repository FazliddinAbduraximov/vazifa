import { Button } from './ui/button'
import { Increment } from '../assets/increment'
import { Input } from './ui/input'
import { Search } from '../assets/Search'
import { MenuBar } from '../assets/menuBar'
import {Typography} from '@/components/ui/topografiya'

export const ShadcnExcemples = () => {
    return (
        <>
            <div className='bg-white'>
                <div className="py-[25px] flex gap-5">
                    <Button className="px-[185px] py-[17px] rounded-1">LOGIN</Button>
                    <Button className='px-4 py-1 rounded-1'>Create new event <span className='ml-[30px] text-black'><Increment /></span> </Button>
                    <Button className='px-[15px] py-2.5 rounded-1'>Month</Button>
                </div>

                <div className='grid grid-cols-1 gap-5'>
                    <div className='flex items-center gap-[18px] px-4 py-2.5 bg-[#e9e7e7] rounded-lg  w-[426px]'>
                        <Search />
                        <Input type='Email' placeholder='Search...' className='text-center border-none outline-none shadow-none focus:border-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0' />
                    </div>

                    <div className='flex items-center gap-[18px] px-8 py-4 bg-[#e9e7e7] rounded-lg  w-[859px]'>
                        <Search />
                        <Input type='Email' placeholder='Seach name, type,......' className='text-center border-none outline-none shadow-none focus:border-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0' />
                        <MenuBar />
                    </div>
                </div>
            </div>

            <div>
                <div className="p-10 space-y-6">

                    <Typography variant="h1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Typography>

                    <Typography variant="h2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Typography>

                    <Typography variant="h3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Typography>

                    <Typography variant="h4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Typography>

                    <Typography variant="h5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Typography>


                    <Typography variant="body1">
                        Body 1 text example lorem ipsum dolor sit amet
                    </Typography>

                    <Typography variant="body2">
                        Body 1 text example lorem ipsum dolor sit amet
                    </Typography>

                    <Typography variant="caption">
                        Caption text goes here
                    </Typography>

                    <Typography variant="link">
                        This is a link style
                    </Typography>

                </div>
            </div>

        </>
    )
}
