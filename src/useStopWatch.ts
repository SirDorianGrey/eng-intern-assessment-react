import { useState } from 'react';

export default function useStopWatch() {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const [startTime, setStartTime] = useState(null);

  // format time to mm:ss:ms & set default format to 00:00:00
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
  
    return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} : ${milliseconds.toString().padStart(2, '0')}`;
  };

  // Start timer
  const handleStart = () => {
    if (intervalId !== null) return; 

    setStartTime(Date.now());
    const id = setInterval(() => {
        setTime(Date.now() - (startTime || Date.now()));
      }, 1);

    setIntervalId(id);
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setTime(0);
    setLaps([]);
    setIntervalId(null);
  };

  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, formatTime(time)]);
  };

  return {
    time: formatTime(time),
    laps,
    handleStart,
    handleStop,
    handleReset,
    handleLap,
  };
}