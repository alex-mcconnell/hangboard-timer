import React from 'react';
import '../styles/Word.css';

const Timer = ({ currentTimeType, currentHang }) => {
  let theWord = '';

  if (currentTimeType === 'rest' && currentHang === 0) {
    theWord = 'Get Ready';
  } else if (currentTimeType === 'rest' && currentHang > 0) {
    theWord = 'Rest';
  } else if (currentTimeType === 'break') {
    theWord = 'Break';
  } else if (currentTimeType === 'hang') {
    theWord = 'Hang';
  }

  return (
    <div className="section container">
      <h1 className="center blue-grey-text text-darken-2" id="word">
        {theWord}
      </h1>
    </div>
  );
};

export default Timer;
