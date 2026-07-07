import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import SlideDeck from './components/SlideDeck';

function App() {
  const [mode, setMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('agroijara-mode') || 'landing';
    }
    return 'landing';
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Lock body scroll when in presentation mode
  useEffect(() => {
    if (mode === 'presentation') {
      document.body.classList.add('presentation-mode');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('presentation-mode');
      document.body.style.overflow = 'auto';
    }

    window.localStorage.setItem('agroijara-mode', mode);
  }, [mode]);

  useEffect(() => {
    const toggleScrollTop = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleScrollTop);
    toggleScrollTop();

    return () => window.removeEventListener('scroll', toggleScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      {mode === 'landing' && (
        <div className="announcement-banner">
          <div className="container announcement-banner-inner">
            <div className="announcement-text">
              <i className="fa-solid fa-bullhorn"></i>
              <p>Жоқарғы Кеңестиң Start-up жойбарының 3-басқышы басланды: хар қала/районнан кеминде бир нақ ислеп турған проект киритилиуи керек.</p>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf_IAG-hFgViRXQ2AYYemwxIwo3rUVZBdi-SCNDAD-B7IgEfg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="announcement-btn"
            >
              Anketa <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      )}

      <Header mode={mode} setMode={setMode} />

      {mode === 'landing' ? (
        <LandingPage 
          onLearnMoreClick={handleLearnMore} 
          onContactClick={handleContact} 
        />
      ) : (
        <SlideDeck />
      )}

      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Yuqoriga qaytish" type="button">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}

export default App;
