export default function BlogDetils({ params }: { params: { blogId: string } }) {
    return <h1>Blog ID : {params.blogId}</h1>
}
