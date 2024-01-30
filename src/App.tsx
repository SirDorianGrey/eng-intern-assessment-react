import React from 'react';
import StopWatch from './StopWatch';
import StopWatchButton from './StopWatchButton';
import useStopWatch from './useStopWatch';
import './App.css';

export default function App() {
    const { time, laps, handleStart, handleStop, handleReset, handleLap } = useStopWatch();
  
    // Render the stopwatch
    return (
      <div className="StopWatchContainer">
        <StopWatch time={time} laps={laps} />
        <StopWatchButton label="Start" onClick={handleStart} />
        <StopWatchButton label="Stop" onClick={handleStop} />
        <StopWatchButton label="Reset" onClick={handleReset} />
        <StopWatchButton label="Lap" onClick={handleLap} />
      </div>
    );
  }