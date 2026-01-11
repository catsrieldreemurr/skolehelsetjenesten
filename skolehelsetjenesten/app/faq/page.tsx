import Navbar from "@/components/ui/navbar";
import Typography from "@/components/ui/typography";
import Image from "next/image";

export default function Page(){
    return(
        <div>
            <Navbar></Navbar>

            <div className="flex flex-col items-center justify-center h-180 bg-kattaGray p-5">
                <Typography variant="h1" isBold isCentered>Ofte Spurte Spørsmål</Typography>
                <Typography variant="h4" isCentered>Er det noe du lurer på? Det kan hende at det allerede har blitt spurt! </Typography>                
            </div>

            <div className="mt-5">
                <Typography variant="h3" isBold isCentered includeSpacer>Question</Typography>
            </div>
        </div>
    )
}