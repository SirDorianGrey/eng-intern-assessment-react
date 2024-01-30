/// <reference types="@types/jest" />
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StopWatch from './StopWatch';
import StopWatchButton from './StopWatchButton';
import App from './App';

// Tests for StopWatchButton
describe('StopWatchButton', () => {
  it('renders with correct label and responds to click events', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<StopWatchButton label="Start" onClick={handleClick} />);

    // Check that the button is rendered with the correct label
    expect(getByText('Start')).toBeInTheDocument();

    // Simulate a click event and check that the onClick handler is called
    fireEvent.click(getByText('Start'));
    expect(handleClick).toHaveBeenCalled();
  });
});

// Tests for StopWatch
describe('StopWatch', () => {
  it('renders with correct time and laps', () => {
    const { getByText } = render(<StopWatch time="00 : 00 : 00" laps={["00 : 01 : 00", "00 : 02 : 00"]} />);

    // Check that the time is rendered correctly
    expect(getByText('00 : 00 : 00')).toBeInTheDocument();

    // Check that the laps are rendered correctly
    expect(getByText('00 : 01 : 00')).toBeInTheDocument();
    expect(getByText('00 : 02 : 00')).toBeInTheDocument();
  });
});

// Tests for App
describe('App', () => {
  it('renders StopWatch and StopWatchButtons correctly', () => {
    const { getByText } = render(<App />);

    // Check that the time is initially set to "00 : 00 : 00"
    expect(getByText('00 : 00 : 00')).toBeInTheDocument();

    // Check that the Start, Stop, Reset, and Lap buttons are rendered
    expect(getByText('Start')).toBeInTheDocument();
    expect(getByText('Stop')).toBeInTheDocument();
    expect(getByText('Reset')).toBeInTheDocument();
    expect(getByText('Lap')).toBeInTheDocument();
  });
});
