import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import SlideDeck from './components/SlideDeck';

function App() {
  const [mode, setMode] = useState('landing');

  // Lock body scroll when in presentation mode
  useEffect(() => {
    if (mode === 'presentation') {
      document.body.classList.add('presentation-mode');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('presentation-mode');
      document.body.style.overflow = 'auto';
    }
  }, [mode]);

  const handleLearnMore = () => {
    const solutionSection = document.getElementById('solution');
    if (solutionSection) {
      solutionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Header mode={mode} setMode={setMode} />
      
      {mode === 'landing' ? (
        <LandingPage 
          onLearnMoreClick={handleLearnMore} 
          onContactClick={handleContact} 
        />
      ) : (
        <SlideDeck />
      )}
    </>
  );
}

export default App;
