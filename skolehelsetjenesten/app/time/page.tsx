"use client"
import { Button } from "@/components/ui/button";
import FooterBar from "@/components/ui/footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/navbar";
import Typography from "@/components/ui/typography";
import { useState } from "react";

export default function Page(){
    const [submitted, setSubmitted] = useState(false)

    const [name, setName] = useState("")
    const [dob, setDob] = useState("")
    const [phone, setPhone] = useState("")
    const [warning, setWarning] = useState("")

    return(
        <div>
            <Navbar></Navbar>

            <div className="flex flex-col bg-kattaGray h-180">
                <div className="mt-15">
                    <Typography variant="h1" isBold isCentered>Bestill Time</Typography>
                    {warning.length !== 0 && <div className="flex justify-center mt-10">
                            <div className="bg-red-200 sm:w-1/3 p-5 rounded-sm flex flex-col items-center justify-center text-red-600 border border-red-600">
                                <Typography variant="h3" isBold>Informasjon mangler</Typography>
                                <h1>{warning}</h1>
                            </div>
                        </div>}
                    
                    {submitted == false &&
                    <div>
                        
                        <div className="flex justify-center items-center mt-10">
                            <form className="w-3/3 sm:w-1/3 p-5">
                                <Label htmlFor="name" className="p-2 text-lg">Navn</Label>
                                <Input className="bg-white" title="name" placeholder="Navn Navneson" onChange={(e) => {
                                    let text = e.target.value
                                    setName(name + text);
                                }}></Input>

                                <Label htmlFor="date" className="p-2 text-lg">Fødselsdato</Label>
                                <Input className="bg-white" title="date" placeholder="01/01/1970" onChange={(e) => {
                                    let text = e.target.value
                                    setDob(dob + text);
                                }}></Input>
                                
                                <Label htmlFor="tlf" className="p-2 text-lg">Telefonnummer</Label>
                                <Input className="bg-white" title="tlf" placeholder="+47 12345678" onChange={(e) => {
                                    let text = e.target.value
                                    setPhone(phone + text);
                                }}></Input>

                                <div className="flex items-center justify-center mt-10">
                                    <Button onClick={(e) => {
                                        e.preventDefault();

                                        if(phone.length === 0 || dob.length === 0 || name.length === 0){
                                            setWarning("Vennligst fyll ut alle tekstfelter.")
                                        } 
                                        else
                                        {
                                            setSubmitted(true);
                                            setWarning("");
                                        }
                                    }}>Send</Button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    
                    }

                    {
                        submitted == true && <div className="p-5">
                            <Typography isCentered>Suksess! Du vil høre fra oss snart med mer informasjon.</Typography>
                        </div>
                    }
                    
                </div>
                
            </div>

            <FooterBar></FooterBar>
        </div>
    )
}