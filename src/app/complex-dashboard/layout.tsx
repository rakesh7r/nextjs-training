import { ReactNode } from "react"
import Card from "../components/Card"

interface ComplexLayoutProps {
    children: ReactNode
    notifications: ReactNode
    users: ReactNode
    revenue: ReactNode
    login: ReactNode
}

export default function ComplexLayout({
    children,
    notifications,
    users,
    revenue,
    login,
}: ComplexLayoutProps) {
    const isLoggedIn = true
    return isLoggedIn ? (
        <div>
            <Card>{children}</Card>
            <div className="flex flex-rosw">
                <div className="w-[50vw]">
                    <Card>{users}</Card>
                    <Card>{revenue}</Card>
                </div>
                <Card>{notifications}</Card>
            </div>
        </div>
    ) : (
        login
    )
}
