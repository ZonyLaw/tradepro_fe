import React, { useState, useEffect } from 'react';

// Move getNextCandlestickTime outside the component
const getNextCandlestickTime = () => {
  const intervals = [0, 4, 8, 12, 16, 20];
  const now = new Date();
  const currentHour = now.getHours();

  // Find the next interval
  const nextInterval = intervals.find(interval => interval > currentHour);

  let nextCandlestickTime;

  if (nextInterval !== undefined) {
    // If the next interval is found on the same day
    nextCandlestickTime = new Date(now);
    nextCandlestickTime.setHours(nextInterval, 0, 0, 0); // Set to next interval, minute=0, second=0
  } else {
    // If the next interval is on the next day
    nextCandlestickTime = new Date(now);
    nextCandlestickTime.setDate(now.getDate() + 1); // Move to next day
    nextCandlestickTime.setHours(intervals[0], 0, 0, 0); // Set to first interval of the next day
  }

  return nextCandlestickTime;
};

export function Next4hrCandlestickTime() {
  const [nextTime, setNextTime] = useState(getNextCandlestickTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setNextTime(getNextCandlestickTime());
    }, 1000 * 60); // Update every minute

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div>
      <p className="fs-4">Next 4-hour Candlestick Time: <b>
        {formatTime(nextTime)}
      </b></p>
    </div>
  );
}
