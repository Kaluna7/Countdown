import { InputButton } from "../Components/Input";

export default function Banner(){
    return(
        <div className="relative max-w-[75%] h-1/2 bg-black top-8 rounded-4xl left-1/2 transform -translate-x-1/2 flex flex-col items-center p-15 gap-5 mb-20">
            <div className="text-white flex flex-col text-center">
                <h1 className="text-5xl font-bold font-opensans">THE <span className="text-cyan-400">ALMOST</span> FINAL COUNTDOWN</h1>
                <p className="text-2xl">Stop the timer once you estimate that time (is almost) up</p>
            </div>
            <h1 className="text-white text-2xl">Hello</h1>
            <InputButton />
        </div>
    );
} 