import { useRef } from "react";

export function InputButton({onClick,value}){
    useRef();
    return(
        <div className="text-white flex flex-col gap-5 items-center">
            <input type="text" placeholder="Enter Your Name" className="border focus:border-2 focus:outline-none border-green-600 px-8 py-2 rounded-lg" ref={value}/>
            <button className="btn bg-gradient-to-t from-green-500 via-green-500 to-green-500 hover:inset-shadow-sm hover:inset-shadow-green-900/100 transform hover:translate-y-0.5" onClick={onClick}>
                <span className="btn-text-one font-bold">Save</span>
                <span className="btn-text-two font-bold">Really ?</span>
            </button>
        </div>
    );
}