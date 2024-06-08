export default function DocsPage({ params }: { params: { slug: string[] } }) {
    const { slug } = params
    if (slug?.length === 1) {
        return <h1>Viewing Feature{slug[0]}</h1>
    } else if (slug?.length == 2) {
        return (
            <h1>
                Viewing Feature{slug[0]} concept {slug[1]}
            </h1>
        )
    } else if (slug?.length === 3) {
        return (
            <h1>
                Viewing Feature{slug[0]} concept {slug[1]} example {slug[2]}
            </h1>
        )
    }
    return <h1>Docs page</h1>
}
