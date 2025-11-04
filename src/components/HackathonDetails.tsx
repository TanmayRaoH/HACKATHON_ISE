import { ArrowLeft, Calendar, Users, Trophy, Mail, Phone, Code } from 'lucide-react';

interface HackathonDetailsProps {
  onBack: () => void;
}

export function HackathonDetails({ onBack }: HackathonDetailsProps) {
  const rules = [
    {
      title: 'Problem Statements',
      description: 'Problem statements will be revealed at the start of the hackathon',
    },
    {
      title: 'Core Activity',
      description: 'Use your creativity and coding skills to develop innovative solutions',
    },
    {
      title: 'Code of Conduct',
      description: 'All participants must adhere to a code of conduct promoting respect, inclusivity, and professionalism',
    },
    {
      title: 'Format & Guidelines',
      description: '12-hour Hackathon. Participants must bring fully charged laptops with extensions',
    },
    {
      title: 'Intellectual Property',
      description: 'All code must be written during the competition period. Applications must be original',
    },
    {
      title: 'Evaluation & Provisions',
      description: 'Based on creativity, uniqueness, design, and execution. lunch and snacks provided',
    },
  ];

  return (
    <div className="px-4 sm:px-8 py-8 max-w-7xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="glass-panel rounded-lg px-6 py-3 mb-8 mx-auto flex items-center gap-2 transition-all duration-300 hover:scale-105"
        style={{ color: 'var(--electric-blue)' }}
      >
        <ArrowLeft size={20} />
        Back to Home
      </button>

      {/* SCROLL 1: Hero & Key Info */}
      <section className="text-center mb-20">
        {/* Logo - Code Symbol for Hackathon */}
        <div 
          className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--electric-blue) 0%, rgba(0, 212, 255, 0.5) 100%)',
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
          }}
        >
          <Code size={48} style={{ color: '#0a0a0a' }} />
        </div>
        
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl mb-4 orbitron"
          style={{ color: 'var(--electric-blue)' }}
        >
          HACKATHON
        </h1>
        <h2 
          className="text-xl sm:text-2xl mb-12 max-w-4xl mx-auto orbitron"
          style={{ color: 'var(--electric-blue)' }}
        >
          PUSH LIMITS, SOLVE PROBLEMS, AND SHOWCASE YOUR CODING GENIUS.
        </h2>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Event Date */}
          <div className="glass-panel rounded-xl p-8">
            <Calendar size={40} className="mx-auto mb-4" style={{ color: 'var(--electric-blue)' }} />
            <h3 className="text-xl mb-3 orbitron">EVENT DATE</h3>
            <p className="text-2xl mb-2">November 12</p>
            <p className="text-white/70">12-hour Hackathon</p>
          </div>

          {/* Team Size */}
          <div className="glass-panel rounded-xl p-8">
            <Users size={40} className="mx-auto mb-4" style={{ color: 'var(--electric-blue)' }} />
            <h3 className="text-xl mb-3 orbitron">TEAM SIZE</h3>
            <p className="text-2xl mb-2">2-4 Members</p>
            <p className="text-white/70">Bring fully charged laptops</p>
          </div>

          {/* Prizes */}
          <div className="glass-panel rounded-xl p-8">
            <Trophy size={40} className="mx-auto mb-4" style={{ color: 'var(--electric-blue)' }} />
            <h3 className="text-xl mb-3 orbitron">PRIZES</h3>
            <p className="text-2xl mb-2">₹40,000 Total</p>
            <p className="text-white/70">Winner: ₹30,000 | Runner: ₹10,000</p>
          </div>
        </div>
      </section>

      {/* SCROLL 2: How It Works */}
      <section className="mb-20">
        {/* Catchy Alert Banner */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div 
            className="glass-panel rounded-xl p-6 sm:p-8 text-center relative overflow-hidden"
            style={{
              borderColor: 'var(--electric-blue)',
              borderWidth: '2px',
            }}
          >
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                background: 'radial-gradient(circle at center, var(--electric-blue) 0%, transparent 70%)',
              }}
            />
            <p className="relative text-xl sm:text-2xl md:text-3xl" style={{ color: 'var(--electric-blue)' }}>
              ⚡ Get ready to think on your feet — the problem statement drops on the spot! ⚡
            </p>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl mb-4 text-center orbitron">HOW THE HACKATHON WORKS</h2>
        <p className="text-white/70 mb-8 text-center max-w-3xl mx-auto">
          Push your coding skills to the limit and build innovative solutions:
        </p>
        <div className="space-y-4 max-w-4xl mx-auto">
          {rules.map((rule, index) => (
            <div key={index} className="glass-panel rounded-lg p-4">
              <div className="flex gap-4 mb-2">
                <span 
                  className="text-xl shrink-0"
                  style={{ color: 'var(--electric-blue)' }}
                >
                  {index + 1}.
                </span>
                <h4 className="text-lg" style={{ color: 'var(--electric-blue)' }}>
                  {rule.title}
                </h4>
              </div>
              <p className="text-white/80 pl-10">{rule.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCROLL 3: Contact & CTA */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl mb-8 text-center orbitron">CONTACT</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="glass-panel rounded-lg p-6">
            <div className="flex gap-4 mb-2">
              <span 
                className="text-xl shrink-0"
                style={{ color: 'var(--electric-blue)' }}
              >
                1.
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Phone size={24} style={{ color: 'var(--electric-blue)' }} />
                  <h4 className="text-lg orbitron">PHONE</h4>
                </div>
                <p className="text-white/90">
                  +91 8431614069, +91 9446114441
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-lg p-6">
            <div className="flex gap-4 mb-2">
              <span 
                className="text-xl shrink-0"
                style={{ color: 'var(--electric-blue)' }}
              >
                2.
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Mail size={24} style={{ color: 'var(--electric-blue)' }} />
                  <h4 className="text-lg orbitron">EMAIL</h4>
                </div>
                <p className="text-white/90">
                  innovisions.ise@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Button */}
      <div className="mt-16">
        <button
          className="px-12 py-6 rounded-lg transition-all duration-300 hover:scale-105 mx-auto block text-center"
          style={{
            backgroundColor: 'var(--electric-blue)',
            color: '#0a0a0a',
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
          }}
        >
          Register Now - ₹300 per team
        </button>
      </div>
    </div>
  );
}
