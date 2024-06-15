"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

type propsType = {
    children: React.ReactNode
}
const navLinks = [
    { name: "Login", url: "/login" },
    { name: "Register", url: "/register" },
    { name: "Forgot Password", url: "/forgot-password" },
]
export default function AuthLayout({ children }: propsType) {
    const pathname = usePathname()
    return (
        <div >
            {navLinks.map((navItem) => {
                const activeLink = pathname.startsWith(navItem.url)
                return (
                    <Link href={navItem.url} key={navItem.name} className={activeLink ? `font-bold mr-3` : 'text-blue-500 mr-3'}>
                        {navItem.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}
