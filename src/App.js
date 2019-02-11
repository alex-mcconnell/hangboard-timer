import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Timer from './components/Timer';
import TimerControls from './components/TimerControls';

class App extends Component {
  state = {
    settings: {
      hangTime: 5,
      restTime: 3,
      breakTime: 5,

      hangsPerSet: 2,
      totalSets: 2,
    },
    currentTimeType: null,
    currentTime: 0,
    currentHang: 0,
    currentSet: 0,
    interval: null,
  }

  toggleTimer = () => {
    if (this.state.interval) {
      this.setState({
        interval: clearInterval(this.state.interval)
      });
    } else {
      this.setState({
        interval: setInterval(this.decrementTime, 1000)
      });
    }
  }

  decrementTime = () => {
    this.setState({
      currentTime: this.state.currentTime - 1
    });
    this.toggleTimeType();
  }

  resetTimer = () => {
    this.setState({
      currentTimeType: null,
      currentTime: 0,
      currentHang: 0,
      currentSet: 0,
    });
    this.toggleTimer();  
  }

  toggleTimeType = () => {

    // Setup timer when first starting
    if (this.state.currentTimeType === null) {
      this.setState({
        currentTimeType: 'rest',
        currentHang: 0,
        currentSet: 1,
        currentTime: this.state.settings.restTime,
      });
    }

    if (this.state.currentTime === 0  && this.state.currentSet <= this.state.settings.totalSets) {
      
      // Rest --> Hang
      if (this.state.currentTimeType === 'rest' && this.state.currentHang < this.state.settings.hangsPerSet) {
        this.setState({
          currentTime: this.state.settings.hangTime,
          currentTimeType: 'hang',
          currentHang: this.state.currentHang + 1,
        });
      // Hang --> Rest
      } else if (this.state.currentTimeType === 'hang' && this.state.currentHang < this.state.settings.hangsPerSet) {
        this.setState({
          currentTime: this.state.settings.restTime,
          currentTimeType: 'rest',
        });
      // Hang --> Break
      } else if (this.state.currentTimeType === 'hang' && this.state.currentHang === this.state.settings.hangsPerSet && this.state.currentSet < this.state.settings.totalSets) {
        this.setState({
          currentTime: this.state.settings.breakTime,
          currentTimeType: 'break',
          currentHang: 0,
        });
        // Break --> Rest
      } else if (this.state.currentTimeType === 'break' && this.state.currentSet < this.state.settings.totalSets) {
        this.setState({
          currentTime: this.state.settings.restTime,
          currentTimeType: 'rest',
          currentHang: 0,
          currentSet: this.state.currentSet + 1,
        });
      } else {
        this.resetTimer();
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Timer currentTime={this.state.currentTime} />
        <TimerControls timer={this.state} toggleTimer={this.toggleTimer} />
      </div>
    );
  }
}

export default App;
