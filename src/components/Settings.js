import React, { Component } from 'react';
import '../styles/Settings.css';

class Settings extends Component {
  state = {
    hangTime: 0,
    restTime: 0,
    breakTime: 0,
    hangsPerSet: 0,
    totalSets: 0
  };

  componentDidMount() {
    const { initSettings } = this.props;
    this.setState({
      ...initSettings
    });
  }

  changeSettings = (e, setting) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    e.target.value = newValue;
    this.setState({
      [setting]: newValue
    });
  };

  resetSettings = () => {
    const { initSettings } = this.props;
    this.setState({
      ...initSettings
    });
  };

  formatTime = sec => {
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

  formatSeconds = e => {
    if (e.target.value) {
      e.target.value *= 1;
    } else {
      e.target.value = 0;
    }
  };

  render() {
    const { hangTime, restTime, breakTime, hangsPerSet, totalSets } = this.state;
    const { initSettings, updateSettings } = this.props;

    return (
      <div id="settings" className="modal">
        <div className="modal-content">
          <h4>Settings</h4>
          <div className="row">
            <div className="input-field col s4">
              <input
                type="number"
                className="center"
                min="0"
                value={hangTime}
                onChange={e => this.changeSettings(e, 'hangTime')}
              />
              <span className="helper-text center" data-error="wrong" data-success="right">
                {'Hang Time'}
              </span>
            </div>
            <div className="input-field col s4">
              <input
                type="number"
                className="center"
                min="0"
                value={restTime}
                onChange={e => this.changeSettings(e, 'restTime')}
              />
              <span className="helper-text center" data-error="wrong" data-success="right">
                {'Rest Time'}
              </span>
            </div>
            <div className="input-field col s4">
              <input
                type="number"
                className="center"
                min="0"
                value={breakTime}
                onChange={e => this.changeSettings(e, 'breakTime')}
              />
              <span className="helper-text center" data-error="wrong" data-success="right">
                {'Break Time'}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                type="number"
                className="center"
                min="0"
                value={hangsPerSet}
                onChange={e => this.changeSettings(e, 'hangsPerSet')}
              />
              <span className="helper-text center" data-error="wrong" data-success="right">
                {'Hangs Per Set'}
              </span>
            </div>
            <div className="input-field col s6">
              <input
                type="number"
                className="center"
                min="0"
                value={totalSets}
                onChange={e => this.changeSettings(e, 'totalSets')}
              />
              <span className="helper-text center" data-error="wrong" data-success="right">
                {'Total Sets'}
              </span>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div
            className="modal-close waves-effect waves-green btn-flat"
            onKeyDown={() => {
              updateSettings(this.state);
            }}
            onClick={() => {
              updateSettings(this.state);
            }}
            role="button"
            tabIndex="0"
          >
            {'Save'}
          </div>
          <div
            className="modal-close waves-effect waves-green btn-flat"
            onKeyDown={() => {
              this.resetSettings(initSettings);
            }}
            onClick={() => {
              this.resetSettings(initSettings);
            }}
            role="button"
            tabIndex="0"
          >
            {'Cancel'}
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
