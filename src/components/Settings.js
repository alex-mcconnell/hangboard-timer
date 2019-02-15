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
    this.setState({
      [setting]: e.target.value,
    })
  }

  render() {
    return (
      <div id="settings" className="modal">
        <div className="modal-content container">
          <h4>Settings</h4>
          <div className="row">
            <div className="col s8 m10">
              <form>
                <p className="range-field">
                  <input type="range" min="0" max="10" value={this.state.hangTime} onChange={(e) => this.changeSettings(e, 'hangTime')}/>
                </p>
              </form>                 
            </div>
            <div className="input-field col s4 m2">
              <input type="number" min="0" max="10" value={this.state.hangTime} onChange={(e) => this.changeSettings(e, 'hangTime')}/>
              <span className="helper-text center" data-error="wrong" data-success="right">Hang</span>
            </div>         
          </div>

        </div>
        <div className="modal-footer">
          <div className="modal-close waves-effect waves-green btn-flat">Back</div>
        </div>
      </div>
    );
  }
}

export default Settings;