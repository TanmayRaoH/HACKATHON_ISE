import { ArrowLeft, Calendar, Users, Trophy, Mail, Phone, BarChart3 } from 'lucide-react';

interface DatathonDetailsProps {
  onBack: () => void;
}

export function DatathonDetails({ onBack }: DatathonDetailsProps) {
  const rules = [
    {
      title: 'Reveal',
      description: 'Problem statements and data are revealed at the start',
    },
    {
      title: 'Create',
      description: 'Use creativity and coding skills to craft innovative data solutions',
    },
    {
      title: 'Originality',
      description: 'All code must be written during the event; solutions must be original',
    },
    {
      title: 'IP & Conduct',
      description: 'No IP violations. Follow a respectful, inclusive code of conduct',
    },
    {
      title: 'Evaluation',
      description: 'Judged on creativity, uniqueness, design, and execution',
    },
    {
      title: 'Provisions',
      description: 'lunch and snacks provided for registered participants',
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
        {/* Logo - Bar Chart for Data */}
        <div 
          className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--electric-blue) 0%, rgba(0, 212, 255, 0.5) 100%)',
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
          }}
        >
          <BarChart3 size={48} style={{ color: '#0a0a0a' }} />
        </div>
        
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl mb-4 orbitron"
          style={{ color: 'var(--electric-blue)' }}
        >
          DATATHON
        </h1>
        <h2 
          className="text-xl sm:text-2xl mb-12 max-w-4xl mx-auto orbitron"
          style={{ color: 'var(--electric-blue)' }}
        >
          MODEL THE FUTURE. SOLVE WITH INSIGHT. WIN.
        </h2>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Event Date */}
          <div className="glass-panel rounded-xl p-8">
            <Calendar size={40} className="mx-auto mb-4" style={{ color: 'var(--electric-blue)' }} />
            <h3 className="text-xl mb-3 orbitron">EVENT DATE</h3>
            <p className="text-2xl mb-2">November 12</p>
            <p className="text-white/70">12-hour Datathon</p>
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
            <p className="text-2xl mb-2">₹15,000 Total</p>
            <p className="text-white/70">Winner: ₹10,000 | Runner: ₹5,000</p>
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

        <h2 className="text-3xl sm:text-4xl mb-4 text-center orbitron">HOW THE DATATHON WORKS</h2>
        <p className="text-white/70 mb-8 text-center max-w-3xl mx-auto">
          Build data-driven solutions using the provided datasets:
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
                  +91 7760822596, +91 6300628364
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
          Register Now - ₹150 per team
        </button>
      </div>
    </div>
  );
}
