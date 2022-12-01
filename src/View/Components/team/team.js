import React from "react";
import "./team.css";

function team(props) {
  const { team1, team2 } = props;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-2 gap-4">
        <h2 className="font-bold text-2xl text-blue-500">Team Blue</h2>
        <ol className="flex-col p-4 bg-gray-800 rounded-xl space-y-2">
          {team1 !== null ? (
            team1.map((participant) => {
              return (
                <li
                  className="flex space-x-2 items-center justify-start"
                  key={participant[2]}
                >
                  <div className="flex-shrink-0 ml-2 w-max">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${participant[1]}.png`}
                      alt="img champion"
                    />
                  </div>
                  <p className="text-xl text-blue-500 font-medium">
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
      <div className="flex flex-col px-2 gap-4">
        <h2 className="font-bold text-2xl text-red-500">Team Red</h2>
        <ol className="flex-col p-4 bg-gray-800 rounded-xl space-y-2">
          {team2 !== null ? (
            team2.map((participant) => {
              return (
                <li
                  className="flex space-x-2 items-center justify-start"
                  key={participant[2]}
                >
                  <div className="flex-shrink-0 ml-2 w-max">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${participant[1]}.png`}
                      alt="img champion"
                    />
                  </div>
                  <p className="text-xl text-red-500 font-medium">
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
