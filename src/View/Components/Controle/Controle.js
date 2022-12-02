import React from "react";
import { useEffect, useState } from "react";

function Controle(props) {
    const { timeEnd, play, time } = props;
    const [inputValue, setInputValue] = useState(null);
    const [start, setStart] = useState(false);

    /*******************************************************************
                               LOG OF STATE
        ****************************************************************/
    // console.log(props);
    // console.log("gameTime :", gameTime);
    // console.log("speed :", speed);
    // console.log("inputValue :", inputValue);
    // console.log("start :", start);
    // console.log("playTime :", playTime);
    // console.log("timeMatch", timeMatch);
    // console.log("timeEnd", timeEnd);

    /*******************************************************************
                                USEEFFECT 
        ****************************************************************/

    useEffect(() => {
            setInputValue(time);
    }, [time]);

    /*******************************************************************
                                RENDER 
        ****************************************************************/
       
    return (
        <div className="flex flex-col gap-2 items-center">
            <input
                className="flex w-9/12 mx-3 my-1 shadow-black hover:drop-shadow-[5px_5px_5px_rgba(0,0,0,1)]"
                type="range"
                name="time"
                id="time"
                min={0}
                max={timeEnd/50}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="flex flex-row gap-4 my-2 rounded-lg">
                <button
                    id="backward"
                    onClick={(e) => {
                        backward(e);
                    }}
                    className="flex bg-blue-100 rounded-lg h-12 w-14 items-center justify-center text-3xl text-blue-700 shadow-black hover:drop-shadow-[5px_5px_5px_rgba(0,0,0,1)]"
                >
                    <i className="las la-backward"></i>
                </button>
                <button
                    id="play"
                    onClick={() => {
                        play(!start);
                        setStart(!start);
                        setInputValue(time);
                    }}
                    className="flex bg-blue-700 rounded-lg h-12 w-14 items-center justify-center text-3xl text-blue-100 shadow-black hover:drop-shadow-[5px_5px_5px_rgba(0,0,0,1)]"
                >
                    <i className={start ? "las la-pause" : "las la-play"}></i>
                </button>
                <button
                    id="fordward"
                    onClick={(e) => {
                        fordward(e);
                    }}
                    className="flex bg-blue-100 rounded-lg h-12 w-14 items-center justify-center text-3xl text-blue-700 shadow-black hover:drop-shadow-[5px_5px_5px_rgba(0,0,0,1)]"
                >
                    <i className="las la-forward"></i>
                </button>
            </div>
        </div>
    );
}

export default Controle;
