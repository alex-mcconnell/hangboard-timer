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
    this.resetSettings();
  }

  resetSettings = () => {
    const { initSettings } = this.props;
    this.setState({
      ...initSettings
    });
  };

  changeSettings = (e, setting) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    e.target.value = newValue;
    this.setState({
      [setting]: newValue
    });
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
    const { updateSettings } = this.props;

    return (
      <div id="settings" className="modal grey lighten-4">
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
        <div className="modal-footer grey lighten-4">
          <div
            className="modal-close waves-effect waves-green btn-flat"
            onKeyDown={() => {
              this.resetSettings();
            }}
            onClick={() => {
              this.resetSettings();
            }}
            role="button"
            tabIndex="0"
          >
            {'Cancel'}
          </div>
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
        </div>
      </div>
    );
  }
}

export default Settings;
