import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlayerInfo from "../../Components/playerInfo/PlayerInfo";
import ListMatch from "../../Components/ListMatch/ListMatch";

function SummonerInfo(props) {

    const { summonerName } = useParams("");
    const [summonerDetail, setSummonerDetail] = useState(null);
    const [matchList, setMatchList] = useState(null);
    const [puuid, setPuuid] = useState(null);

    useEffect(() => {
        if (summonerName !== "") {
            axios
                .get(`http://localhost:8000/api/getSummoner/${summonerName}`)
                .then((response) => {
                    setSummonerDetail(response.data);
                    setPuuid(response.data.summonnersDetail.puuid);
                });
        }
    }, [summonerName]);

    useEffect(() => {
        if (puuid !== "") {
            axios
                .get(`http://localhost:8000/api/getMatches/${puuid}`)
                .then((response) => setMatchList(response.data.matchesList));
            // console.log("Matchlist : ", matchList);
        }
    }, [puuid]);

    /*******************************************************************
                                RENDER
        ****************************************************************/
    return (
        <>
            <h1 className="text-xl">Information du joueur rechercher :</h1>
            <PlayerInfo summonerDetails={summonerDetail} />
            {/* <ListMatch matchList={matchList} /> */}
        </>
    );
}

export default SummonerInfo;
