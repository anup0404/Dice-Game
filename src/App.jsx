import React, { useState } from 'react'
import StartGame from './Components/StartGame'
import GamePlay from './Components/GamePlay';




function App() {

 const[isGameStarted , setIsGameStarted]= useState(false);
  function togleGame(){
    setIsGameStarted((value)=> !value);
  }

  return (
<>
   {isGameStarted ? <GamePlay/>:<StartGame togle={togleGame}/>}
    </>
   
  );
}

export default App