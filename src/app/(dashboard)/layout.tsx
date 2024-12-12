import React from "react"
import NavBar from "@/components/navbar"
import SideBar from "@/components/sidebar"

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-full bg-white'>
            <NavBar />
            <main className='pt-20'>
                <SideBar />
                <div className="text-black fixed h-full md:left-72 max-h-screen overflow-y-scroll">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default DashboardLayout