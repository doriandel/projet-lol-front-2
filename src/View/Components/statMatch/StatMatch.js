import React, { useEffect, useState } from "react";

function StatMatch(props) {
    const { frames, team1, team2 } = props;
    const [teams, setTeams] = useState(null);
    const [eventEvents, setEventEvents] = useState([]);

    function addO(item){
        if(item < 10){
            return '0' + item;
        } else {
            return '' + item;
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
                    if (
                        eventEvents.length === 0 &&
                        event.type === "CHAMPION_KILL" ||
                        event.type === "BUILDING_KILL"

                    ){
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
                if(eventEvent.type === "CHAMPION_KILL"){
                    return (
                        <li key={key} className="flex items-center mb-4 last:mb-0">
                            <p className="text-gray-500 font-bold text-sm">
                                {addO(new Date(eventEvent.timestamp).getMinutes()) + " : " + addO(new Date(eventEvent.timestamp).getSeconds())}
                            </p>
                            {teams.map((killer, key) => {
                                if (killer[2] === eventEvent.killerId) {
                                    if (killer[2] === 1 || killer[2] === 2 ||killer[2] === 3 ||killer[2] === 4 ||killer[2] === 5){
                                        return (
                                            <div key={key} className="flex font-bold text-red-500 mx-4">
                                                <img
                                                    className="h-8 w-8 rounded-full mr-2"
                                                    src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${killer[1]}.png`}
                                                    alt={`img champion ${killer[1]}`}
                                                />
                                                <p>{killer[0]} ({killer[1]})</p>
                                            </div>
                                        );
    
                                    } 
                                    else {
                                        return (
                                            <div key={key} className="flex font-bold text-blue-500 mx-4">
                                                <img
                                                    className="h-8 w-8 rounded-full mr-2"
                                                    src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${killer[1]}.png`}
                                                    alt={`img champion ${killer[1]}`}
                                                />
                                                <p>{killer[0]} ({killer[1]})</p>
                                            </div>
                                        );
                                    }
                                }
                            })}
                            <img className="w-[24px]" src="/icon-skull.svg" alt="" />
                            {teams.map((victim, key) => {
                                if (victim[2] === eventEvent.victimId) {
                                    if (victim[2] === 1 || victim[2] === 2 ||victim[2] === 3 ||victim[2] === 4 ||victim[2] === 5){
                                        return (
                                            <div key={key} className="flex font-bold text-red-500 ml-4">
                                                <img
                                                    className="h-8 w-8 rounded-full mr-2"
                                                    src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${victim[1]}.png`}
                                                    alt={`img champion ${victim[1]}`}
                                                />
                                                <p>{victim[0]} ({victim[1]})</p>
                                            </div>
                                        );
                                    }
                                    else {
                                        return (
                                            <div key={key} className="flex font-bold text-blue-500 ml-4">
                                                <img
                                                    className="h-8 w-8 rounded-full mr-2"
                                                    src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${victim[1]}.png`}
                                                    alt={`img champion ${victim[1]}`}
                                                />
                                                <p>{victim[0]} ({victim[1]})</p>
                                            </div>
                                        );
                                    }
                                }
                            })}
                        </li>
                    );

                }
                if(eventEvent.type === "BUILDING_KILL"){
                    return (
                        <li key={key} className="flex items-center mb-4 last:mb-0">
                            <p className="text-gray-500 font-bold text-sm">
                                {addO(new Date(eventEvent.timestamp).getMinutes()) + " : " + addO(new Date(eventEvent.timestamp).getSeconds())}
                            </p>
                            {teams.map((killer, key) => {
                                if (killer[2] === eventEvent.killerId) {
                                    if (killer[2] <= 5){
                                        return (
                                            <div key={key} className="flex font-bold text-red-500 mx-4">
                                                <img
                                                    className="h-8 w-8 rounded-full mr-2"
                                                    src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${killer[1]}.png`}
                                                    alt={`img champion ${killer[1]}`}
                                                />
                                                <p>{killer[0]} ({killer[1]})</p>
                                            </div>
                                        );
    
                                    } 
                                    if (killer[2] > 5) {
                                        return (
                                            <div key={key} className="flex font-bold text-blue-500 mx-4">
                                                <img
                                                    className="h-8 w-8 rounded-full mr-2"
                                                    src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${killer[1]}.png`}
                                                    alt={`img champion ${killer[1]}`}
                                                />
                                                <p>{killer[0]} ({killer[1]})</p>
                                            </div>
                                        );
                                    }
                                }
                            })}
                            {/* ${`
                                if(eventEvent.killerId === 0){
                                    return(
                                        <div key={key} className="flex font-bold text-red-500 mx-4">
                                            <p>Minions</p>
                                        </div>
                                    )
    
                                }`
                            } */}
                            <img className="w-[24px]" src="/icon-tower-break.svg" alt="" />
                        </li>
                    );
                    
                }

            });
        }
    }

    /*******************************************************************
                                RENDER 
        ****************************************************************/
    return renderStatMatch();
}

export default StatMatch;
