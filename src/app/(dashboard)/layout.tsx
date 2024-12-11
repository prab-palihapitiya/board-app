import React from "react"
import NavBar from "@/app/(dashboard)/components/navbar"
import SideBar from "./components/sidebar"

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-full bg-white'>
            <NavBar />
            <main className='pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto'>
                <SideBar />
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout