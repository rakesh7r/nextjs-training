import { comments } from "../data"

export async function GET() {
    return Response.json(comments)
}

export async function POST(request: Request) {
    const comment = await request.json()
    const newComment = {
        id: (comments.length + 1).toString(),
        comment: comment.text,
    }
    comments.push(newComment)
    return Response.json(comments, {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    })
}
