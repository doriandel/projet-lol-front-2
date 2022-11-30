import Input from "../../Components/input/input";
import { React } from "react";
import "./Home.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => { 
    function revealCard(){
      let cards = document.querySelectorAll('.container-tutorial .container-cards .card');
      cards.forEach(function(card){
        if(!card.classList.contains('style-reveal')){
          card.classList.add('style-reveal');
        }
      })
    }
    revealCard();
  });
  /*******************************************************************
                                RENDER
        ****************************************************************/
  return (
    <div className="container-landing bg-gray-800">
      <div className="flex flex-col py-28 items-center">
        <h1 className="text-4xl font-bold text-gray-200 mb-10">Projet LOL</h1>
        <div className="flex flex-col w-full justify-center items-center mb-16">
          <Input />
        </div>
        <div className="container-tutorial w-full">
          <h2 className="text-2xl font-bold text-gray-200 mb-6">How does it work?</h2>
          <div className="container-cards flex justify-between">
            <div className="card flex flex-col items-center w-64 bg-gray-900 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex justify-center text-center items-center text-gray-200 mb-6">1</div>
              <p className="text-gray-200 text-lg mb-6">Enter a pseudo</p>
              <div><img src="/tuto-1.svg" alt="" /></div>
            </div>
            <div className="card flex flex-col items-center w-64 bg-gray-900 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex justify-center text-center items-center text-gray-200 mb-6">2</div>
              <p className="text-gray-200 text-lg mb-6">Consult the matchs</p>
              <div><img src="/tuto-2.svg" alt="" /></div>
            </div>
            <div className="card flex flex-col items-center w-64 bg-gray-900 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex justify-center text-center items-center text-gray-200 mb-6">3</div>
              <p className="text-gray-200 text-lg mb-6 text-center">Access to the match’ heat map!</p>
              <div><img src="/tuto-3.svg" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
