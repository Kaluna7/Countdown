import { FaPlay } from 'react-icons/fa';

export function Button({onPress}){
    return(
        <button onClick={onPress} className="bg-[#141D38] rounded-full h-fit w-fit p-12 text-2xl font-bold text-[#FCDB32] relative hover:scale-95 cursor-pointer border-8 border-black">
            <FaPlay className='scale-200' />
        </button>
    );
}