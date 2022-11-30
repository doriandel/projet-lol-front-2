import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./matchDetail.css";

function MatchDetail(props) {
    const { match, summoner } = props;

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
    // console.log("team1 : ", team1);
    // console.log("team2 : ", team2);
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
                response.data.matchesList.info.participants.map((sumDetail) => {
                    if (sumDetail.summonerName.toLowerCase() === summoner.toLowerCase()) {
                        setSummonerResearch(sumDetail);
                    }
                });
            });

        if (participant !== null) {
            participant.map((summoner) => {
                if (summoner.teamId === 100 && team1.length < 5) {
                    setTeam1((team1) => [
                        ...team1,
                        [summoner.summonerName, summoner.championName, summoner.participantId],
                    ]);
                }
                if (summoner.teamId === 200 && team1.length < 5) {
                    setTeam2((team2) => [
                        ...team2,
                        [summoner.summonerName, summoner.championName, summoner.participantId],
                    ]);
                }
            });
        }

        function revealMatches(){
            let matches = document.querySelectorAll('.container-matches .match');
            matches.forEach(function(match){
                if(!match.classList.contains('style-reveal')){
                match.classList.add('style-reveal');
                }
            })
        }
        revealMatches();
    }, [match, participant]);

    useEffect(() => {
    });

    /*******************************************************************
                                FONCTION RENDER 
        ****************************************************************/

    function renderMatches() {
        if (summonerResearch !== null) {
            return (
                <li key={match} className="match flex items-stretch w-full mb-1 last:mb-0">
                    <Link
                        to={`/matchtimeline/${match}`}
                        state={{team1: team1, team2: team2}}
                        className={
                            "block " +
                            (summonerResearch.win
                                ? "bg-blue-600/50 hover:bg-blue-800 border-red-800 w-full"
                                : "bg-red-600/50 hover:bg-red-800 border-blue-800 w-full")
                        }
                    >
                        <div className="flex items-center px-4 py-4 sm:px-6 justify-between">
                            <div className="container-items flex space-x-8 items-center">
                                <div className="flex space-x-5 items-center">
                                    <div className="flex-shrink-0">
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
                                    <div>
                                        <p className="truncate text-sm font-medium text-gray-50 w-24">
                                            {summonerResearch.championName}
                                        </p>
                                    </div>
                                    <div className="summoner-spells flex-col space-y-1 pl-16">
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
                                <ul className="summoner-items flex space-x-1">
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
                                <p className="xl:text-xl lg:text-lg text-gray-300 font-bold">
                                    {summonerResearch.kills}{" "}
                                    <span className="text-gray-600">/</span>{" "}
                                    {summonerResearch.deaths}{" "}
                                    <span className="text-gray-600">/</span>{" "}
                                    {summonerResearch.assists}
                                </p>
                            </div>
                            <div className="container-teams flex w-84 justify-between">
                                <div className="flex gap-4 w-40">
                                    <div className="flex-col space-y-2">
                                        {team1.map((player, i) => (
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
                                <div className="flex-col space-y-2 w-40">
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
                        </div>
                    </Link>
                </li>
            );
        } else {
            return (
                <div className="w-full h-[100vh]"></div>
            );
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
