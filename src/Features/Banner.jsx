import { useEffect } from "react";
import { InputButton } from "../Components/Input";
import gsap from "gsap";
import { useState } from "react";
import { useRef } from "react";

export default function Banner(){
    const [ enteredPlayerName , setEnteredPlayerName ] = useState(null);
    const playerName = useRef();

    function handleName(){
        if(enteredPlayerName){
        const formatName = enteredPlayerName.slice(0,1).toUpperCase() + enteredPlayerName.slice(1);
        setEnteredPlayerName(formatName);
        }
        setEnteredPlayerName(playerName.current.value);
        playerName.current.value = '';
    }


    useEffect(() => {
        gsap.fromTo('#almost' , {
            opacity : 0,
            y : -40
        },
    {
        opacity : 1,
        duration : 1,
        delay : 0.5,
        ease : "bounce.out",
        y : 0
    });

    gsap.fromTo('#banner-text',{
        opacity : 0,
        y : 40
    },
    {
        duration : 1,
        opacity : 1,
        y : 0
    });

    },[]);


    return(
        <div className="relative max-w-[75%] h-1/2 bg-black top-8 rounded-4xl left-1/2 transform -translate-x-1/2 flex flex-col items-center p-15 gap-5 mb-20">
            <div className="text-white flex flex-col text-center" id="banner-text">
                <h1 className="text-5xl font-bold font-opensans">THE <span className="text-cyan-400 opacity-0 inline-block" id="almost">ALMOST</span> FINAL COUNTDOWN</h1>
                <p className="text-2xl">Stop the timer once you estimate that time (is almost) up</p>
            </div>
            <h1 className="text-white text-2xl">{enteredPlayerName ?? " Please enter your name below ! "}</h1>
            <InputButton 
            value={playerName}
            onClick={handleName}
            />
        </div>
    );
} 