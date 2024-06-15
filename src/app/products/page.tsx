"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Products() {
    const router = useRouter()
    const clickHandler = () => {
        router.push("/")
    }
    if (Math.floor(Math.random() * 2) == 1) {
        throw    new Error("Error in products")
    }
    // throw new Error("test error")
    return (
        <div className="flex flex-col gap-3">
            <Link href="/">Back to Home</Link>
            <button className="btn-primary" onClick={clickHandler}>
                Back to Home
            </button>
            <h1>Products</h1>
            <h3>
                <Link href="./products/1">Product 1</Link>
            </h3>
            <h3>
                <Link href="./products/2">Product 2</Link>
            </h3>
            <h3>
                <Link href="./products/3" replace>
                    Product 3
                </Link>
            </h3>
        </div>
    )
}
