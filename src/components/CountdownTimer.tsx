import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const calculateTimeLeft = () => {
    // Target date: November 12, 2025 at 8:30 AM
    const targetDate = new Date('2025-11-12T08:30:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-4 sm:px-8 py-12 max-w-5xl mx-auto text-center">
      <h2 
        className="text-2xl sm:text-3xl md:text-4xl mb-8 tracking-widest orbitron"
        style={{ color: '#39ff14' }}
      >
        EVENT STARTS IN
      </h2>
      
      <div className="grid grid-cols-4 gap-3 sm:gap-6 md:gap-8">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div 
            className="text-4xl sm:text-5xl md:text-6xl mb-2"
            style={{ 
              fontFamily: 'Orbitron',
              color: '#ffffff',
            }}
          >
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div 
            className="text-xs sm:text-sm tracking-wider"
            style={{ color: '#39ff14' }}
          >
            DAYS
          </div>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div 
            className="text-4xl sm:text-5xl md:text-6xl mb-2"
            style={{ 
              fontFamily: 'Orbitron',
              color: '#ffffff',
            }}
          >
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div 
            className="text-xs sm:text-sm tracking-wider"
            style={{ color: '#39ff14' }}
          >
            HRS
          </div>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div 
            className="text-4xl sm:text-5xl md:text-6xl mb-2"
            style={{ 
              fontFamily: 'Orbitron',
              color: '#ffffff',
            }}
          >
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div 
            className="text-xs sm:text-sm tracking-wider"
            style={{ color: '#39ff14' }}
          >
            MINS
          </div>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div 
            className="text-4xl sm:text-5xl md:text-6xl mb-2"
            style={{ 
              fontFamily: 'Orbitron',
              color: '#ffffff',
            }}
          >
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div 
            className="text-xs sm:text-sm tracking-wider"
            style={{ color: '#39ff14' }}
          >
            SECS
          </div>
        </div>
      </div>
    </section>
  );
}
