import { logDOM } from "@testing-library/react";
import React from "react";

function ListMatch(props) {
    const { matchList } = props;
    console.log("Props ListMatch : ", matchList);

    /*******************************************************************
                                RENDER
        ****************************************************************/
    return (
        // {console.log("props : ", matchList)}
        <div>
            <h2>Liste des 10 derniers match :</h2>
            <ul>
                {/* {matchList.map((match, key) => {
                    return (
                        <li key={key}>
                            <p>GameId : {match.gameId}</p>
                        </li>
                    );
                })} */}
            </ul>
        </div>
        // <li key={props.metadata.matchId} className="flex items-stretch">
        //         {console.log("win : ", win)}
        //         <button
        //             href="#"
        //             /*{matchs.href}*/ className={
        //                 "block " +
        //                 (win === true
        //                     ? "bg-blue-900 hover:bg-blue-800"
        //                     : "bg-red-900 hover:bg-red-800") +
        //                 " w-full"
        //             }
        //         >
        //             <div className="flex items-center px-4 py-4 sm:px-6 justify-between">
        //                 <div className="flex space-x-8 items-center">
        //                     <div className="flex space-x-5 items-center">
        //                         <div>
        //                             <p className="truncate text-sm font-medium text-gray-50">
        //                                 {console.log(player.championName)}
        //                                 {player.championName}
        //                             </p>
        //                         </div>
        //                         <div className="flex-shrink-0 ">
        //                             <img
        //                                 className="h-16 w-16 rounded-full"
        //                                 src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${player.championName}.png`}
        //                                 alt=""
        //                             />
        //                         </div>
        //                         <div className="flex-col space-y-1">
        //                             <div className="flex-shrink-0">
        //                                 <img
        //                                     className="h-7 w-7 rounded-md"
        //                                     src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/${summoner1}.png`}
        //                                     alt=""
        //                                 />
        //                             </div>
        //                             <div className="flex-shrink-0">
        //                                 <img
        //                                     className="h-7 w-7 rounded-md"
        //                                     src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/${summoner2}.png`}
        //                                     alt=""
        //                                 />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="flex space-x-1">
        //                         {playerItems.map((item, i) => {
        //                             return (
        //                                 <div className="flex-shrink-0" key={i}>
        //                                     <img
        //                                         className="h-7 w-7 rounded-md"
        //                                         src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/${item}.png`}
        //                                         alt=""
        //                                     />
        //                                 </div>
        //                             );
        //                         })}
        //                     </div>
        //                 </div>
        //                 <div>
        //                     <p className="text-2xl text-gray-300 font-bold">
        //                         {player.kills}{" "}
        //                         <span className="text-gray-600">/</span>{" "}
        //                         {player.deaths}{" "}
        //                         <span className="text-gray-600">/</span>{" "}
        //                         {player.assists}
        //                     </p>
        //                 </div>
        //                 <div className="flex gap-4">
        //                     <div className="flex-col space-y-2">
        //                         {team1.map((player, i) => (
        //                             <div
        //                                 className="flex space-x-1 items-center"
        //                                 key={i}
        //                             >
        //                                 <div className="flex-shrink-0">
        //                                     <img
        //                                         className="h-4 w-4 rounded-md"
        //                                         src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${player.championName}.png`}
        //                                         alt=""
        //                                     />
        //                                 </div>
        //                                 <p className="text-xs text-gray-50">
        //                                     {player.summonerName}
        //                                 </p>
        //                             </div>
        //                         ))}
        //                     </div>
        //                     <div className="flex-col space-y-2">
        //                         {team2.map((player, i) => (
        //                             <div
        //                                 className="flex space-x-1 items-center"
        //                                 key={i}
        //                             >
        //                                 <div className="flex-shrink-0">
        //                                     <img
        //                                         className="h-4 w-4 rounded-md"
        //                                         src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${player.championName}.png`}
        //                                         alt=""
        //                                     />
        //                                 </div>
        //                                 <p className="text-xs text-gray-50">
        //                                     {player.summonerName}
        //                                 </p>
        //                             </div>
        //                         ))}
        //                     </div>
        //                 </div>
        //             </div>
        //         </button>
        //     </li>
    );
}

export default ListMatch;
