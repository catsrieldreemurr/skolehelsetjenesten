import Link from "next/link"

interface setTypes{
    text: string
    linkDestination: string
}

export default function NavbarLink({text, linkDestination}:setTypes){
    return(
        <Link href={linkDestination} className="text-xl hover:underline ml-10">{text}</Link> 
    )
}