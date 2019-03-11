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

  resetSet = () => {
    const { settings } = this.state;

    this.setState({
      currentTimeType: 'rest',
      currentHang: 0,
      currentTime: settings.restTime
    });
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

  calculateAdjustment = action => {
    const { currentTime, currentTimeType, currentHang, settings } = this.state;

    const isRest = currentTimeType === 'rest';
    const isHang = currentTimeType === 'hang';
    const hangMultiplier = settings.hangsPerSet - currentHang;

    let adjustment = 0;

    switch (action) {
      case 'skip':
        adjustment += currentTime;
        if (isRest) {
          adjustment +=
            hangMultiplier * settings.hangTime + (hangMultiplier - 1) * settings.restTime;
        } else if (isHang) {
          adjustment += hangMultiplier * settings.hangTime + hangMultiplier * settings.restTime;
        }
        break;
      case 'previous':
        if (isRest) {
          adjustment -=
            currentHang * settings.hangTime +
            currentHang * settings.restTime +
            settings.restTime -
            currentTime;
        } else if (isHang) {
          adjustment -=
            (hangMultiplier - 1) * settings.hangTime +
            hangMultiplier * settings.restTime +
            settings.hangTime -
            currentTime;
        } else {
          adjustment -= settings.breakTime - currentTime;
        }
        break;

      default:
        break;
    }

    return adjustment;
  };

  adjustTotalTimeElapsed = adjustment => {
    const { totalElapsedTime } = this.state;

    this.setState({
      totalElapsedTime: totalElapsedTime + adjustment
    });
  };

  skip = () => {
    const { currentTimeType, currentSet, settings, noSleep } = this.state;

    const isInitialized = currentTimeType;

    const isRest = currentTimeType === 'rest';
    const isHang = currentTimeType === 'hang';
    const isBreak = currentTimeType === 'break';

    const setsRemaining = currentSet < settings.totalSets;

    if (isInitialized) {
      this.adjustTotalTimeElapsed(this.calculateAdjustment('skip'));
      if ((isRest || isHang) && setsRemaining) {
        this.startBreak();
      } else if (isBreak) {
        this.startSet();
      } else if ((isRest || isHang) && !setsRemaining) {
        this.playPause();
        this.resetTimer();
        noSleep.disable();
      }
    }
  };

  previous = () => {
    const { currentTimeType, currentSet, noSleep } = this.state;

    const isInitialized = currentTimeType;

    const isRest = currentTimeType === 'rest';
    const isHang = currentTimeType === 'hang';
    const isBreak = currentTimeType === 'break';

    const previousSets = currentSet > 1;

    if (isInitialized) {
      this.adjustTotalTimeElapsed(this.calculateAdjustment('previous'));
      if ((isRest || isHang) && previousSets) {
        this.resetSet();
      } else if (isBreak) {
        this.startBreak();
      } else if ((isRest || isHang) && !previousSets) {
        this.playPause();
        this.resetTimer();
        noSleep.disable();
      }
    }
  };

  updateSettings = settings => {
    this.setState({
      settings
    });
  };

  render() {
    const { currentTime, interval, currentTimeType, settings } = this.state;
    return (
      <div className="App">
        <Navbar currentTimeType={currentTimeType} />
        <Settings updateSettings={this.updateSettings} initSettings={settings} />
        <Timer currentTime={currentTime} />
        <TimerControls
          isRunning={interval}
          previous={this.previous}
          playPause={this.playPause}
          skip={this.skip}
        />
        <Stats stats={this.state} />
      </div>
    );
  }
}

export default App;
