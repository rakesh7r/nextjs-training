import {Metadata} from 'next'
type props = {
    params: { productId: string }
}

export const generateMetadata = ({ params }: props): Metadata => {
    return {
        title: `Product ${params.productId}`,
        description : `${params.productId} Description`
    }
}

export default function ProductDetails({ params }: props) {
    return <h1>Product Details : {params.productId}</h1>
}
