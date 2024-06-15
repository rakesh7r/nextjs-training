import { notFound } from "next/navigation"
export const metadata = {
    title: "Reviews", //page title
    description: "Review description",
}
export default function ({
    params,
}: {
    params: { reviewId: number; productId: string }
}) {
    console.log(params)
    // if (params.reviewId > 100) {
    //     notFound()
    // }
    return (
        <>
            <h1>Product: {params.productId}</h1>
            <h2>Review : {params.reviewId}</h2>
        </>
    )
}
