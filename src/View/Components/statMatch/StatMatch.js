import React, { useEffect, useState } from "react";

function StatMatch(props) {
    const { frames, team1, team2 } = props;
    const [teams, setTeams] = useState(null);
    const [championKillEvents, setChampionKillEvents] = useState([]);

    /*******************************************************************
                               LOG OF STATE
        ****************************************************************/

    // console.log("frames props :", frames);
    // console.log("events1 :", events);
    // console.log("timestamp :", timestamp);
    // console.log("championKillEvents", championKillEvents);
    // console.log("dateEvents", timeEvents);
    // console.log("team1", team1);
    // console.log("team2", team2);
    console.log("teams", teams);

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
                // setEvents(events);
                events.events.map((kill) => {
                    // console.log("kill", kill);
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
                        <br />
                        <p className="text-blue-500 mx-5">
                            {teams.map((killer) => {
                                console.log("killer", killer);
                                if (killer[2] === kill.killerId) {
                                    return killer[0];
                                }
                            })}
                        </p>

                        {/* <p className="text-amber-500 mx-5">--></p> */}
                        <p className="text-red-500 mr-5">{teams.map((victim) => {
                                console.log("victim", victim);
                                if (victim[2] === kill.victimId) {
                                    return victim[0];
                                }
                            })}</p>
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
