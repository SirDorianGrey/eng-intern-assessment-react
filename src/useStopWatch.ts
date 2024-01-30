import { useState } from 'react';

export default function useStopWatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
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

    const currentStartTime = Date.now();
    setStartTime(currentStartTime);
    const id = setInterval(() => {
        setTime(Date.now() - currentStartTime + elapsedTime);
      }, 1);

    setIntervalId(id);
  };

  const handleStop = () => {
    if (intervalId === null) return; // prevent multiple clicks of stop button

    clearInterval(intervalId);
    setElapsedTime(Date.now() - startTime + elapsedTime);
    setIntervalId(null);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setTime(0);
    setLaps([]);
    setElapsedTime(0);
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