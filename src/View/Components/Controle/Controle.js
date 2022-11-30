import React from "react";
import { useEffect, useState } from "react";

function Controle(props) {
    const { gameTime } = props;
    const speed = 1000;
    const [inputValue, setInputValue] = useState(0);

    const [start, setStart] = useState(false);
    const [playTime, setPlayTime] = useState(0);

    /*******************************************************************
                               LOG OF STATE
        ****************************************************************/
    // console.log(props);
    // console.log("gameTime :", gameTime);
    // console.log("speed :", speed);
    // console.log("inputValue :", inputValue);
    // console.log("start :", start);
    // console.log("playTime :", playTime);

    // useEffect(() => {
    //     console.log(inputValue);
    // }, [inputValue]);

    /*******************************************************************
                                USEEFFECT 
        ****************************************************************/

    function play(e) {
        if (!start && playTime <= 10000) {
            console.log("playtime", playTime);
            setInterval(setPlayTime(playTime + speed), speed);
            for (
                let _playTime = playTime;
                _playTime < 10000;
                _playTime + speed
            ) {
                console.log(playTime);
                setPlayTime(playTime += speed);
            }
        }
        if (!start) {
            // setPlayTime(0);
            // setInputValue(0);
            // clearInterval(chronoStart());
        }
        // lancement du chrono:
        // chronoStart();
        // inversion de l'état play/pause:
        setStart(!start);
        //
    }

    function chronoStart() {
        // setInterval(() => {
        const playTimeTemp = speed + playTime;
        console.log("playTimeTemp", playTimeTemp);
        setPlayTime(playTimeTemp);
        setInputValue(playTimeTemp);
        // console.log("playTime", playTime);
        // }, speed);
    }

    function backward(e) {
        console.log(e);
    }

    function fordward(e) {
        console.log(e);
    }
    return (
        <div className="flex flex-row bg-amber-900 my-2 rounded-lg border-2 border-amber-600 p-3">
            <button
                id="backward"
                onClick={(e) => {
                    backward(e);
                }}
                className="flex w-1/12 bg-blue-500 rounded-lg mx-3 my-1 items-center justify-center text-3xl text-amber-400 shadow-black hover:drop-shadow-[5px_5px_5px_rgba(0,0,0,1)]"
            >
                <i className="las la-backward"></i>
            </button>
            <button
                id="play"
                onClick={(e) => {
                    play(e);
                }}
                className={
                    start
                        ? "bg-red-500 flex w-1/12 rounded-lg mx-3 my-1 items-center justify-center text-3xl text-amber-400 shadow-black hover:drop-shadow-[5px_5px_5px_rgba(0,0,0,1)]"
                        : "bg-green-500 flex w-1/12 rounded-lg mx-3 my-1 items-center justify-center text-3xl text-amber-400 shadow-black hover:drop-shadow-[5px_5px_5px_rgba(0,0,0,1)]"
                }
            >
                <i className={start ? "las la-pause" : "las la-play"}></i>
            </button>
            <button
                id="fordward"
                onClick={(e) => {
                    fordward(e);
                }}
                className="flex w-1/12 bg-red-500 rounded-lg mx-3 my-1 items-center justify-center text-3xl text-amber-400 shadow-black hover:drop-shadow-[5px_5px_5px_rgba(0,0,0,1)]"
            >
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
