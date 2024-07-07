import Image from "next/image"
import Images from "./_Images/Images"
import Link from "next/link"
export default function Photos() {
    return (
        <div className="flex flex-row justify-center items-center flex-wrap gap-2">
            {Images.map(({ name, url, id }) => (
                <div key={id} className="flex flex-col items-center">
                    <Link href={`/photos/${id}`}>
                        <Image src={url} height={250} alt={name} />
                        <h2>{name}</h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}
