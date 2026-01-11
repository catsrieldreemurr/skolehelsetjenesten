import Box from "@/components/ui/box";
import FooterBar from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Question from "@/components/ui/question";
import Typography from "@/components/ui/typography";
import Image from "next/image";

export default function Page(){
    return(
        <div>
            <Navbar></Navbar>

            <div className="flex flex-col items-center justify-center h-150 sm:h-180 bg-kattaGray p-5 border-b-3 border-kattaGreen">
                <Typography variant="h1" isBold isCentered>Ofte Spurte Spørsmål</Typography>
                <Typography variant="h4" isCentered>Er det noe du lurer på? Det kan hende at det allerede har blitt spurt! </Typography>                
            </div>

            <div className="mt-10">
                <Typography variant="h2" isCentered isBold>Spørsmål</Typography>
                <Question questionText="Test Question" answerText="answerText"></Question>
                <Question questionText="Test QUestion #2" answerText="answerText #2"></Question>
            </div>

            <div className="mt-15"><Typography variant="h2" isCentered isBold>Andre Ressurser</Typography></div>

            <div className="flex flex-col sm:flex-row p-5 gap-5 justify-center">
                
                <Box>
                    <Typography variant="h3" isBold isCentered>Hvor er vi?</Typography>
                    <Typography isCentered>Vi ligger i 3. Etasje i fløy 1 ved Elevtjenesten.</Typography>
                </Box>

                <Box>
                    <Typography variant="h3" isBold isCentered>Bestill en Time</Typography>
                    <Typography isCentered>Ønsker du å bestille time, sender du en SMS med navn og fødselsdato til en av Helsesykepleierene, eller trykk nedenfor.</Typography>
                </Box>

                <Box>
                    <Typography variant="h3" isBold isCentered>Finn oss på Snapchat!</Typography>
                    <div className="flex justify-center items-center mt-5">
                    </div>
                </Box>
            </div>
            <FooterBar></FooterBar>
        </div>
    )
}