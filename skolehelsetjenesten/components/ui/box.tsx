import { ReactNode } from "react";

interface SetTypes{
    children: ReactNode
}

export default function Box({children}:SetTypes){
    return (
        <div className="bg-kattaGray2 sm:w-1/5 sm:h-[20rem] p-5">
            {children}
        </div>
    )
}