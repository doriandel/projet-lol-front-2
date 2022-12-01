import React, { useState, useEffect, useRef } from "react";
import Controle from "../Controle/Controle";
// import "./map.css";

function Map(props) {
  // const {gameTime} = props;
  return (
    <div className="h-full">
      <canvas
        id="canvas"
        className={`flex bg-[url(http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map11.png)] bg-cover w-[640px] h-[640px] rounded-2xl`}
        // ref={setCanvasRef}
        onClick={(e) => {
          console.log(e.clientX, " ", e.clientY);
        }}
      >
        <img src="src/Asset/rift.jpg" alt="map" />
      </canvas>
      <Controle gameTime={props.gameTime} />
    </div>
  );
}

export default Map;
