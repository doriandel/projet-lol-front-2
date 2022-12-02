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
      for (let _playTime = playTime; _playTime < 10000; _playTime + speed) {
        console.log(playTime);
        setPlayTime((playTime + speed));
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
    <div className="flex flex-col gap-2 items-center">
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
          onClick={(e) => {
            play(e);
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
