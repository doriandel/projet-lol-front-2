import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./View/Pages/Home/Home";
import SummonerInfo from "./View/Pages/SummonerInfo/SummonerInfo";
import MatchTimeline from "./View/Pages/MatchTimeline/MatchTimeline";
import Page404 from "./View/Pages/Page404/Page404";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/summonerinfo/:summonerName" element={<SummonerInfo />} />
            <Route path="/matchtimeline/:matchId"  element={<MatchTimeline/>} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}

export default App;
