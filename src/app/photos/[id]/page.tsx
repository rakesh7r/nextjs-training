import Image from "next/image"
import IMAGES from "../_Images/Images"

export default function Page({ params: { id } }: { params: { id: string } }) {
    const image = IMAGES.find((image) => image.id === id)
    return image ? (
        <div className="flex flex-col items-center">
            <Image alt={image.name} src={image.url} height={450} />
            <h1>{image.name}</h1>
        </div>
    ) : (
        <h1>No Image found</h1>
    )
}
