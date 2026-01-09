import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="flex flex-col items-center justify-center h-180 backdrop-blur-none bg-[url(/cutKatta.png)] bg-cover border-b-3 border-kattaLightGreen"> {/* Hero */}
        <span className="bg-black/50 backdrop-blur-xs p-10 rounded-md tex text-white">
          <Typography variant="h1" isBold>Skolehelsetjenesten</Typography>
          <Typography variant="h3">Hamar Katedralskole</Typography>
        </span>
      </div>

      <div className="bg-kattaGray p-5">
        <Typography variant="h2" isBold isCentered includeSpacer>Våre Helsesykepleiere</Typography> {/* Will probably fully rework this, not happy with it */}
        <div className="flex flex-col justify-center gap-5 m-15 items-center">
          <div className="flex flex-col items-center justify-center bg-kattaGreen text-white p-5 rounded-sm w-4/5 sm:w-3/5">
            <Typography isBold variant="h3">Marianne Buvik</Typography>
            <Typography>902 69 665</Typography>
          </div>

          <div className="flex flex-col items-center justify-center bg-kattaGreen text-white p-5 rounded-sm w-4/5 sm:w-3/5">
            <Typography isBold variant="h3">Hanne Krøtøy</Typography>
            <Typography>912 48 594</Typography>
          </div> 
        </div>

        <div className="flex justify-center items-center mt-10">
          <div className="bg-white w-4/5 sm:w-3/5 p-5 rounded-sm text-center">
            <Typography variant="h3" isBold isCentered>Kontortider</Typography>
            <Typography>Mandag kl. 09–14</Typography>
            <Typography>Tirsdag kl. 09–14</Typography>
            <Typography>Onsdag kl. 09–13</Typography>
            <Typography>Torsdag kl. 09–14</Typography>
            <Typography>Fredag kl. 09–11</Typography>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row p-5 gap-5 justify-center mt-15">
          <div className="bg-kattaGray2 sm:w-1/5 h-[15rem] p-5">
            <Typography variant="h3" isBold isCentered>Hvor er vi?</Typography>
            <Typography isCentered>Vi ligger i 3. Etasje i fløy 1 ved Elevtjenesten.</Typography>
          </div>

          <div className="bg-kattaGray2 sm:w-1/5 h-[15rem] p-5">
            <Typography variant="h3" isBold isCentered>Bestill en Time</Typography>
            <Typography isCentered>Ønsker du å bestille time, sender du en SMS med navn og fødselsdato til en av Helsesykepleierene, eller trykk nedenfor.</Typography>

            <div className="flex items-center justify-center">
              <Link href={"/"} className="bg-kattaLightGreen text-white p-3 rounded-xl mt-8 w-1/2 text-center">Bestill Her</Link>
            </div>
            
          </div>

          <div className="bg-kattaGray2 sm:w-1/5 h-[15rem] p-5">
            <Typography variant="h3" isBold isCentered>Finn oss på Snapchat!</Typography>
            <div className="flex justify-center items-center mt-5">
              <Image src={"/kattaSnap.png"} height={150} width={150} alt="Snapchat Image"></Image>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
