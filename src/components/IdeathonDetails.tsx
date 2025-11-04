import { ArrowLeft, Calendar, Users, Trophy, Mail, Phone, Lightbulb } from 'lucide-react';

interface IdeathonDetailsProps {
  onBack: () => void;
}

export function IdeathonDetails({ onBack }: IdeathonDetailsProps) {
  const themes = [
    'Smart City and Urban Development',
    'Smart Manufacturing - IoT and Automation',
    'EduTech - AI Driven Learning Solutions',
    'AI in Healthcare',
    'Safe and Secure Banking Application through Cyber Security',
    'Open Theme: To solve a real-world problem',
  ];

  const rules = [
    {
      title: 'Core Activity',
      description: 'Use your creativity, research, and critical thinking skills to develop innovative concepts and business models',
    },
    {
      title: 'Code of Conduct',
      description: 'All participants must adhere to a code of conduct promoting respect, inclusivity, and professionalism',
    },
    {
      title: 'Format/Structure',
      description: 'Ideation sessions will include specific activities or challenges, culminating in a dedicated Pitching Session',
    },
    {
      title: 'Intellectual Property',
      description: 'Proposed solutions must be original and should not violate any intellectual property rights',
    },
    {
      title: 'Evaluation',
      description: 'Based on creativity, feasibility, market potential, clarity of the pitch, and overall uniqueness of the concept',
    },
    {
      title: 'Provisions',
      description: 'Meals (Lunch) and snacks will be provided for registered participants throughout the duration of the ideathon',
    },
  ];

  const schedule = [
    { time: '8:30', event: 'Reporting' },
    { time: 'Within 9:00', event: 'Gathering in hall' },
    { time: '9:30', event: 'Inauguration' },
    { time: '10:00', event: 'Room allotment (instructions will be provided)' },
    { time: '10:15', event: 'Competition starts' },
    { time: '12:30 - 1:15', event: 'Lunch break' },
    { time: '1:30', event: 'Assemble around' },
    { time: '4:30', event: 'Completed around' },
    { time: '5:00', event: 'Result announcement' },
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
        {/* Logo - Lightbulb for Ideas */}
        <div 
          className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--electric-blue) 0%, rgba(0, 212, 255, 0.5) 100%)',
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
          }}
        >
          <Lightbulb size={48} style={{ color: '#0a0a0a' }} />
        </div>
        
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl mb-4 orbitron"
          style={{ color: 'var(--electric-blue)' }}
        >
          IDEATHON
        </h1>
        <h2 
          className="text-2xl sm:text-3xl mb-12 orbitron"
          style={{ color: 'var(--electric-blue)' }}
        >
          INNOVATION STARTS HERE!
        </h2>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Event Date */}
          <div className="glass-panel rounded-xl p-8">
            <Calendar size={40} className="mx-auto mb-4" style={{ color: 'var(--electric-blue)' }} />
            <h3 className="text-xl mb-3 orbitron">EVENT DATE</h3>
            <p className="text-2xl mb-2">November 12</p>
            <p className="text-white/70">Full day event</p>
          </div>

          {/* Team Size */}
          <div className="glass-panel rounded-xl p-8">
            <Users size={40} className="mx-auto mb-4" style={{ color: 'var(--electric-blue)' }} />
            <h3 className="text-xl mb-3 orbitron">TEAM SIZE</h3>
            <p className="text-2xl mb-2">2-4 Members</p>
            <p className="text-white/70">Individual participation allowed</p>
          </div>

          {/* Prizes */}
          <div className="glass-panel rounded-xl p-8">
            <Trophy size={40} className="mx-auto mb-4" style={{ color: 'var(--electric-blue)' }} />
            <h3 className="text-xl mb-3 orbitron">PRIZES</h3>
            <p className="text-2xl mb-2">₹22,000 Total</p>
            <p className="text-white/70">Winner: ₹15,000 | Runner: ₹7,000</p>
          </div>
        </div>
      </section>

      {/* SCROLL 2: Themes & Rules */}
      <section className="grid lg:grid-cols-2 gap-12 mb-20">
        {/* Left Column: Themes */}
        <div>
          <h2 className="text-3xl sm:text-4xl mb-4 orbitron">IDEATHON THEMES</h2>
          <p className="text-white/70 mb-8">
            Choose one of the following themes for your submission:
          </p>
          <div className="space-y-4">
            {themes.map((theme, index) => (
              <div key={index} className="glass-panel rounded-lg p-4 flex gap-4">
                <span 
                  className="text-xl shrink-0"
                  style={{ color: 'var(--electric-blue)' }}
                >
                  {index + 1}.
                </span>
                <p className="text-white/90">{theme}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: How It Works */}
        <div>
          <h2 className="text-3xl sm:text-4xl mb-4 orbitron">HOW THE IDEATHON WORKS</h2>
          <p className="text-white/70 mb-8">
            Transform your innovative ideas into actionable solutions through our structured ideation process:
          </p>
          <div className="space-y-4">
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
        </div>
      </section>

      {/* SCROLL 3: Schedule & Contact */}
      <section className="grid lg:grid-cols-2 gap-12 mb-12">
        {/* Left Column: Schedule */}
        <div>
          <h2 className="text-3xl sm:text-4xl mb-8 orbitron">SCHEDULE</h2>
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div key={index} className="glass-panel rounded-lg p-4 flex gap-4">
                <span 
                  className="text-lg shrink-0"
                  style={{ color: 'var(--electric-blue)' }}
                >
                  {index + 1}.
                </span>
                <div className="flex-1">
                  <p className="text-white/90">
                    <span style={{ color: 'var(--electric-blue)' }}>{item.time}</span>
                    {' - '}
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Contact */}
        <div>
          <h2 className="text-3xl sm:text-4xl mb-8 orbitron">CONTACT</h2>
          <div className="space-y-4">
            <div className="glass-panel rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Phone size={24} style={{ color: 'var(--electric-blue)' }} />
                <h4 className="text-lg orbitron">PHONE</h4>
              </div>
              <p className="text-white/90 ml-9">
                +91 7760822596<br />
                +91 6300628364
              </p>
            </div>

            <div className="glass-panel rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail size={24} style={{ color: 'var(--electric-blue)' }} />
                <h4 className="text-lg orbitron">EMAIL</h4>
              </div>
              <p className="text-white/90 ml-9">
                innovisions.ise@gmail.com
              </p>
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
          Register Now - ₹200 per team
        </button>
      </div>
    </div>
  );
}
