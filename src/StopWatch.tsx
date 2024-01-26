import React from 'react';

interface StopWatchProps {
  time: string;
  laps: string[];
}

// Stopwatch component that displays the time and laps
const StopWatch: React.FC<StopWatchProps> = ({ time, laps }) => {
  return (
    <div>
      <div>{time}</div>
      <div>
        Laps:
        {laps.map((lap, index) => (
          <div key={index}>{lap}</div>
        ))}
      </div>
    </div>
  );
}

export default StopWatch;