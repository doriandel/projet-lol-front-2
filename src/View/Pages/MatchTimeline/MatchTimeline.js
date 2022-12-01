import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./MatchTimeline.css";
import Map from "../../Components/Map/Map";
import Team from "../../Components/team/team";
import StatMatch from "../../Components/statMatch/StatMatch";

function MatchTimeline() {
  const { matchId } = useParams(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [summonerName, setSummonerName] = useState(null);

  // const [matchTimeline, setMatchTimeline] = useState(null);
  // const [participants, setParticipants] = useState(null);

  const [frames, setFrames] = useState(null);
  const [timeEnd, setTimeEnd] = useState(null);

  /*******************************************************************
                               LOG OF STATE
        ****************************************************************/

  // console.log("matchId", matchId);
  // console.log("matchTimeline", matchTimeline);
  // console.log("team1", team1);
  // console.log("team2", team2);
  // console.log("timeEnd", timeEnd);

  /*******************************************************************
                                USEEFFECT 
        ****************************************************************/

  // récupération des state passé par le Link :
  useEffect(() => {
    setTeam1(location.state.team1);
    setTeam2(location.state.team2);
    setSummonerName(location.state.summonerName);
  }, []);

  // récupération de la timeline du match :
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/getTimelineMatch/${matchId}`)
      .then((response) => {
        // setMatchTimeline(response.data.timelineMatch.info.frames);
        // setParticipants(response.data.timelineMatch.info.participants);
        setFrames(response.data.timelineMatch.info.frames);
        setTimeEnd(
          response.data.timelineMatch.info.frames[
            response.data.timelineMatch.info.frames.length - 1
          ].timestamp
        );
      });
  }, [matchId]);

  /*******************************************************************
                                RENDER 
        ****************************************************************/
  return (
    <div className="h-screen p-6 bg-gray-800 box-border flex flex-col gap-4">
      <div className="container-crb flex items-center gap-2">
        <a
          className="btn bg-gray-900 rounded-lg flex justify-center cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <img className="w-[12px]" src="/icon.svg" alt="" />
        </a>
        <a
          className="link-1 xl:text-xl lg:text-lg font-bold text-gray-500"
          href="/"
        >
          Summoner selection
        </a>
        <div className="sep xl:text-xl lg:text-lg font-bold text-gray-500">
          /
        </div>
        <a
          className="link-1 xl:text-xl lg:text-lg font-bold text-gray-500 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          Match list
        </a>
        <div className="sep xl:text-xl lg:text-lg font-bold text-gray-500">
          /
        </div>
        <a
          className="link-1 xl:text-xl lg:text-lg font-bold text-gray-200"
          href=""
        >
          Match Heat Map
        </a>
      </div>
      <h2 className="text-2xl font-bold text-gray-200 w-full">
        {summonerName}'s Matches
      </h2>
      <div className="flex w-full p-8 rounded-xl bg-gray-900">
        <div>
            <Map gameTime={timeEnd} frames={frames} team1={team1} team2={team2} />
        </div>
        <div className="flex w-full pl-8 gap-4">
          <div className="container-logs overflow-y-scroll p-4 bg-gray-800 rounded-xl w-full h-[730px]">
            <ul>
              <StatMatch frames={frames} team1={team1} team2={team2} />
            </ul>
          </div>
          <Team team1={team1} team2={team2} />
        </div>
      </div>
    </div>
  );
}

export default MatchTimeline;
