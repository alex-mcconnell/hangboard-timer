import React from 'react';

const TimerControls = ({ isRunning, previous, playPause, skip }) => {
  const color = isRunning ? 'red' : 'green';

  return (
    <div className="container">
      <div className="row">
        <div
          className={`col s3 waves-effect waves-light btn-large ${color}`}
          onClick={previous}
          onKeyDown={previous}
          role="button"
          tabIndex="0"
        >
          <i className="material-icons">skip_previous</i>
        </div>
        <div className="col s6 row">
          <div
            className={`col s12 waves-effect waves-light btn-large ${color}`}
            onClick={playPause}
            onKeyDown={playPause}
            role="button"
            tabIndex="0"
          >
            <i className="material-icons">{isRunning ? 'pause' : 'play_arrow'}</i>
          </div>
        </div>
        <div
          className={`col s3 waves-effect waves-light btn-large ${color}`}
          onClick={skip}
          onKeyDown={skip}
          role="button"
          tabIndex="0"
        >
          <i className="material-icons">skip_next</i>
        </div>
      </div>
    </div>
  );
};

export default TimerControls;
