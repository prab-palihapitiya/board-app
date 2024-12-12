import { Logo } from '@/components/logo'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Bell, Plus, Search, Settings2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import MobileSidebar from './mobile-sidebar'

const NavBar = () => {
    return (
        <nav className='fixed z-50 top-0 w-full h-20 border-b px-6 bg-white flex items-center justify-between gap-5'>
            <div className='items-center gap-x-4 hidden md:flex'>
                <Logo />
            </div>
            <MobileSidebar />
            <div className='flex items-center gap-x-5 ml-0'>
                <Button className='bg-blue-600 rounded-lg hidden md:flex px-5 h-12 text-xs font-semibold'>
                    Create new board<Plus className='h-4 w-4' />
                </Button>

                <Button className='bg-blue-600 rounded-lg block md:hidden px-5 h-12 text-xs font-semibold'>
                    <Plus className='h-4 w-4' />
                </Button>

                <div className="bg-gray-100 flex items-center rounded-lg px-3.5 w-full md:w-80 ">
                    <Search className="h-4 w-4 text-gray-500" />
                    <Input placeholder='Search tasks ...' className='h-12 border-0 bg-gray-100 placeholder:text-xs placeholder:text-gray-400' />
                </div>
                <div className='flex gap-x-4 items-center'>
                    <Link href={'/'}>
                        <Settings2 className='h-6 w-6 text-gray-500 cursor-pointer' />
                    </Link>
                    <Link href={'/'}>
                        <Bell className='h-6 w-6 text-gray-500 cursor-pointer' />
                    </Link>
                    <Link href={'/'}>
                        <Avatar className='h-8 w-8'>
                            <AvatarImage src="/default.svg" alt="profile" />
                            <AvatarFallback>BP</AvatarFallback>
                        </Avatar>
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default NavBar