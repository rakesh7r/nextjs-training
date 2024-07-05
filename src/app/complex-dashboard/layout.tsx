import Card from "../components/Card"
//testing github actions
export default function ComplexLayout({
    children,
    notifications,
    users,
    revenue,
}: {
    children: React.ReactNode
    notifications: React.ReactNode
    users: React.ReactNode
    revenue: React.ReactNode
}) {
    return (
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
    )
}
