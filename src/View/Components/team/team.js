import React from "react";
import "./team.css";

function team(props) {
  const { team1, team2 } = props;

  return (
    <div className="container-main-teams flex">
      <div className="container-teams-map flex flex-col">
        <h2 className="font-bold text-blue-500">Team Blue</h2>
        <ol className="container-names flex-col p-4 bg-gray-800 rounded-xl space-y-2">
          {team1 !== null ? (
            team1.map((participant) => {
              return (
                <li
                  className="flex space-x-2 items-center justify-start"
                  key={participant[2]}
                >
                  <div className="flex-shrink-0 w-max">
                    <img
                      className="img-team rounded-full"
                      src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${participant[1]}.png`}
                      alt="img champion"
                    />
                  </div>
                  <p className="text-blue-500 font-medium">
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
      <div className="container-teams-map flex flex-col">
        <h2 className="font-bold text-red-500">Team Red</h2>
        <ol className="flex-col p-4 bg-gray-800 rounded-xl space-y-2">
          {team2 !== null ? (
            team2.map((participant) => {
              return (
                <li
                  className="flex space-x-2 items-center justify-start"
                  key={participant[2]}
                >
                  <div className="flex-shrink-0 w-max">
                    <img
                      className="img-team rounded-full"
                      src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${participant[1]}.png`}
                      alt="img champion"
                    />
                  </div>
                  <p className="text-red-500 font-medium">
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
