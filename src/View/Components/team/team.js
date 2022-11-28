import React from "react";
import "./team.css";

function team(props) {
    const { team1, team2 } = props;

    return (
        <div className="flex flex-row w-full">
            <div className="flex flex-col w-full h-[200px] px-2 border-2 border-amber-400 m-1 bg-red-800">
                <h2 className="text-center font-bold text-2xl text-amber-400">Team 1 :</h2>
                <ol className="flex-col">
                {team1 !== null ? (
                        team1.map((participant) => {
                            return (
                                <li
                                    className="flex space-x-2 items-center justify-start"
                                    key={participant[2]}
                                >
                                    <div className="flex-shrink-0 ml-2">
                                        <img
                                            className="h-6 w-6 rounded-md"
                                            src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${participant[1]}.png`}
                                            alt="img champion"
                                        />
                                    </div>
                                    <p className="text-xl text-gray-50">
                                        {participant[0]}
                                    </p>
                                </li>
                            );
                        })
                    ) : (
                        <p>Chargement ...</p>
                    )}
                </ol>
            </div>
            <div className="flex flex-col w-full h-[200px] border-2 border-amber-400 m-1 bg-blue-800">
                <h2 className="text-center font-bold text-2xl text-amber-400">Team 2 :</h2>
                <ol className="flex-col">
                    {team2 !== null ? (
                        team2.map((participant) => {
                            return (
                                <li
                                    className="flex space-x-2 items-center justify-start"
                                    key={participant[2]}
                                >
                                    <div className="flex-shrink-0 ml-2">
                                        <img
                                            className="h-6 w-6 rounded-md"
                                            src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${participant[1]}.png`}
                                            alt="img champion"
                                        />
                                    </div>
                                    <p className="text-xl text-gray-50">
                                        {participant[0]}
                                    </p>
                                </li>
                            );
                        })
                    ) : (
                        <p>Chargement ...</p>
                    )}
                </ol>
            </div>
        </div>
    );
}

export default team;
