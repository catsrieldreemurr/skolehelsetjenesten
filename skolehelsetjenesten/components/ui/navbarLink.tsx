import Link from "next/link"

interface setTypes{
    text: string
    linkDestination: string
}

export default function NavbarLink({text, linkDestination}:setTypes){
    return(
        <Link href={linkDestination} className="flex items-center text-xl hover:bg-kattaGray hover:border-b-6 border-kattaLightGreen p-7">{text}</Link> 
    )
}