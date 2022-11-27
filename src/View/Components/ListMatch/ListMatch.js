import React from "react";
import MatchDetail from "../MatchDetail/MatchDetail";

function ListMatch(props) {
    const { matchList } = props;

    /*******************************************************************
                                RENDER
        ****************************************************************/
    return (
        <>
            <div className="flex flex-wrap w-full justify-between">
                <h2 className="flex justify-center w-full items-center text-4xl text-yellow-100 bg-sky-800 p-4 rounded-[25px] border-4 border-red-700">
                    Liste des 10 derniers match :
                </h2>
                {matchList !== null ? (
                    matchList.map((match, index) => {
                        return (
                                <MatchDetail className="flex flex-wrap w-full justify-center items-center p-2" key={index} match={match} />
                        );
                    })
                ) : (
                    <p>Chargement</p>
                )}
            </div>
        </>
    );
}

export default ListMatch;
