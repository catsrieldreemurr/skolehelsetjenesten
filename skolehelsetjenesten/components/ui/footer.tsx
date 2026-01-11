import Image from "next/image";
import Typography from "./typography";
import Link from "next/link";
import { Separator } from "./separator";
import NavbarLink from "./navbarLink";

export default function FooterBar(){
    return(
        <footer className="bg-kattaGreen p-5 mt-5">
            <div className="flex flex-col sm:flex-row text-white gap-5 items-center">
                <div className="sm:w-1/3 flex">
                    <Link href={"https://www.hamar-katedral.vgs.no/"}>
                        <Image src={"/hamar-katedralskoleWhite_png.png"} alt={"Hamar Katedralskole"} height={250} width={250} className="p-4"></Image>
                    </Link>
                </div>
            </div>
        </footer>
    )
}