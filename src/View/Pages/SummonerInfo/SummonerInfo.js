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
        <div className="container-summoner flex flex-col pb-24">
            <PlayerInfo summonerDetails={summonerDetail} />
            <div className="flex flex-wrap w-full justify-between px-6">
                <h2 className="text-2xl font-bold text-gray-200 py-4 w-full">
                    {summonerName}'s Matches
                </h2>
                <div className="container-sort w-full flex px-5 py-4 bg-gray-900 rounded-t-xl">
                    <h3 class="text-xl font-bold text-gray-500">Champion</h3>
                    <h3 class="text-xl font-bold text-gray-500">Summoner spells & items</h3>
                    <h3 class="text-xl font-bold text-gray-500">KDA</h3>
                    <h3 class="text-xl font-bold text-gray-500">Teams</h3>
                </div>
                <div className="container-matches w-full">
                    {matchList !== null ? (
                        matchList.map((match, index) => {
                            return (
                                <MatchDetail
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
                <div className="container-foot w-full h-16 flex px-5 py-4 bg-gray-900 rounded-b-xl">
                </div>
            </div>
        </div>
    );
}

export default SummonerInfo;
