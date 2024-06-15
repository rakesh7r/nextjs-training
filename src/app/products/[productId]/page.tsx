import {Metadata} from 'next'
type props = {
    params: { productId: string }
}

export const generateMetadata = async ({ params }: props): Promise<Metadata> => {
    const title = await new Promise((resolve, reject) => {
        setTimeout(() => resolve(`iPhone ${params.productId}`),50)
    })
    return {
        title: `${title}`,
        description : `${params.productId} Description`
    }
}

export default function ProductDetails({ params }: props) {
    return <h1>Product Details : {params.productId}</h1>
}
