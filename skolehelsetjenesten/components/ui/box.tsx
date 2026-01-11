import { ReactNode } from "react";

interface SetTypes{
    children?: ReactNode
    isCentered?: Boolean
    height?: string
}

export default function Box({children, isCentered, height}:SetTypes){    
    return (
        <div className={`bg-kattaGray2 sm:w-1/5 sm:h-${height || "[20rem]"} p-5 ${isCentered && "flex flex-col items-center"}`}>
            {children}
        </div>
    )
}