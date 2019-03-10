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
    totalElapsedTime: 0,
    noSleep: new NoSleep()
  };

  resetTimer = () => {
    this.setState({
      currentTimeType: null,
      currentTime: 0,
      currentHang: 0,
      currentSet: 0,
      totalElapsedTime: 0
    });
  };

  startSet = () => {
    const { currentSet, settings, currentTimeType } = this.state;

    this.setState({
      currentTimeType: 'rest',
      currentSet: currentSet + 1,
      currentHang: 0,
      currentTime: settings.restTime
    });

    // Fixes 1 sec ahead issue when starting timer
    if (!currentTimeType) {
      this.setState({
        totalElapsedTime: 0
      });
    }
  };

  startHang = () => {
    const { currentHang, settings } = this.state;

    this.setState({
      currentTimeType: 'hang',
      currentHang: currentHang + 1,
      currentTime: settings.hangTime
    });
  };

  startRest = () => {
    const { settings } = this.state;

    this.setState({
      currentTimeType: 'rest',
      currentTime: settings.restTime
    });
  };

  startBreak = () => {
    const { settings } = this.state;

    this.setState({
      currentTimeType: 'break',
      currentHang: 0,
      currentTime: settings.breakTime
    });
  };

  toggleTimeType = () => {
    const { currentTimeType, currentTime, currentHang, currentSet, settings, noSleep } = this.state;

    const shouldSwitchTimeType = currentTime === 0 && currentSet <= settings.totalSets;
    const isInitialized = currentTimeType;

    const isRest = currentTimeType === 'rest';
    const isHang = currentTimeType === 'hang';
    const isBreak = currentTimeType === 'break';

    const hangsRemaining = currentHang < settings.hangsPerSet;
    const setsRemaining = currentSet < settings.totalSets;

    if (!isInitialized) {
      this.startSet();
    }

    if (shouldSwitchTimeType) {
      if (isRest && hangsRemaining) {
        this.startHang();
      } else if (isHang && hangsRemaining) {
        this.startRest();
      } else if (isHang && !hangsRemaining && setsRemaining) {
        this.startBreak();
      } else if (isBreak && setsRemaining) {
        this.startSet();
      } else {
        this.playPause();
        this.resetTimer();
        noSleep.disable();
      }
    }
  };

  timerTick = () => {
    const { currentTime, totalElapsedTime } = this.state;

    this.setState({
      currentTime: currentTime - 1,
      totalElapsedTime: totalElapsedTime + 1
    });
  };

  timerIntervalSequence = () => {
    this.timerTick();
    this.toggleTimeType();
  };

  playPause = () => {
    const { interval, noSleep } = this.state;

    if (interval) {
      this.setState({
        interval: clearInterval(interval)
      });
      noSleep.disable();
    } else {
      this.setState({
        interval: setInterval(this.timerIntervalSequence, 1000)
      });
      noSleep.enable();
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
        <TimerControls isRunning={interval} playPause={this.playPause} />
        <Stats stats={this.state} />
      </div>
    );
  }
}

export default App;
