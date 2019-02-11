import React from 'react';
import '../styles/Timer.css';

const Timer = ({ currentTime }) => {

  function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = sec - (minutes * 60);
  
    if (minutes < 10) {
      minutes = '0' + minutes;
    }   
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return minutes + ':' + seconds; 
  }

  return (
    <div className="container">
      <h1 className="center">{formatTime(currentTime)}</h1>
    </div>
  )
}


export default Timer;