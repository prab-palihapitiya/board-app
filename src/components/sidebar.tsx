import SideBarNavigation from '@/components/sidebar-navigation'
import React from 'react'

const SideBar = () => {
    return (
        <div className="md:w-72 hidden md:block left-0 fixed top-20 overflow-y-auto border-r max-h-screen overflow-scroll">
            <div className=' bg-white p-6 w-full'>
                <SideBarNavigation />
            </div>
        </div>
    )
}

export default SideBar