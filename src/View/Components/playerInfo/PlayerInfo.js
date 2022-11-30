import React from "react";
import { useEffect, useState } from "react";
import "./playerInfo.css";

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
                <div className="flex flex-col p-6">
                    <div className="container-crb flex items-center gap-2 pb-8">
                        <a className="btn bg-gray-900 rounded-lg flex justify-center" href="/">
                            <img className="w-[12px]" src="/icon.svg" alt="" />
                        </a>
                        <a className="link-1 xl:text-xl lg:text-lg font-bold text-gray-500" href="/">Summoner selection</a>
                        <div className="sep xl:text-xl lg:text-lg font-bold text-gray-500">/</div>
                        <a className="link-1 xl:text-xl lg:text-lg font-bold text-gray-200" href="">Match list</a>
                    </div>
                    {/* avatar du joeur et son niveau : */}
                    <div className="flex">
                        <div className="flex items-center justify-center">
                            <div className="relative p-0 flex w-32 h-32 content-center shrink-0">
                                <img
                                    className="relative rounded-[20px]"
                                    src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/profileicon/${sumDetails.profileIconId}.png`}
                                    alt="profileIcon"
                                />
                                <p className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 bg-blue-600 rounded-md px-2 m-0">
                                    <span className="text-white">
                                        {sumDetails.summonerLevel}
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* information du joueur : */}
                        <div className="container-infos pl-4 w-full">
                            <h2 className="flex flex-col w-full text-2xl text-gray-200 pb-2">
                                {sumDetails.name}
                            </h2>
                            <p className="flex flex-col w-full text-gray-200 pb-2">
                                <b className="mr-2 text-gray-500">AccountID</b> {sumDetails.accountId}
                            </p>
                            <p className="flex flex-col w-full text-gray-200">
                                <b className="mr-2 text-gray-500">PUUID</b> {sumDetails.puuid}
                            </p>
                        </div>
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
