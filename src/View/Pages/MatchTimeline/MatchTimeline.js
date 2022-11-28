import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import "./MatchTimeline.css";
import Map from "../../Components/Map/Map";
import Team from "../../Components/team/team";
import StatMatch from "../../Components/statMatch/StatMatch";

function MatchTimeline() {
    const { matchId } = useParams(null);
    const location = useLocation();

    const [team1, setTeam1] = useState(null);
    const [team2, setTeam2] = useState(null);
    const [matchTimeline, setMatchTimeline] = useState(null);
    const [participants, setParticipants] = useState(null);
    const [frames, setFrames] = useState(null);
    const [timeEnd, setTimeEnd] = useState(null);

    /*******************************************************************
                               LOG OF STATE
        ****************************************************************/

    // console.log("matchId", matchId);
    console.log("matchTimeline", matchTimeline);
    // console.log("team1", team1);
    // console.log("team2", team2);
    console.log("timeEnd", timeEnd);

    /*******************************************************************
                                USEEFFECT 
        ****************************************************************/

       // récupération des state passé par le Link :
    useEffect(() => {
        setTeam1(location.state.team1);
        setTeam2(location.state.team2);
    }, []);

    // récupération de la timeline du match :
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/getTimelineMatch/${matchId}`)
            .then((response) => {
                setMatchTimeline(response.data.timelineMatch.info.frames);
                setParticipants(response.data.timelineMatch.info.participants);
                setFrames(response.data.timelineMatch.info.frames);
                setTimeEnd(response.data.timelineMatch.info.frames[16].timestamp);
            });
    }, [matchId]);

    // useEffect de récupération des participants du match
    useEffect(() => {
        if (participants !== null) {
            participants.map((participant) => {
                // console.log(participant);
            });
        }
    }, [matchTimeline]);

    /*******************************************************************
                                RENDER 
        ****************************************************************/
    return (
        <div>
            <div className="flex flex-row h-screen w-full bg-rose-900">
                <Map height={750} width={750} gameTime={timeEnd} />
                <div className="flex flex-col w-full">
                    <Team team1={team1} team2={team2} />
                    <StatMatch frames={frames} />
                </div>
            </div>
        </div>
    );
}

export default MatchTimeline;
