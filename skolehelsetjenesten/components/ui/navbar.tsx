import Image from "next/image";
import Link from "next/link";
import NavbarLink from "./navbarLink";
import { Popover, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { PopoverContent } from "@radix-ui/react-popover";

export default function Navbar(){
    const menuStyles = "text-lg p-3"
    return(
        <nav className="bg-white p-5 border-b-3 border-kattaLightGreen">
            <div className="flex items-center place-content-between">
                <Link href={"/"}><Image src={"/hamar-katedralskole_png.png"} alt={"Hamar Katedralskole"} height={150} width={150}></Image></Link>
                
                <div className="hidden sm:flex">
                    <NavbarLink linkDestination="/" text="Om Skolehelsetjensten"></NavbarLink>
                    <NavbarLink linkDestination="/" text="Ofte Stilte Spørsmål"></NavbarLink>
                    <NavbarLink linkDestination="/" text="Bestill Time"></NavbarLink>
                </div>

                <div className="flex sm:hidden">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant={"ghost"}> <Image src={"/menu_svg.svg"} height={40} width={40} alt="menuButton"></Image> </Button>
                        </PopoverTrigger>

                        <PopoverContent>
                            <div className="flex flex-col p-5 bg-kattaGray rounded-lg">
                                <Link href={"/"} className={menuStyles}>➜ Om Skolehelsetjenesten</Link>
                                <Link href={"/"} className={menuStyles}>➜ Ofte Stilte Spørsmål</Link>
                                <Link href={"/"} className={menuStyles}>➜ Bestill Time</Link>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>   
        </nav>
    )
}