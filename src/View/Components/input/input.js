import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./input.css";

function Input() {
  const [summonerNameInput, setSummonerNameInput] = useState("");
  let navigate = useNavigate();

  /*******************************************************************
            Récupération de la valeur de l'input
        ****************************************************************/
  function handleChange(e) {
    e.preventDefault();
    setSummonerNameInput(e.target.value);
    return;
  }

  /*******************************************************************
                                RENDER
        ****************************************************************/
  return (
    <form
      className="bg-gray-900 flex w-48"
      onSubmit={() => {
        navigate(`/summonerInfo/${summonerNameInput}`);
      }}
      method="GET"
    >
      <input
        id="inputhome"
        className="w-6/12 h-10 rounded-tl-[15px] rounded-tr-[15px] m-2 p-2"
        type="text"
        name="summonerName"
        placeholder="Entrez un nom de joueur"
        value={summonerNameInput}
        onChange={(e) => handleChange(e)}
      />
      <button
        type="submit"
        className="w-6/12 bg-amber-300 rounded-br-[15px] rounded-bl-[15px] m-2 p-2"
      >
        Recherche
      </button>
    </form>
  );
}

export default Input;
