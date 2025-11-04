import { Code } from 'lucide-react';

interface NavigationProps {
  activeLink: string;
  onNavigate: (link: string) => void;
}

export function Navigation({ activeLink, onNavigate }: NavigationProps) {
  const links = ['Home', 'Ideathon', 'Hackathon', 'Datathon'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4">
      <div className="glass-panel rounded-xl px-6 py-4 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code size={24} style={{ color: 'var(--electric-blue)' }} />
          <span className="text-lg sm:text-xl orbitron">
            <span style={{ color: 'var(--electric-blue)' }}>TECH-TRIAD</span>
          </span>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => onNavigate(link)}
              className="transition-all duration-300 text-sm sm:text-base orbitron"
              style={{
                color: activeLink === link ? 'var(--electric-blue)' : '#ffffff',
                opacity: activeLink === link ? 1 : 0.7,
              }}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
