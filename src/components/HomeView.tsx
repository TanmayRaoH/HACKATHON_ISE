import { Lightbulb, TrendingUp, Trophy, Code, Database, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { CountdownTimer } from './CountdownTimer';

interface HomeViewProps {
  onLearnMore: (challenge: string) => void;
}

export function HomeView({ onLearnMore }: HomeViewProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const scrollToHub = () => {
    const hubElement = document.getElementById('challenge-hub');
    if (hubElement) {
      hubElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* SCROLL 1: Hero & Why Participate */}
      <section className="flex flex-col items-center justify-center px-4 sm:px-8 text-center pt-32 pb-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl orbitron">
          TECH-<span style={{ color: 'var(--electric-blue)' }}>TRIAD</span>
        </h1>
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl mt-6 orbitron"
          style={{ color: 'var(--electric-blue)' }}
        >
          INNOVATION MEETS COMPETITION
        </h2>
        <p className="text-white/80 mt-4 max-w-2xl">
          Join us for an unforgettable journey of innovation, collaboration, and problem-solving November 12.
        </p>
        <button 
          onClick={scrollToHub}
          className="mt-10 px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 pulse-animation flex items-center gap-2"
          style={{ backgroundColor: 'var(--electric-blue)' }}
        >
          Register Now
          <ArrowRight size={20} />
        </button>
      </section>

      {/* Why Participate Section */}
      <section className="px-4 sm:px-8 pt-8 pb-20 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-16 orbitron text-[48px] font-normal not-italic">
          Take the Leap: <span style={{ color: 'var(--electric-blue)' }}>Here's Why</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Innovation Card */}
          <div 
            className="glass-panel rounded-xl p-8 text-center transition-all duration-300 cursor-pointer"
            style={{
              borderColor: hoveredCard === 'innovation' ? 'var(--electric-blue)' : 'var(--glass-border)',
            }}
            onMouseEnter={() => setHoveredCard('innovation')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                boxShadow: hoveredCard === 'innovation' 
                  ? '0 0 15px rgba(0, 212, 255, 0.7), 0 0 30px rgba(0, 212, 255, 0.5)' 
                  : '0 0 10px rgba(0, 212, 255, 0.3)',
              }}
            >
              <Lightbulb size={32} style={{ color: 'var(--electric-blue)' }} />
            </div>
            <h3 className="text-xl sm:text-2xl mb-4 orbitron">INNOVATION</h3>
            <p className="text-white/70">
              Showcase your creativity and innovative thinking
            </p>
          </div>

          {/* Growth Card */}
          <div 
            className="glass-panel rounded-xl p-8 text-center transition-all duration-300 cursor-pointer"
            style={{
              borderColor: hoveredCard === 'growth' ? 'var(--bright-pink)' : 'var(--glass-border)',
            }}
            onMouseEnter={() => setHoveredCard('growth')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(224, 64, 251, 0.1)',
                boxShadow: hoveredCard === 'growth' 
                  ? '0 0 15px rgba(224, 64, 251, 0.7), 0 0 30px rgba(224, 64, 251, 0.5)' 
                  : '0 0 10px rgba(224, 64, 251, 0.3)',
              }}
            >
              <TrendingUp size={32} style={{ color: 'var(--bright-pink)' }} />
            </div>
            <h3 className="text-xl sm:text-2xl mb-4 orbitron">GROWTH</h3>
            <p className="text-white/70">
              Learn new skills and expand your knowledge
            </p>
          </div>

          {/* Win Prizes Card */}
          <div 
            className="glass-panel rounded-xl p-8 text-center transition-all duration-300 cursor-pointer"
            style={{
              borderColor: hoveredCard === 'prizes' ? 'var(--electric-blue)' : 'var(--glass-border)',
            }}
            onMouseEnter={() => setHoveredCard('prizes')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(57, 255, 20, 0.1)',
                boxShadow: hoveredCard === 'prizes' 
                  ? '0 0 15px rgba(57, 255, 20, 0.7), 0 0 30px rgba(57, 255, 20, 0.5)' 
                  : '0 0 10px rgba(57, 255, 20, 0.3)',
              }}
            >
              <Trophy size={32} style={{ color: '#39FF14' }} />
            </div>
            <h3 className="text-xl sm:text-2xl mb-4 orbitron">WIN PRIZES</h3>
            <p className="text-white/70">
              Compete for cash prizes and certificates
            </p>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* SCROLL 2: Choose Your Challenge Hub */}
      <section id="challenge-hub" className="px-4 sm:px-8 py-20 max-w-7xl mx-auto pb-32">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4 orbitron">
          CHOOSE YOUR <span style={{ color: 'var(--electric-blue)' }}>CHALLENGE</span>
        </h2>
        <p className="text-center text-white/70 text-lg mb-16">
          Three exciting events, one incredible experience
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Ideathon Card */}
          <div 
            className="glass-panel rounded-xl p-8 transition-all duration-300"
            style={{
              borderColor: hoveredCard === 'ideathon' ? 'var(--electric-blue)' : 'var(--glass-border)',
              borderWidth: '2px',
            }}
            onMouseEnter={() => setHoveredCard('ideathon')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                boxShadow: hoveredCard === 'ideathon' 
                  ? '0 0 15px rgba(0, 212, 255, 0.7), 0 0 30px rgba(0, 212, 255, 0.5)' 
                  : '0 0 10px rgba(0, 212, 255, 0.3)',
              }}
            >
              <Lightbulb size={40} style={{ color: 'var(--electric-blue)' }} />
            </div>
            <h3 className="text-2xl sm:text-3xl mb-4 orbitron">IDEATHON</h3>
            <p className="text-white/70 mb-6">
              Pitch your innovative ideas and transform them into actionable solutions
            </p>
            <button 
              onClick={() => onLearnMore('Ideathon')}
              className="w-full py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                border: `2px solid var(--electric-blue)`,
                color: hoveredCard === 'ideathon' ? '#0a0a0a' : 'var(--electric-blue)',
                backgroundColor: hoveredCard === 'ideathon' ? 'var(--electric-blue)' : 'transparent',
              }}
            >
              Learn More <ArrowRight size={16} />
            </button>
          </div>

          {/* Hackathon Card */}
          <div 
            className="glass-panel rounded-xl p-8 transition-all duration-300"
            style={{
              borderColor: hoveredCard === 'hackathon' ? 'var(--bright-pink)' : 'var(--glass-border)',
              borderWidth: '2px',
            }}
            onMouseEnter={() => setHoveredCard('hackathon')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(224, 64, 251, 0.1)',
                boxShadow: hoveredCard === 'hackathon' 
                  ? '0 0 15px rgba(224, 64, 251, 0.7), 0 0 30px rgba(224, 64, 251, 0.5)' 
                  : '0 0 10px rgba(224, 64, 251, 0.3)',
              }}
            >
              <Code size={40} style={{ color: 'var(--bright-pink)' }} />
            </div>
            <h3 className="text-2xl sm:text-3xl mb-4 orbitron">HACKATHON</h3>
            <p className="text-white/70 mb-6">
              Build working prototypes in 48 hours. Code, collaborate, and create amazing applications
            </p>
            <button 
              onClick={() => onLearnMore('Hackathon')}
              className="w-full py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                border: `2px solid var(--bright-pink)`,
                color: hoveredCard === 'hackathon' ? '#0a0a0a' : 'var(--bright-pink)',
                backgroundColor: hoveredCard === 'hackathon' ? 'var(--bright-pink)' : 'transparent',
              }}
            >
              Learn More <ArrowRight size={16} />
            </button>
          </div>

          {/* Datathon Card */}
          <div 
            className="glass-panel rounded-xl p-8 transition-all duration-300"
            style={{
              borderColor: hoveredCard === 'datathon' ? 'var(--electric-blue)' : 'var(--glass-border)',
              borderWidth: '2px',
            }}
            onMouseEnter={() => setHoveredCard('datathon')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                boxShadow: hoveredCard === 'datathon' 
                  ? '0 0 15px rgba(0, 212, 255, 0.7), 0 0 30px rgba(0, 212, 255, 0.5)' 
                  : '0 0 10px rgba(0, 212, 255, 0.3)',
              }}
            >
              <Database size={40} style={{ color: 'var(--electric-blue)' }} />
            </div>
            <h3 className="text-2xl sm:text-3xl mb-4 orbitron">DATATHON</h3>
            <p className="text-white/70 mb-6">
              Analyze data and build predictive models to solve complex challenges
            </p>
            <button 
              onClick={() => onLearnMore('Datathon')}
              className="w-full py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                border: `2px solid var(--electric-blue)`,
                color: hoveredCard === 'datathon' ? '#0a0a0a' : 'var(--electric-blue)',
                backgroundColor: hoveredCard === 'datathon' ? 'var(--electric-blue)' : 'transparent',
              }}
            >
              Learn More <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
