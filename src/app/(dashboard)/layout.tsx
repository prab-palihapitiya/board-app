import React from "react"
import NavBar from "@/components/navbar"
import SideBar from "@/components/sidebar"

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-screen bg-white flex flex-col'>
            <NavBar />
            <main className='mt-20 flex-grow flex'>
                <aside className="w-72 hidden md:block">
                    <SideBar />
                </aside>
                <div className="text-black h-full md:left-72 flex-grow overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default DashboardLayout