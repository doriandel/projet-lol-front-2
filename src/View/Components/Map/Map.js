import React, { useState, useEffect, useRef } from "react";
// import "./map.css";

function Map(props) {
    return (
        <canvas
            id="canvas"
            className={`flex bg-[url(http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map11.png)] bg-cover border-2 w-[750px] h-[750px] border-purple-800`}
            // ref={setCanvasRef}
        >
            <img src="src/Asset/rift.jpg" alt="map" />
        </canvas>
    );
};

export default Map;
