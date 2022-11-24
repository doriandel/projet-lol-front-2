import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function MatchDetail(props) {
    const { match, summoner } = props;
    const [matchDetail, setMatchDetail] = useState(null);

    const [summonerResearch, setSummonerResearch] = useState(null);
    const [participant, setParticipant] = useState(null);

    const [team1, setTeam1] = useState([]);
    const [team2, setTeam2] = useState([]);

    const [playerItems, setPlayerItems] = useState(null);
    const itemsValue = {
        21: "SummonerBarrier",
        1: "SummonerBoost",
        14: "SummonerDot",
        3: "SummonerExhaust",
        4: "SummonerFlash",
        6: "SummonerHaste",
        7: "SummonerHeal",
        13: "SummonerMana",
        30: "SummonerPoroRecall",
        31: "SummonerPoroThrow",
        11: "SummonerSmite",
        39: "SummonerSnowball",
        32: "SummonerSnowURFSnowball_Mark",
        12: "SummonerTeleport",
    };

    /*******************************************************************
                               LOG OF STATE
        ****************************************************************/
    // console.log("match : ", match);
    // console.log("matchDetail : ", matchDetail);
    // console.log("summonerResearch : ", summonerResearch);
    // console.log("participant : ", participant);
    // console.log("teams : ", teams);
    console.log("team1 : ", team1);
    console.log("team2 : ", team2);
    // console.log("playerItems : ", playerItems);
    // console.log("itemsValue : ", itemsValue);

    /*******************************************************************
                                USEEFFECT 
        ****************************************************************/
    // recuperation des infos du match :
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/getMatchDetail/${match}`)
            .then((response) => {
                setMatchDetail(response.data.matchesList.info);
                setParticipant(response.data.matchesList.info.participants);
                setPlayerItems([
                    response.data.matchesList.info.participants[0].item0,
                    response.data.matchesList.info.participants[0].item1,
                    response.data.matchesList.info.participants[0].item2,
                    response.data.matchesList.info.participants[0].item3,
                    response.data.matchesList.info.participants[0].item4,
                    response.data.matchesList.info.participants[0].item5,
                    response.data.matchesList.info.participants[0].item6,
                ]);
                //
                response.data.matchesList.info.participants.map((sumDetail) => {
                    if (sumDetail.summonerName === summoner) {
                        setSummonerResearch(sumDetail);
                    }
                });
            });
    }, [match]);

    useEffect(() => {
        if (participant !== null) {
            participant.map((summoner) => {
                if (summoner.teamId === 100 && (team1.length < 5)) {
                    setTeam1((team1) => [...team1, [summoner.summonerName, summoner.championName]]);
                    console.log("team1");
                }
                if (summoner.teamId === 200 && (team1.length < 5)) {
                    setTeam2((team2) => [...team2, [summoner.summonerName, summoner.championName]]);
                    console.log(summoner);
                }
            });
        }
    }, [participant]);


    /*******************************************************************
                                FONCTION RENDER 
        ****************************************************************/

    function renderMatches() {
        if (summonerResearch !== null) {
            return (
                <li key={match} className="flex items-stretch w-1/2 py-3 px-2 ">
                    <a
                        href={`/matchtimeline/${match}`}
                        className={
                            "block " +
                            (summonerResearch.win
                                ? "bg-blue-900 hover:bg-blue-800 border-red-800 border-4 rounded-[10px] w-full"
                                : "bg-red-900 hover:bg-red-800 border-blue-800 border-4 rounded-[10px] w-full")
                        }
                    >
                        <div className="flex items-center px-4 py-4 sm:px-6 justify-between">
                            <div className="flex space-x-8 items-center">
                                <div className="flex space-x-5 items-center">
                                    <div>
                                        <p className="truncate text-sm font-medium text-gray-50">
                                            {summonerResearch.championName}
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 ">
                                        <img
                                            className="h-16 w-16 rounded-full"
                                            src={`https://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${
                                                summonerResearch.championName
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                summonerResearch.championName
                                                    .substring(1)
                                                    .toLowerCase()
                                            }.png`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex-col space-y-1">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-7 w-7 rounded-md"
                                                src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/${
                                                    itemsValue[
                                                        summonerResearch
                                                            .summoner1Id
                                                    ]
                                                }.png`}
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-7 w-7 rounded-md"
                                                src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/${
                                                    itemsValue[
                                                        summonerResearch
                                                            .summoner2Id
                                                    ]
                                                }.png`}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <ul className="flex space-x-1">
                                    {playerItems.map((item, key) => {
                                        if (item !== 0) {
                                            return (
                                                <li
                                                    key={key}
                                                    className="flex-shrink-0"
                                                >
                                                    <img
                                                        className="h-7 w-7 rounded-md"
                                                        src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/${item}.png`}
                                                        alt=""
                                                    />
                                                </li>
                                            );
                                        }
                                    })}
                                </ul>
                            </div>
                            <div>
                                <p className="text-2xl text-gray-300 font-bold">
                                    {summonerResearch.kills}{" "}
                                    <span className="text-gray-600">/</span>{" "}
                                    {summonerResearch.deaths}{" "}
                                    <span className="text-gray-600">/</span>{" "}
                                    {summonerResearch.assists}
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-col space-y-2">
                                    {team1.map((player, i) => (
                                        <div
                                        className="flex space-x-1 items-center"
                                        key={i}
                                        >
                                            <div className="flex-shrink-0">
                                            {console.log("player",player)}
                                                <img
                                                    className="h-4 w-4 rounded-md"
                                                    src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${player[1]}.png`}
                                                    alt=""
                                                />
                                            </div>
                                            <p className="text-xs text-gray-50">
                                                {player[0]}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-col space-y-2">
                            {team2.map((player, i) => (
                                <div
                                    className="flex space-x-1 items-center"
                                    key={i}
                                >
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-4 w-4 rounded-md"
                                            src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${player[1]}.png`}
                                            alt=""
                                        />
                                    </div>
                                    <p className="text-xs text-gray-50">
                                        {player[0]}
                                    </p>
                                </div>
                            ))}
                            </div>
                        </div>
                    </a>
                </li>
            );
        } else {
            return <div className="flex text-[24px] text-blue-800 font-bold w-1/2 h-[160px] justify-center items-center border-4 border-red-800 rounded-[20px]">Chargement ...</div>;
        }
    }
    /*******************************************************************
     RENDER
     ****************************************************************/

    return renderMatches();
}

export default MatchDetail;

// const [dateCreation, setDateCreation] = useState(null);

// setDateCreation(
//     new Date(
//         response.data.matchesList.info.gameCreation
//     ).toLocaleDateString("fr-FR")
// );
