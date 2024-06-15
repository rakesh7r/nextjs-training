import Link from "next/link"
export default function () {
    return (
        <div className="flex flex-col gap-4">
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
        </div>
    )
}
