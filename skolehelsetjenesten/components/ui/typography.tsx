import { chdir } from "process"
import { ReactNode } from "react"

interface setTypes{
    variant?: string
    isBold?: boolean
    isCentered?: boolean
    isUnderline?: boolean
    children?: ReactNode
}

export default function Typography({variant, isBold, isCentered, children, isUnderline}:setTypes){
    if (variant === "h1"){
        return <h1 className={`text-4xl ${isBold && "font-bold"} ${isCentered && "text-center"} ${isUnderline && "underline"}`}>{children}</h1>
    }

    else if(variant === "h2"){
        return <h2 className={`text-3xl ${isBold && "font-bold"} ${isCentered && "text-center"} ${isUnderline && "underline"}`}>{children}</h2>
    }

    else if(variant === "h3"){
        return <h2 className={`text-2xl ${isBold && "font-bold"} ${isCentered && "text-center"} ${isUnderline && "underline"}`}>{children}</h2>
    }

    else if(variant === "h4"){
        return <h2 className={`text-xl ${isBold && "font-bold"} ${isCentered && "text-center"} ${isUnderline && "underline"}`}>{children}</h2>
    }

    else {
        return <p className={`text-lg ${isBold && "font-bold"} ${isCentered && "text-center"} ${isUnderline && "underline"}`}>{children}</p>
    }
}