import { AnimatedBackground } from './components/AnimatedBackground';
import { Navigation } from './components/Navigation';
import { HomeView } from './components/HomeView';
import { IdeathonDetails } from './components/IdeathonDetails';
import { HackathonDetails } from './components/HackathonDetails';
import { DatathonDetails } from './components/DatathonDetails';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<'Home' | 'Ideathon' | 'Hackathon' | 'Datathon'>('Home');
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    // Scroll to top when view changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigate = (link: string) => {
    setActiveLink(link);
    if (link === 'Home' || link === 'Ideathon' || link === 'Hackathon' || link === 'Datathon') {
      setCurrentView(link as 'Home' | 'Ideathon' | 'Hackathon' | 'Datathon');
    }
  };

  const handleLearnMore = (challenge: string) => {
    setCurrentView(challenge as 'Ideathon' | 'Hackathon' | 'Datathon');
    setActiveLink(challenge);
  };

  const handleBackToHome = () => {
    setCurrentView('Home');
    setActiveLink('Home');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated particle background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation activeLink={activeLink} onNavigate={handleNavigate} />
      
      {/* Main content with view switching */}
      <div className="relative z-10 text-white pt-20">
        <AnimatePresence mode="wait">
          {currentView === 'Home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <HomeView onLearnMore={handleLearnMore} />
            </motion.div>
          )}
          
          {currentView === 'Ideathon' && (
            <motion.div
              key="ideathon"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <IdeathonDetails onBack={handleBackToHome} />
            </motion.div>
          )}
          
          {currentView === 'Hackathon' && (
            <motion.div
              key="hackathon"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <HackathonDetails onBack={handleBackToHome} />
            </motion.div>
          )}
          
          {currentView === 'Datathon' && (
            <motion.div
              key="datathon"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <DatathonDetails onBack={handleBackToHome} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
