"use client"
export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    return (
        <>
            <h2>Error in Products {error.message}</h2>
            <button onClick={reset}>Reset Error</button>
        </>
    )
}
