import React from "react";
import { useEffect, useState } from "react";

function PlayerInfo(props) {
    const { summonerDetails } = props;
    const [sumDetails, setSumDetails] = useState(null);

    useEffect(() => {
        if (summonerDetails !== null) {
            setSumDetails(summonerDetails.summonnersDetail);
        }
    }, [summonerDetails]);

    function renderPlayerInfo() {
        if (sumDetails !== null) {
            return (
                <div>
                    <br />
                    <h2><b>Nom :</b> {sumDetails.name}</h2>
                    <h2><b>AccountId :</b> {sumDetails.accountId}</h2>
                    <p><b>ProfileIconId :</b> {sumDetails.profileIconId}</p>
                    <p><b>Summoner level :</b> {sumDetails.summonerLevel}</p>
                    <p><b>Date de mise a jour :</b> {sumDetails.revisionDate}</p>
                    <p><b>Puuid :</b> {sumDetails.puuid}</p>
                </div>
            );
        } else {
            return <div>Chargement</div>;
        }
    }
    /*******************************************************************
                                RENDER
        ****************************************************************/
    return renderPlayerInfo();
}

export default PlayerInfo;
