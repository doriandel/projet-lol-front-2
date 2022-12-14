import React, { useState, useEffect, useRef } from "react";
import Controle from "../Controle/Controle";
import "./map.css";

function Map(props) {
    const { timeMatch, frames, start } = props;
    const [championKillEvents, setChampionKillEvents] = useState([]);
    const canvasRef = useRef(null);
    const [time, setTime] = useState(0);

    /*******************************************************************
     *                             LOG OF STATE
     * ****************************************************************/
    // console.log("gameTime :", gameTime);
    // console.log("frames :", frames);
    // console.log("team1 :", team1);
    // console.log("team2 :", team2);
    // console.log("start map :", start);

    /*******************************************************************
     *                            USEEFFECT
     * ****************************************************************/

    useEffect(() => {
        if (time) {
            timeMatch(time);
        }
    }, [time]);

    function drawKill(x, y) {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = "/icon-skull-rt.svg";
        ctx.save();
        ctx.rotate((90 * Math.PI) / 180);
        ctx.drawImage(img, x, y, 500, 500);
    }
    const [timeOutId, setTimeOutId] = useState(null);

    function startPlayer(x, y, t) {
        if (typeof timeOutId === "number") {
            pausePlayer(timeOutId);
        }
        setTimeOutId(
            setTimeout((e) => {
                drawKill(x, y);
                setTime(t);
            }, t)
        );
    }

    function pausePlayer(timeOutId) {
        clearTimeout(timeOutId);
    }

    function eraseImg() {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }

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
        if (championKillEvents.length !== 0 && start === true) {
            championKillEvents.map((kill) => {
                if (kill.position !== null) {
                    startPlayer(
                        kill.position.x,
                        kill.position.y,
                        kill.timestamp / 50
                    );
                }
            });
        }
    }, [frames, start]);

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
    
    /*******************************************************************
                                RENDER 
        ****************************************************************/
       
    return (
        <div className="container-main flex flex-col">
            <div className="container-canvas relative">
                <div className="bg-canvas absolute z-1 bg-[url(http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map11.png)] bg-cover rounded-2xl"></div>
                <canvas
                    id="canvas"
                    className={`absolute z-2 -rotate-90`}
                    ref={canvasRef}
                    height={16000}
                    width={16000}
                    onClick={() => {
                        // eraseImg();
                    }}
                ></canvas>
            </div>
        </div>
    );
}

export default Map;
