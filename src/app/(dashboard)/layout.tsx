import React from "react"
import NavBar from "@/components/navbar"
import SideBar from "@/components/sidebar"

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-screen flex flex-col'>
            <NavBar />
            <main className='flex-grow flex mt-20 overflow-y-auto'>
                <aside className="w-72 hidden md:block">
                    <SideBar />
                </aside>
                <div className="text-black md:left-72 flex-1">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default DashboardLayout