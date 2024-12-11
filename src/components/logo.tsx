import Link from "next/link"
import Image from "next/image"

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image src="/logo.svg" alt="Logo" width={24} height={24} />
                <p className="text-xs text-neutral-700 font-semibold">Board <span className="text-blue-600">App</span></p>
            </div>
        </Link>
    )
}