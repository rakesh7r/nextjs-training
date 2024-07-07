import { StaticImageData } from "next/image"
import one from "./1.webp"
import two from "./2.webp"
import three from "./3.webp"

export interface IImage {
    id: string
    name: string
    url: StaticImageData
}
export const IMAGES: IImage[] = [
    {
        id: "1",
        name: "Great Wall of China",
        url: one,
    },
    {
        id: "2",
        name: "Chichén Itzá",
        url: two,
    },
    {
        id: "3",
        name: "Petra",
        url: three,
    },
]
export default IMAGES
