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
      className="bg-gray-900 w-full p-6 rounded-lg border border-gray-700"
      onSubmit={() => {
        navigate(`/summonerInfo/${summonerNameInput}`);
      }}
      method="GET"
    >
      <div class="text-gray-200 text-md pb-2">Pseudo</div>
      <input
        id="inputhome"
        className="rounded-md h-10 bg-gray-800 px-4 w-full border border-gray-700 mb-6"
        type="text"
        name="summonerName"
        placeholder="Entrez un nom de joueur"
        value={summonerNameInput}
        onChange={(e) => handleChange(e)}
      />
      <div className="container-btn flex justify-end">
        <button type="submit" className="flex gap-2 items-center text-gray-200 bg-blue-600 px-4 py-2 rounded-md">
          See the matches
          <img class="w-[12px] rotate-180" src="/icon.svg" alt="" />
        </button>
      </div>
    </form>
  );
}

export default Input;
