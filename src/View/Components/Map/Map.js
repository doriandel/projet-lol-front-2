import React, { useState, useEffect, useRef } from "react";
import Controle from "../Controle/Controle";
// import "./map.css";

function Map(props) {
  const { gameTime, frames, team1, team2 } = props;
  const [championKillEvents, setChampionKillEvents] = useState([]);
  const canvasRef = useRef(null);

  function setImg(x, y) {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // console.log(ctx);
    ctx.save();
    ctx.rotate((Math.PI / 180) * 90);
    ctx.restore();
    const img = new Image();
    img.src =
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg";
    img.onload = () => {
      ctx.drawImage(img, x, y, 500, 500); // coordonner du summonerId a inclure
    };
  }

  function eraseImg() {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }

  // useEffect(() => {
  //     setImg();
  // }, []);

  // récupération des kills du match :
  useEffect(() => {
    if (frames !== null)
      frames.map((events) => {
        events.events.map((kill) => {
          if (
            championKillEvents.length === 0 &&
            kill.type === "CHAMPION_KILL"
          ) {
            setChampionKillEvents((championKillEvents) => [
              ...championKillEvents,
              kill,
            ]);
          }
        });
      });
    if (championKillEvents.length !== 0) {
      console.log("championKillEvents", championKillEvents);
      championKillEvents.map((kill) => {
        if (kill.position !== null) {
          // console.log("kill.position", kill.position.x);
          setImg(kill.position.x, kill.position.y);
        }
      });
    }
  }, [frames]);

  // récupération des kills du match :
  useEffect(() => {
    if (frames !== null)
      frames.map((events) => {
        events.events.map((kill) => {
          if (
            championKillEvents.length === 0 &&
            kill.type === "CHAMPION_KILL"
          ) {
            setChampionKillEvents((championKillEvents) => [
              ...championKillEvents,
              kill,
            ]);
          }
        });
      });
  }, [frames]);
  return (
    <div className="flex flex-col gap-2">
      <canvas
        id="canvas"
        className={`flex bg-[url(http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map11.png)] bg-cover w-[640px] h-[640px] rounded-2xl`}
        ref={canvasRef}
        height={16000}
        width={16000}
        onClick={(e) => {
          eraseImg();
          console.log(e.clientX, " ", e.clientY);
          console.log(e.target.getBoundingClientRect());
        }}
      ></canvas>
      <Controle gameTime={props.gameTime} />
    </div>
  );
}

export default Map;
