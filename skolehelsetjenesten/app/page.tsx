import Navbar from "@/components/ui/navbar";
import Typography from "@/components/ui/typography";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="flex flex-col items-center justify-center h-screen"> {/* Hero */}
        <Typography variant="h1" isBold>Skolehelsetjenesten</Typography>
        <Typography variant="h3">Hamar Katedralskole</Typography>
      </div>

      <div className="bg-kattaGray p-5">
        
        <Typography variant="h2" isBold isCentered isUnderline>Helsesykepleiere</Typography> {/* Will probably fully rework this, not happy with it */}
        <div className="sm:flex justify-center gap-20 mt-10">
          <div className="flex flex-col items-center justify-center bg-kattaGreen text-white p-5 rounded-sm">
            <Typography isBold variant="h3">Marianne Buvik</Typography>
            <Typography>902 69 665</Typography>
            <Image src={"/placeholder_photo.jpg"} alt="placeholder" height={500} width={300} className="rounded-xl m-5"></Image>
          </div>

          <div className="flex flex-col items-center justify-center bg-kattaGreen text-white p-5 rounded-sm mt-10 sm:mt-0">
            <Typography isBold variant="h3">Hanne Krøtøy</Typography>
            <Typography>912 48 594</Typography>
            <Image src={"/placeholder_photo.jpg"} alt="placeholder" height={500} width={300} className="rounded-xl m-5"></Image>
          </div> 
        </div>

        <div className="flex justify-center items-center mt-10">
          <div className="bg-white w-1/3 p-5 rounded-sm">
            <Typography variant="h3" isBold isCentered>Åpningstider</Typography>
            <Typography>Mandag kl. 09–14</Typography>
            <Typography>Tirsdag kl. 09–14</Typography>
            <Typography>Onsdag kl. 09–13</Typography>
            <Typography>Torsdag kl. 09–14</Typography>
            <Typography>Fredag kl. 09–11</Typography>
          </div>
        </div>
        
      </div>
    </div>
  );
}
