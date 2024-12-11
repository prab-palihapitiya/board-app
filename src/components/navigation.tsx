import { cn } from '@/lib/utils'
import { CalendarRange, MessageCircleMore, LayoutGrid, UserRound, Folder, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'


const navigationItems = [
    {
        label: 'Dashboard',
        href: '/',
        icon: LayoutGrid
    },
    {
        label: 'Boards',
        href: '/',
        icon: Folder
    },
    {
        label: 'Messages',
        href: '/',
        icon: MessageCircleMore,
    },
    {
        label: 'Calendar',
        href: '/',
        icon: CalendarRange,
    },
    {
        label: 'Team members',
        href: '/',
        icon: UserRound,
    },
]

const boards = [
    "Create routes", "Delepment React App", "Sport Xi Project", "Wordpress theme"
]

const Navigation = () => {
    return (
        <>
            <Accordion type="single" collapsible className='border rounded-lg open:border-0'>
                <AccordionItem value="boards">
                    <AccordionTrigger>
                        <div className={cn('flex items-center gap-3 text-neutral-500 hover:text-neutral-800')}>
                            <Avatar className='h-11 w-11'>
                                <AvatarImage src="/default.svg" alt="profile" />
                                <AvatarFallback>BP</AvatarFallback>
                            </Avatar>

                            Root folder
                        </div>
                    </AccordionTrigger>
                </AccordionItem>
            </Accordion>

            <ul className='flex flex-col'>
                {navigationItems.map((item, index) => {
                    const isActive = false;
                    const Icon = item.icon;

                    if (index === 1) {
                        return (
                            <Accordion key={index} type="single" collapsible>
                                <AccordionItem value="boards">
                                    <AccordionTrigger>
                                        <div className={cn('flex items-center gap-5 text-neutral-500 hover:text-neutral-800', isActive && "text-primary")}>
                                            <Icon className='size-6 text-neutral-500' />
                                            {item.label}
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className='flex flex-col gap-y-4'>
                                            {boards.map((title, index) => (
                                                <Link key={index} href={'/'}>
                                                    <div className={cn('flex items-center gap-4 text-neutral-400 hover:text-neutral-800', isActive && "text-primary")}>
                                                        <ChevronRight className='size-4 text-neutral-400' />
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
                            <Link key={index} href={item.href} className='my-5 mx-3'>
                                <div className={cn('flex items-center gap-5 text-neutral-500 hover:text-neutral-800 font-medium', isActive && "text-primary")}>
                                    <Icon className='size-6 text-neutral-500' />
                                    {item.label}
                                </div>
                            </Link>
                        )

                    }

                })}
            </ul>
        </>
    )
}

export default Navigation;