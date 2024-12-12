"use client";

import { cn } from '@/lib/utils'
import { CalendarRange, MessageCircleMore, LayoutGrid, UserRound, Folder, ChevronRight, CircleAlert, LogOut } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import boardData from '@/config/board-data'

const unreadMessages = 3;

const navigationItems = [
    {
        label: 'Dashboard',
        href: '/',
        icon: LayoutGrid
    },
    {
        label: 'Boards',
        href: '/boards',
        icon: Folder
    },
    {
        label: 'Messages',
        href: '/messages',
        icon: MessageCircleMore,
    },
    {
        label: 'Calendar',
        href: '/calendar',
        icon: CalendarRange,
    },
    {
        label: 'Team members',
        href: '/members',
        icon: UserRound,
    },
]

const TopNavigation = () => {
    return (
        <Accordion type="single" collapsible className='border rounded-lg hover:opacity-75'>
            <AccordionItem value="boards">
                <AccordionTrigger>
                    <div className={cn('flex items-center gap-3 text-neutral-500')}>
                        <Avatar className='h-11 w-11'>
                            <AvatarImage src="/default.svg" alt="profile" />
                            {/* {TODO_01: Popualate avatar-image from resources} */}
                            <AvatarFallback>BP</AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col'>
                            <span className='text-neutral-400 font-light text-sm text-left'>workspace</span>
                            <span className='text-neutral-800'>Root folder</span>
                            {/* {TODO_02: Render a list of options and keep the list item as a state. To toggle the list, pipe the list item's name to the title} */}
                        </div>
                    </div>
                </AccordionTrigger>
            </AccordionItem>
        </Accordion>
    );
}

const BottomNavigation = () => {
    const isActive = false;
    return (
        <ul className='flex flex-col mt-4'>
            <Link href={'/support'} className='my-5 mx-3 hover:opacity-75'>
                <div className={cn('flex items-center gap-5 text-neutral-500 font-medium', isActive && "text-primary")}>
                    <CircleAlert className='size-6 text-neutral-500' />
                    Support
                </div>
            </Link>
            <Link href={'/'} className='bg-black rounded-lg py-3 px-4 hover:opacity-75'>
                <div className='flex items-center gap-4 font-medium text-white'>
                    <LogOut className='size-6' />
                    Logout
                </div>
            </Link>
        </ul>
    )
}

export const SideBarNavigation = () => {
    const [activeBoardIndex, setActiveBoardIndex] = useState(0);
    const boards = boardData?.map(board => board?.title);

    return (
        <>
            <TopNavigation />
            <ul className='flex flex-col mt-4'>
                {navigationItems.map((item, index) => {
                    const isActive = false;
                    const Icon = item.icon;

                    if (index === 1) {
                        return (
                            <Accordion key={index} type="single" collapsible>
                                <AccordionItem value="boards">
                                    <AccordionTrigger className={cn('text-neutral-500', activeBoardIndex && "text-blue-500")}>
                                        <div className={'flex items-center gap-5'}>
                                            <Icon className='size-6' />
                                            {item.label}
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className='flex flex-col gap-y-4'>
                                            {boards.map((title, index) => (
                                                <Link key={index} href={`/boards/${index + 1}`} onClick={() => { setActiveBoardIndex(index + 1) }}>
                                                    <div className={cn('flex items-center gap-4 text-neutral-400', activeBoardIndex === index + 1 && "text-blue-500 font-medium")}>
                                                        <ChevronRight className='size-4' />
                                                        {title}
                                                    </div>
                                                </Link>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        );
                    } else {
                        return (
                            <Link key={index} href={item.href} className='my-5 mx-3 hover:opacity-75'>
                                <div className={cn('flex items-center text-neutral-500 font-medium justify-between', isActive && "text-primary")}>
                                    <div className='flex items-center gap-5'>
                                        <Icon className='size-6 text-neutral-500' />
                                        {item.label}
                                    </div>
                                    {index === 2 && unreadMessages > 0 && (
                                        <Badge className='bg-orange-500 rounded-full px-[6px] py-[1px] font-medium'>{unreadMessages}</Badge>
                                    )}
                                </div>
                            </Link>
                        )
                    }
                })}
            </ul>
            <BottomNavigation />
        </>
    )
}

export default SideBarNavigation;