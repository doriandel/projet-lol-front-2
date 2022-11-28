import React from "react";
import { useEffect, useState } from "react";

function Controle(props) {
    const {gameTime} = props;
    const [inputValue, setInputValue] = useState(0);

    useEffect(() => {
      console.log(inputValue)
    
    }, [inputValue])
    
    return (
        <div className="flex flex-row bg-amber-900 my-2 rounded-lg border-2 border-amber-600 p-3">
            <button className="flex w-1/12 bg-blue-500 rounded-lg mx-3 my-1 items-center justify-center text-3xl text-amber-400 shadow-black hover:drop-shadow-[5px_5px_5px_rgba(0,0,0,1)]">
                <i className="las la-backward"></i>
            </button>
            <button className="flex w-1/12 bg-green-500 rounded-lg mx-3 my-1 items-center justify-center text-3xl text-amber-400 shadow-black hover:drop-shadow-[5px_5px_5px_rgba(0,0,0,1)]">
                <i className="las la-play"></i>
            </button>
            <button className="flex w-1/12 bg-red-500 rounded-lg mx-3 my-1 items-center justify-center text-3xl text-amber-400 shadow-black hover:drop-shadow-[5px_5px_5px_rgba(0,0,0,1)]">
                <i className="las la-forward"></i>
            </button>
            <input
                className="flex w-9/12 mx-3 my-1 shadow-black hover:drop-shadow-[5px_5px_5px_rgba(0,0,0,1)]"
                type="range"
                name="time"
                id="time"
                min={0}
                max={gameTime}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    );
}

export default Controle;
