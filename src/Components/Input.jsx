export function InputButton(){
    return(
        <div className="text-white flex flex-col gap-5 items-center">
            <input type="name" placeholder="Enter Your Name" required className="border focus:border-2 focus:outline-none border-green-600 px-8 py-2 rounded-lg"/>
            <button className="btn bg-gradient-to-t from-green-500 via-green-500 to-green-500 hover:inset-shadow-sm hover:inset-shadow-green-900/100 transform hover:translate-y-0.5">
                <span className="btn-text-one font-bold">Save ?</span>
                <span className="btn-text-two font-bold">Really ?</span>
            </button>
        </div>
    );
}