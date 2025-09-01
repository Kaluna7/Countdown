export function ChallangeBanner({difficulty , description}){

    return (
        <div className="h-100 text-center p-6 bg-[#2cd9ab] rounded-2xl flex flex-col gap-6">
            <h1 className="text-4xl font-extrabold">{difficulty}</h1>
            <p className="text-2xl font-bold">{description}</p>

        </div>
    );
}