import { ChallangeBanner } from "../Components/ChallangeBanner";
import { Data } from "../assets/Data/Data";

export default function Challange(){
    return(
        <div className="relative p-16 left-1/2 transform -translate-x-1/2  bg-black max-w-[75%] max-h-[80%] h-full rounded-2xl inset-shadow-cyan-300/100">
            <div className="grid grid-cols-2 gap-10">
                <ChallangeBanner {...Data[0]} />
                <ChallangeBanner {...Data[1]} />
                <ChallangeBanner {...Data[2]} />
                <ChallangeBanner {...Data[3]} />
            </div>
        </div>
    );
}