export default function ProductLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <h3>Product Features</h3>
        </>
    )
}
