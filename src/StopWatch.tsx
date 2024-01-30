import React from 'react';

interface StopWatchProps {
  time: string;
  laps: string[];
}

// Stopwatch component that displays the time and laps
const StopWatch: React.FC<StopWatchProps> = ({ time, laps }) => {
  return (
    <div>
      <div className="time">{time}</div>
      <div className="laps">
        Laps:
        {laps.map((lap, index) => (
          <div className="lapline" key={index}>{lap}</div>
        ))}
      </div>
    </div>
  );
}

export default StopWatch;