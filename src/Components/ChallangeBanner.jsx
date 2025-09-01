import { Button } from "./Button";

export function ChallangeBanner({difficulty , description, id}){

    return (
        <div className="h-100 text-center p-6 bg-[#2cd9ab] rounded-2xl flex flex-col gap-6 items-center border-8 border-green-800" id={id}>
            <h1 className="text-4xl font-extrabold">{difficulty}</h1>
            <p className="text-2xl font-bold">{description}</p>
            <Button />
        </div>
    );
}