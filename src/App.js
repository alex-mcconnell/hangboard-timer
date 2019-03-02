import React, { Component } from 'react';
import NoSleep from 'nosleep.js';

import Navbar from './components/Navbar';
import Timer from './components/Timer';
import TimerControls from './components/TimerControls';
import Stats from './components/Stats';
import Settings from './components/Settings';

class App extends Component {
  state = {
    settings: {
      hangTime: 10,
      restTime: 5,
      breakTime: 30,

      hangsPerSet: 6,
      totalSets: 2
    },
    currentTimeType: null,
    currentTime: 0,
    currentHang: 0,
    currentSet: 0,
    interval: null,
    totalElapsedTime: 0
  };

  noSleep = new NoSleep();

  toggleTimer = () => {
    const { interval } = this.state;

    if (interval) {
      this.setState({
        interval: clearInterval(interval)
      });
      this.noSleep.disable();
    } else {
      this.setState({
        interval: setInterval(this.decrementTime, 1000)
      });
      this.noSleep.enable();
    }
  };

  decrementTime = () => {
    const { currentTime, totalElapsedTime } = this.state;

    this.setState({
      currentTime: currentTime - 1,
      totalElapsedTime: totalElapsedTime + 1
    });

    this.toggleTimeType();
  };

  resetTimer = () => {
    this.setState({
      currentTimeType: null,
      currentTime: 0,
      currentHang: 0,
      currentSet: 0,
      totalElapsedTime: 0
    });
    this.toggleTimer();
  };

  toggleTimeType = () => {
    const { currentTimeType, currentTime, currentHang, currentSet, settings } = this.state;

    // Setup timer when first starting
    if (currentTimeType === null) {
      this.setState({
        currentTimeType: 'rest',
        currentHang: 0,
        currentSet: 1,
        currentTime: settings.restTime,
        totalElapsedTime: 0
      });
    }

    if (currentTime === 0 && currentSet <= settings.totalSets) {
      // Rest --> Hang
      if (currentTimeType === 'rest' && currentHang < settings.hangsPerSet) {
        this.setState({
          currentTime: settings.hangTime,
          currentTimeType: 'hang',
          currentHang: currentHang + 1
        });
        // Hang --> Rest
      } else if (currentTimeType === 'hang' && currentHang < settings.hangsPerSet) {
        this.setState({
          currentTime: settings.restTime,
          currentTimeType: 'rest'
        });
        // Hang --> Break
      } else if (
        currentTimeType === 'hang' &&
        currentHang === settings.hangsPerSet &&
        currentSet < settings.totalSets
      ) {
        this.setState({
          currentTime: settings.breakTime,
          currentTimeType: 'break',
          currentHang: 0
        });
        // Break --> Rest
      } else if (currentTimeType === 'break' && currentSet < settings.totalSets) {
        this.setState({
          currentTime: settings.restTime,
          currentTimeType: 'rest',
          currentHang: 0,
          currentSet: currentSet + 1
        });
      } else {
        this.resetTimer();
      }
    }
  };

  updateSettings = settings => {
    this.setState({
      settings
    });
  };

  render() {
    const { currentTime, interval, settings } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Settings updateSettings={this.updateSettings} initSettings={settings} />
        <Timer currentTime={currentTime} />
        <TimerControls isRunning={interval} toggleTimer={this.toggleTimer} />
        <Stats stats={this.state} />
      </div>
    );
  }
}

export default App;
