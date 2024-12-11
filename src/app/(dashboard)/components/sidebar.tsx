import Navigation from '@/components/navigation'
import React from 'react'

const SideBar = () => {
    return (
        <aside className="md:w-72 hidden md:block left-0 fixed top-20 h-full overflow-y-auto border-r">
            <div className='h-full bg-white p-6 w-full'>
                <Navigation />
            </div>
        </aside>
    )
}

export default SideBar