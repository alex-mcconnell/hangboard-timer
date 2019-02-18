import React, { Component } from 'react';

class Settings extends Component {
  state = {
    hangTime: 10,
    restTime: 5,
    breakTime: 30,

    hangsPerSet: 6,
    totalSets: 2,
  }

  changeSettings = (e, setting) => {
    let newValue = (parseInt(e.target.value) || 0)
    e.target.value = newValue;
    this.setState({
      [setting]: newValue,
    })
  }

  formatTime(sec) {
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

  formatSeconds(e) {
    if (e.target.value) {
      e.target.value *= 1
    } else {
      e.target.value = 0;
    }
  }

  render() {
    return (
      <div id="settings" className="modal">
        <div className="modal-content">
          <h4>Settings</h4>
          <div className="row">
            <div className="input-field col s6">
              <input type="number" className="center" min="0" value={this.state.hangTime} onChange={(e) => this.changeSettings(e, 'hangTime')} />
              <span className="helper-text center" data-error="wrong" data-success="right">Hang Time</span>
            </div>
            <div className="input-field col s6">
              <input type="number" className="center" min="0" value={this.state.restTime} onChange={(e) => this.changeSettings(e, 'restTime')} />
              <span className="helper-text center" data-error="wrong" data-success="right">Rest Time</span>
            </div>
            <div className="input-field col s6">
              <input type="number" className="center" min="0" value={this.state.breakTime} onChange={(e) => this.changeSettings(e, 'breakTime')} />
              <span className="helper-text center" data-error="wrong" data-success="right">Break Time</span>
            </div>
            <div className="input-field col s6">
              <input type="number" className="center" min="0" value={this.state.hangsPerSet} onChange={(e) => this.changeSettings(e, 'hangsPerSet')} />
              <span className="helper-text center" data-error="wrong" data-success="right">Hangs Per Set</span>
            </div>
            <div className="input-field col s6">
              <input type="number" className="center" min="0" value={this.state.totalSets} onChange={(e) => this.changeSettings(e, 'totalSets')} />
              <span className="helper-text center" data-error="wrong" data-success="right">Total Sets</span>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="modal-close waves-effect waves-green btn-flat" onClick={(e) => {this.props.updateSettings(this.state)}}>Save</div>
          <div className="modal-close waves-effect waves-green btn-flat">Cancel</div>
        </div>
      </div>
    );
  }
}

export default Settings;