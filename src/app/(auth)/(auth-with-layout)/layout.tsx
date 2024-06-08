export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children} <h4>Auth Layout</h4>
        </>
    )
}
