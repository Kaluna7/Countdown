import { useEffect } from "react";
import { ChallangeBanner } from "../Components/ChallangeBanner";
import { Data } from "../assets/Data/Data";
import gsap from "gsap";

export default function Challange(){

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                duration : 1, 
                ease : "power1.in",
                delay : 0.5
            }
        });

    tl.fromTo('#banner1', {
            opacity : 0
    },
    {
        opacity : 1,
        duration : 0.2,
    });

     tl.fromTo('#banner2', {
            opacity : 0
    },
    {
        opacity : 1,
        duration : 0.2,
    });

     tl.fromTo('#banner3', {
            opacity : 0
    },
    {
        opacity : 1,
        duration : 0.2,
    });

     tl.fromTo('#banner4', {
            opacity : 0
    },
    {
        opacity : 1,
        duration : 0.2,
    })
    },[])


    return(
        <div className="relative p-16 left-1/2 transform -translate-x-1/2  bg-black max-w-[75%] max-h-[80%] h-full rounded-2xl inset-shadow-cyan-300/100">
            <div className="grid grid-cols-2 gap-10">
                <ChallangeBanner {...Data[0]} id="banner1"/>
                <ChallangeBanner {...Data[1]} id="banner2"/>
                <ChallangeBanner {...Data[2]} id="banner3"/>
                <ChallangeBanner {...Data[3]} id="banner4"/>
            </div>
        </div>
    );
}