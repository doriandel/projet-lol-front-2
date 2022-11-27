import axios from "axios";
import React, { useState, useEffect } from "react";
import "./SummonerInfo.css";
import { useParams } from "react-router-dom";

import PlayerInfo from "../../Components/playerInfo/PlayerInfo";
import MatchDetail from "../../Components/MatchDetail/MatchDetail";

function SummonerInfo() {
    const { summonerName } = useParams(null);
    const [summonerDetail, setSummonerDetail] = useState(null);

    const [puuid, setPuuid] = useState(null);
    const [matchList, setMatchList] = useState(null);

    // Recuperation des informations du joueur :
    useEffect(() => {
        if (summonerName !== null) {
            const summonerNameWithoutSpace = summonerName.replace(" ", "");
            // console.log("summonerName2 : ", summonerNameWithoutSpace);

            axios
                .get(
                    `http://localhost:8000/api/getSummoner/${summonerNameWithoutSpace}`
                )
                .then((response) => {
                    setSummonerDetail(response.data);
                    setPuuid(response.data.summonnersDetail.puuid);
                });
        }
    }, [summonerName]);

    useEffect(() => {
        if (puuid !== null) {
            axios
                .get(`http://localhost:8000/api/getMatches/${puuid}`)
                .then((response) => setMatchList(response.data.matchesList));
            // console.log("Matchlist : ", matchList);
        }
    }, [puuid]);

    /*******************************************************************
                                RENDER
        ****************************************************************/
    return (
        <div className="flex flex-col gap-0 bg-cyan-700 h-screen w-screen ">
            <PlayerInfo summonerDetails={summonerDetail} />
            <div className="flex flex-wrap w-full justify-between">
                <h2 className="flex justify-center w-full items-center text-4xl text-yellow-100 bg-sky-800 p-4 rounded-[25px] border-4 border-red-700">
                    Liste des 10 derniers match :
                </h2>
                {matchList !== null ? (
                    matchList.map((match, index) => {
                        return (
                            <MatchDetail
                                className="flex flex-wrap w-full justify-center items-center p-2"
                                key={index}
                                match={match}
                                summoner={summonerName}
                            />
                        );
                    })
                ) : (
                    <p>Chargement</p>
                )}
            </div>
        </div>
    );
}

export default SummonerInfo;
