import React from 'react';

const TimerControls = ({ isRunning, toggleTimer }) => {
  const color = isRunning ? 'red' : 'green';

  return (
    <div className="container">
      <div className="row">
        <div className={`col s3 waves-effect waves-light btn-large ${color}`}>
          <i className="material-icons">skip_previous</i>
        </div>
        <div className="col s6 row">
          <div
            className={`col s12 waves-effect waves-light btn-large ${color}`}
            onClick={toggleTimer}
            onKeyDown={toggleTimer}
            role="button"
            tabIndex="0"
          >
            <i className="material-icons">{isRunning ? 'pause' : 'play_arrow'}</i>
          </div>
        </div>
        <div className={`col s3 waves-effect waves-light btn-large ${color}`}>
          <i className="material-icons">skip_next</i>
        </div>
      </div>
    </div>
  );
};

export default TimerControls;
