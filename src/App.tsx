import React, { useState } from 'react';
import StopWatch from './StopWatch';
import StopWatchButton from './StopWatchButton';

export default function App() {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);

  const handleStart = () => {
    console.log('Start');
    // TODO: Implement start functionality
  };

  const handleStop = () => {
    console.log('Stop');
    // TODO: Implement stop functionality
  };

  const handleReset = () => {
    console.log('Reset');
    // TODO: Implement reset functionality
  };

  const handleLap = () => {
    console.log('Lap');
    // TODO: Implement lap functionality
  };

  return (
    <div>
      <StopWatch time={time} laps={laps} />
      <StopWatchButton label="Start" onClick={handleStart} />
      <StopWatchButton label="Stop" onClick={handleStop} />
      <StopWatchButton label="Reset" onClick={handleReset} />
      <StopWatchButton label="Lap" onClick={handleLap} />
    </div>
  );
}