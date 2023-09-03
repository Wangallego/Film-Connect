import { useState } from "react";
export default function Btn() {
    const [selectedButton, setSelectedButton] = useState('hoy');

    const handleClick = () => {
        setSelectedButton(selectedButton === 'hoy' ? 'esta semana' : 'hoy');
    };

    return (
        <div className="flex justify-center items-center gap-6 border border-slate-400 w-[230px] rounded-full">
            <div className={`btn ${selectedButton === 'hoy' ? 'bg-blue-500' : ''} px-4 rounded-xl`} onClick={handleClick}>
            <a href="#" className="text-black hover:text-black">Hoy</a>
            </div>
            <div className={`btn ${selectedButton === 'esta semana' ? 'bg-blue-500' : ''} px-[20px] rounded-xl w-full`} onClick={handleClick}>
               <a href="#" className="text-black hover:text-black">Esta semana</a>
            </div>
        </div>
    );
}

