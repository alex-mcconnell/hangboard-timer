import React from 'react';

const TimerControls = ({ timer, toggleTimer }) =>  {
    const playPauseButtonIcon = timer.interval ? 'pause' : 'play_arrow'
    const color = timer.interval ? 'red' : 'green'

    return (
      <div className="container">
        <div className="row">
          <div className={ 'col s4 push-s4 waves-effect waves-light btn-large ' + color } onClick={ toggleTimer }><i className="material-icons">{ playPauseButtonIcon }</i></div>
        </div>
      </div>
    )
}

export default TimerControls;