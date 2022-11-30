import React, { useEffect, useState } from "react";

function StatMatch(props) {
    const { frames, team1, team2 } = props;
    const [teams, setTeams] = useState(null);
    const [championKillEvents, setChampionKillEvents] = useState([]);

    /*******************************************************************
                               LOG OF STATE
        ****************************************************************/

    // console.log("frames props :", frames);
    // console.log("championKillEvents", championKillEvents);
    // console.log("team1", team1);
    // console.log("team2", team2);
    // console.log("teams", teams);

    /*******************************************************************
                                USEEFFECT 
        ****************************************************************/
    useEffect(() => {
        if (team1 !== null && team2 !== null) {
            setTeams(team1.concat(team2));
        }
    }, [team1, team2]);

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
                            FONCTION RENDER 
        ****************************************************************/
    function renderStatMatch() {
        if (championKillEvents !== []) {
            return championKillEvents.map((kill, key) => {
                return (
                    <li key={key} className="flex flex-row">
                        <p className="text-white ml-5">
                            {new Date(kill.timestamp).getMinutes() +
                                " : " +
                                new Date(kill.timestamp).getSeconds()}
                        </p>
                        {teams.map((killer, key) => {
                            if (killer[2] === kill.killerId) {
                                return (
                                    <div key={key} className="flex text-blue-500 mx-5">
                                        <p>{killer[0]}</p>
                                        <img
                                            className="h-6 w-6 rounded-md"
                                            src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${killer[1]}.png`}
                                            alt={`img champion ${killer[1]}`}
                                        />
                                    </div>
                                );
                            }
                        })}
                        {teams.map((victim, key) => {
                            if (victim[2] === kill.victimId) {
                                return (
                                    <div key={key} className="flex text-red-500 mr-5">
                                        <p>{victim[0]}</p>
                                        <img
                                            className="h-6 w-6 rounded-md"
                                            src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${victim[1]}.png`}
                                            alt={`img champion ${victim[1]}`}
                                        />
                                    </div>
                                );
                            }
                        })}
                    </li>
                );
            });
        } else {
            return (
                <div>
                    <h1>Chargement ...</h1>
                </div>
            );
        }
    }

    /*******************************************************************
                                RENDER 
        ****************************************************************/
    return renderStatMatch();
}

export default StatMatch;
