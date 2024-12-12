"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"
import SideBarNavigation from "./sidebar-navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathName]);

    return (
        <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button size="lg" variant={'secondary'} className="rounded-lg block md:hidden px-5 h-12 ">
                    <MenuIcon className="text-neutral-600" />
                </Button>
            </SheetTrigger>
            <SheetContent className="pt-10" side={'left'}>
                <SheetTitle className="hidden">Sidebar</SheetTitle>
                <SideBarNavigation />
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar;