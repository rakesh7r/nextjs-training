import IMAGES from "@/app/photos/_Images/Images"
import { Modal } from "antd"
import Image from "next/image"
import React from "react"

export default function ModalPhoto({
    params: { id },
}: {
    params: { id: string }
}) {
    const image = IMAGES.find((image) => image.id === id)
    return image ? (
        <Modal open={true} closable>
            <Image alt={image.name} src={image?.url} />
            <h1>{image.name}</h1>
        </Modal>
    ) : (
        <h1>No Image Found</h1>
    )
}
