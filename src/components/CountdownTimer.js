import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-05-30T00:00:00');
    const currentTime = new Date();
    const difference = eventDate - currentTime;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="countdown-timer">
      <h2>Countdown to the Event</h2>
      <div className="timer">
        {Object.keys(timeLeft).map((interval) => (
          <div key={interval} className="time-segment">
            <span>{timeLeft[interval]}</span>
            <span>{interval}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
