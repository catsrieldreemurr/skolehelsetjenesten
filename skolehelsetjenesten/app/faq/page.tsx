import Box from "@/components/ui/box";
import FooterBar from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Question from "@/components/ui/question";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";

export default function Page(){
    return(
        <div>
            <Navbar></Navbar>

            <div className="flex flex-col items-center justify-center h-150 sm:h-180 bg-kattaGray p-5 border-b-3 border-kattaLightGreen">
                <Typography variant="h1" isBold isCentered>Ofte Spurte Spørsmål</Typography>
                <Typography variant="h4" isCentered>Er det noe du lurer på? Det kan hende at det allerede har blitt spurt! </Typography>                
            </div>

            <div className="mt-10">
                <Typography variant="h2" isCentered isBold>Spørsmål</Typography>
                <Question questionText="Er hva jeg sier hemmelig?" answerText="Ja. Alle som jobber her har tausetsplikt."></Question>
                <Question questionText="Hva kan vi hjelpe med?" answerText="Du kan snakke med oss om alt som har med din helse å gjøre. Dette inkluderer fysisk og psykisk helse, seksualitet og teste deg for kjønnssykdommer."></Question>
            </div>

            <div className="mt-15"><Typography variant="h2" isCentered isBold>Andre Ressurser</Typography></div>

            <div className="flex flex-col sm:flex-row p-5 gap-5 justify-center mb-10">

                <Box isCentered height="[10rem]">
                    <Link className="text-xl font-bold text-kattaGreen hover:underline" href={"https://www.helsenorge.no/hjelpetilbud-i-kommunene/skolehelsetjenesten/"}>Hva er Skolehelsetjensten?</Link>
                    <Typography>- Helsenorge</Typography>
                </Box>
                
                <Box isCentered height="[10rem]">
                    <Link className="text-xl font-bold text-kattaGreen hover:underline" href={"https://sml.snl.no/skolehelsetjeneste"}>Skolehelsetjenesten</Link>
                    <Typography>- Store Medisinske Leksikon</Typography>
                </Box>

                <Box isCentered height="[10rem]">
                    <Link className="text-xl font-bold text-kattaGreen hover:underline text-center" href={"https://www.helsedirektoratet.no/forebygging-diagnose-og-behandling/organisering-og-tjenestetilbud/helsestasjons-og-skolehelsetjenesten"}>Helsestasjons- og skolehelsetjenesten</Link>
                    <Typography>- Helsedirektoratet</Typography>
                </Box>
            </div>
            <FooterBar></FooterBar>
        </div>
    )
}