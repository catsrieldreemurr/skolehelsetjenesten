import Image from "next/image";
import Typography from "./typography";
import Link from "next/link";

export default function FooterBar(){
    return(
        <footer className="bg-kattaGreen p-5 mt-5">
            <Link href={"https://www.hamar-katedral.vgs.no/"}><Image src={"/hamar-katedralskoleWhite_png.png"} alt={"Hamar Katedralskole"} height={200} width={200} className="p-4"></Image></Link>
        </footer>
    )
}