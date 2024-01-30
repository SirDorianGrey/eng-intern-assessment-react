import React from 'react';

interface StopWatchButtonProps {
  label: string; 
  onClick: () => void; 
}

// Button component for the stopwatch
const StopWatchButton: React.FC<StopWatchButtonProps> = ({ label, onClick }) => {
  return (
    <button className="StopWatchButton" onClick={onClick}>{label}</button>
  );
}

export default StopWatchButton;