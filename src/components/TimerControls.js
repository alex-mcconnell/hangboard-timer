import React, { Component } from 'react';

class TimerControls extends Component {
  render() {
    const playPauseButtonIcon = this.props.timer.interval ? 'pause' : 'play_arrow'

    return (
      <div className="container">
        <div className="row">
          <div className="col s6 push-s3 waves-effect waves-light btn-large" onClick={this.props.toggleTimer}><i className="material-icons">{ playPauseButtonIcon }</i></div>
        </div>
      </div>
    )
  }
}

export default TimerControls;