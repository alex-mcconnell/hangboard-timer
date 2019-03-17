import React from 'react';
import '../styles/Timer.css';

const Timer = ({ currentTime }) => {
  const formatTime = sec => {
    let minutes = Math.floor(sec / 60);
    let seconds = sec - minutes * 60;

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  };

  return (
    <h1 className="center blue-grey-text text-darken-2" id="timer">
      {formatTime(currentTime)}
    </h1>
  );
};

export default Timer;
