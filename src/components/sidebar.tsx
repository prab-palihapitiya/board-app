import SideBarNavigation from '@/components/sidebar-navigation'
import React from 'react'

const SideBar = () => {
    return (
        <div className="md:w-72 hidden md:block left-0 fixed top-20 overflow-y-auto border-r z-50 sidebar">
            <div className='bg-white p-6 sidebar-inner'>
                <SideBarNavigation />
            </div>
        </div>
    )
}

export default SideBar