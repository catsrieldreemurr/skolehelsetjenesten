import { ReactNode } from "react";
import Typography from "./typography";

interface SetProps{
    questionText: string
    answerText: string
}

export default function Question({questionText, answerText}:SetProps){
    return(
        <div className="flex flex-col items-center justify-center mt-5">
            <div className="flex flex-col w-4/5 sm:w-1/3 bg-kattaGreen text-white p-5 rounded-lg">
                <Typography variant="h2" isCentered isBold>{questionText}</Typography>
                <Typography isCentered>{answerText}</Typography>
            </div>
        </div>
    )
}