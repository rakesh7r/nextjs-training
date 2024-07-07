import React, { ReactNode } from "react"

export default function Layout(props: {
    children: ReactNode
    modal: ReactNode
}) {
    return (
        <div className="container mx-auto flex flex-row justify-normal gap-3">
            {props.modal} 
            {props.children}
        </div>
    )
}
