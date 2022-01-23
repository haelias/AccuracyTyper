import './App.css';
// import React, {useState, useEffect} from 'react'
import useGameLogic from './Game';
import React, {useState} from 'react';

function App() {
  const [popup, setPopup] = useState(true)
//onChange = {(e) => setQuery(e.target.value)}
  const [textBoxRef, handleChange,text,timeRemaining,startGame,isTimeRunning,wordCount,Test2, getWords, ShowWords, endGame] = useGameLogic()


  const PopWindow=() => {
    return (
      <div className='popup' onClick={() => {setPopup(false)}} style = {{cursor:'pointer'}}>
      <p>Press start to play. <br/>You will automatically focus on the input field.<br/>If you get 100 words, special price for u<br/><span>glhf (click to close)</span></p>
    </div>
    )
  }


  return (
    <div className="App">
            {/* <h1>Fast fingies</h1>  stupid*/}
            {/* <ShowWords/>         stupider*/}
            <div className='typetest'>
            <Test2/>
            <input ref={textBoxRef} onChange={handleChange} value={text} disabled={!isTimeRunning}/>
            </div>
            <h2>{timeRemaining}</h2>
            <h1 className='typeword'>Word count: {wordCount}</h1>
            <div className='buttoz'>
            <button onClick={startGame} disabled={isTimeRunning}>Start</button>
            <button onClick={endGame} disabled={!isTimeRunning}>End</button>
            </div>
           {popup ? <PopWindow /> : null}
            {/* <div className='popup'>
              <p>Press start to play. <br/>You will automatically focus on the input field.<br/>(click on me to get rid of me) <br/>glhf </p>
            </div> */}
            {/* <ShowWords/> */}
            {/* <Test2/> */}
    </div>
  );
}

export default App;
