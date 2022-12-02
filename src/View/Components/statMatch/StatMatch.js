import React, { useEffect, useState } from "react";

function StatMatch(props) {
    const { frames, team1, team2 } = props;
    const [teams, setTeams] = useState(null);
    const [eventEvents, setEventEvents] = useState([]);

    function addO(item) {
        if (item < 10) {
            return "0" + item;
        } else {
            return "" + item;
        }
    }

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
                events.events.map((event) => {
                    if ((eventEvents.length === 0 &&
                        event.type === "CHAMPION_KILL") ||
                        (eventEvents.length === 0 &&
                        event.type === "BUILDING_KILL")) {
                        setEventEvents((eventEvents) => [
                            ...eventEvents,
                            event,
                        ]);
                    }
                });
            });
    }, [frames]);

    /*******************************************************************
                            FONCTION RENDER 
        ****************************************************************/
    function renderStatMatch() {
        if (eventEvents !== []) {
            return eventEvents.map((eventEvent, key) => {
                if (eventEvent.type === "CHAMPION_KILL" && eventEvent.killerId !== 0) {
                    return (
                        <li
                            key={key}
                            className="flex items-center mb-4 last:mb-0"
                        >
                            <p className="event-timer text-gray-500 font-bold">
                                {addO(
                                    new Date(eventEvent.timestamp).getMinutes()
                                ) +
                                    " : " +
                                    addO(
                                        new Date(
                                            eventEvent.timestamp
                                        ).getSeconds()
                                    )}
                            </p>
                            {teams.map((killer, key) => {
                                if (killer[2] === eventEvent.killerId) {
                                    if (killer[2] <= 5) {
                                        return (
                                            <div
                                                key={key}
                                                className="flex xs:flex-col font-bold text-red-500 mx-4"
                                            >
                                                <img
                                                    className="img-team rounded-full mr-2"
                                                    src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${killer[1]}.png`}
                                                    alt={`img champion ${killer[1]}`}
                                                />
                                                <p>
                                                    {killer[0]} <span className="summ-name">({killer[1]})</span>
                                                </p>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                key={key}
                                                className="flex xs:flex-col font-bold text-blue-500 mx-4"
                                            >
                                                <img
                                                    className="img-team rounded-full mr-2"
                                                    src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${killer[1]}.png`}
                                                    alt={`img champion ${killer[1]}`}
                                                />
                                                <p>
                                                    {killer[0]} <span className="summ-name">({killer[1]})</span>
                                                </p>
                                            </div>
                                        );
                                    }
                                }
                            })}
                            <img
                                className="w-[24px]"
                                src="/icon-skull.svg"
                                alt=""
                            />
                            {teams.map((victim, key) => {
                                if (victim[2] === eventEvent.victimId) {
                                    if (victim[2] <= 5) {
                                        return (
                                            <div
                                                key={key}
                                                className="flex xs:flex-col font-bold text-red-500 ml-4"
                                            >
                                                <img
                                                    className="img-team rounded-full mr-2"
                                                    src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${victim[1]}.png`}
                                                    alt={`img champion ${victim[1]}`}
                                                />
                                                <p>
                                                    {victim[0]} <span className="summ-name">({victim[1]})</span>
                                                </p>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                key={key}
                                                className="flex xs:flex-col font-bold text-blue-500 ml-4"
                                            >
                                                <img
                                                    className="img-team rounded-full mr-2"
                                                    src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${victim[1]}.png`}
                                                    alt={`img champion ${victim[1]}`}
                                                />
                                                <p>
                                                    {victim[0]} <span className="summ-name">({victim[1]})</span>
                                                </p>
                                            </div>
                                        );
                                    }
                                }
                            })}
                        </li>
                    );
                }
                if (eventEvent.type === "BUILDING_KILL" && eventEvent.killerId !== 0) {
                    return (
                        <li
                            key={key}
                            className="flex items-center mb-4 last:mb-0"
                        >
                            <p className="event-timer text-gray-500 font-bold">
                                {addO(
                                    new Date(eventEvent.timestamp).getMinutes()
                                ) +
                                    " : " +
                                    addO(
                                        new Date(
                                            eventEvent.timestamp
                                        ).getSeconds()
                                    )}
                            </p>
                            {teams.map((killer, key) => {
                                if (killer[2] === eventEvent.killerId) {
                                    if (killer[2] <= 5) {
                                        return (
                                            <div
                                                key={key}
                                                className="flex xs:flex-col font-bold text-red-500 mx-4"
                                            >
                                                <img
                                                    className="img-team rounded-full mr-2"
                                                    src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${killer[1]}.png`}
                                                    alt={`img champion ${killer[1]}`}
                                                />
                                                <p>
                                                    {killer[0]} <span className="summ-name">({killer[1]})</span>
                                                </p>
                                            </div>
                                        );
                                    }
                                    else {
                                        return (
                                            <div
                                                key={key}
                                                className="flex xs:flex-col font-bold text-blue-500 mx-4"
                                            >
                                                <img
                                                    className="img-team rounded-full mr-2"
                                                    src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${killer[1]}.png`}
                                                    alt={`img champion ${killer[1]}`}
                                                />
                                                <p>
                                                    {killer[0]} <span className="summ-name">({killer[1]})</span>
                                                </p>
                                            </div>
                                        );
                                    } 
                                }
                                
                            })}
                            <img
                                className="w-[24px]"
                                src="/icon-tower-break.svg"
                                alt=""
                            />
                        </li>
                    );
                }
                if (eventEvent.type === "BUILDING_KILL" && eventEvent.killerId === 0) {
                    return (
                        <li
                            key={key}
                            className="flex items-center mb-4 last:mb-0"
                        >
                            <p className="event-timer text-gray-500 font-bold">
                                {addO(
                                    new Date(eventEvent.timestamp).getMinutes()
                                ) +
                                    " : " +
                                    addO(
                                        new Date(
                                            eventEvent.timestamp
                                        ).getSeconds()
                                    )}
                            </p>
                            <div
                                key={key}
                                className="flex xs:flex-col font-bold text-gray-300 mx-4"
                            >
                                <img
                                    className="img-team rounded-full mr-2"
                                    src={`https://pbs.twimg.com/media/EpTrIV7XIAI4Kjj.jpg`}
                                    alt={`img minions`}
                                />
                                <p>Minions</p>
                            </div>
                            <img
                                className="w-[24px]"
                                src="/icon-tower-break.svg"
                                alt=""
                            />
                        </li>)
                };
                return;
            });
        }
    }

    /*******************************************************************
                                RENDER 
        ****************************************************************/
    return renderStatMatch();
}

export default StatMatch;
