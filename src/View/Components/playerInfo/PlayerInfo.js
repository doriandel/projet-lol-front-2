import React from "react";
import { useEffect, useState } from "react";

function PlayerInfo(props) {
    const { summonerDetails } = props;
    const [sumDetails, setSumDetails] = useState(null);
    const [revisionDate, setRevisionDate] = useState(null);

    useEffect(() => {
        if (summonerDetails !== null) {
            setSumDetails(summonerDetails.summonnersDetail);
            setRevisionDate( new Date(
                summonerDetails.summonnersDetail.revisionDate
            ).toLocaleDateString("fr-FR"));
        }
    }, [summonerDetails, revisionDate]);

    function renderPlayerInfo() {
        if (sumDetails !== null) {
            return (
                <div className="flex">
                    {/* avatar du joeur et son niveau : */}
                    <div className="flex h-[200px] w-1/6 items-center justify-center">
                        <div className="relative p-0 m-4 flex flex-wrap w-32 h-32 content-center shrink-0">
                            <img
                                className="relative rounded-[20px] border-4 border-red-600 "
                                src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/profileicon/${sumDetails.profileIconId}.png`}
                                alt="profileIcon"
                            />
                            <p className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 bg-slate-100 rounded-md px-1 m-0 border-2 border-amber-400">
                                <b className="text-red-500">
                                    {sumDetails.summonerLevel}
                                </b>
                            </p>
                        </div>
                    </div>

                    {/* information du joueur : */}
                    <div className="flex flex-col h-[200px] columns-2 w-5/6 items-center justify-around p-4">
                        <h2 className="flex w-full bg-red-800 text-amber-400 p-[3px] rounded-[10px] border-2 border-amber-400">
                            <b className="mr-2 text-cyan-600">Nom : </b> {sumDetails.name}
                        </h2>
                        <p className="flex w-full bg-red-800 text-amber-400 p-[3px] rounded-[10px] border-2 border-amber-400">
                            <b className="mr-2 text-cyan-600">Date de mise a jour : </b>
                            {revisionDate}
                        </p>

                        <h2 className="flex w-full bg-red-800 text-amber-400 p-[3px] rounded-[10px] border-2 border-amber-400">
                            <b className="mr-2 text-cyan-600">AccountId : </b> {sumDetails.accountId}
                        </h2>
                        <p className="flex w-full bg-red-800 text-amber-400 p-[3px] rounded-[10px] border-2 border-amber-400">
                            <b className="mr-2 text-cyan-600">Puuid : </b> {sumDetails.puuid}
                        </p>
                    </div>
                </div>
            );
        } else {
            return <div className="flex w-full">Chargement ...</div>;
        }
    }

    /*******************************************************************
                                RENDER
        ****************************************************************/
    return renderPlayerInfo();
}

export default PlayerInfo;
