import React, { useState, useEffect } from 'react';

export default function Header({ mode, setMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle header background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (mode === 'landing') {
        const scrollPosition = window.scrollY + 100;
        const sections = ['hero', 'problems', 'solution', 'features', 'market', 'comparison', 'faq', 'timeline', 'contact'];
        
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);
          if (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mode]);

  const toggleMode = (e) => {
    setMode(e.target.checked ? 'presentation' : 'landing');
  };

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    setActiveSection(sectionId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={scrolled || mode === 'presentation' ? 'scrolled' : ''}>
      <div className="container">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          <i className="fa-solid fa-tractor"></i> AgroIjara.uz
        </a>
        
        {/* Navigation - visible in landing mode */}
        {mode === 'landing' && (
          <nav className={mobileMenuOpen ? 'active' : ''}>
            <a 
              href="#hero" 
              className={activeSection === 'hero' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
            >
              Bas bet
            </a>
            <a 
              href="#problems" 
              className={activeSection === 'problems' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('problems'); }}
            >
              Máshqalalar
            </a>
            <a 
              href="#solution" 
              className={activeSection === 'solution' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('solution'); }}
            >
              Sheshim
            </a>
            <a 
              href="#features" 
              className={activeSection === 'features' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
            >
              Imkaniyatlar
            </a>
            <a 
              href="#market" 
              className={activeSection === 'market' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('market'); }}
            >
              Bazar
            </a>
            <a 
              href="#comparison" 
              className={activeSection === 'comparison' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('comparison'); }}
            >
              Salıstırıw
            </a>
            <a 
              href="#faq" 
              className={activeSection === 'faq' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('faq'); }}
            >
              FAQ
            </a>
            <a 
              href="#timeline" 
              className={activeSection === 'timeline' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('timeline'); }}
            >
              Basqıshlar
            </a>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            >
              Sorawlar
            </a>
            <div className="mode-switch-wrapper nav-mode-switch">
              <span className="toggle-label" style={{ color: mode === 'landing' ? 'var(--c-gold-dim)' : 'inherit', fontWeight: mode === 'landing' ? 700 : 500 }}>Sayt</span>
              <label className="switch">
                <input type="checkbox" checked={mode === 'presentation'} onChange={toggleMode} />
                <span className="slider"></span>
              </label>
              <span className="toggle-label" style={{ color: mode === 'presentation' ? 'var(--c-gold-dim)' : 'inherit', fontWeight: mode === 'presentation' ? 700 : 500 }}>Slaydlar</span>
            </div>
          </nav>
        )}

        {/* Layout Mode Toggle */}
        <div className="mode-switch-wrapper header-mode-switch">
          <span className="toggle-label" style={{ color: mode === 'landing' ? 'var(--c-gold-dim)' : 'inherit', fontWeight: mode === 'landing' ? 700 : 500 }}>Sayt</span>
          <label className="switch">
            <input type="checkbox" checked={mode === 'presentation'} onChange={toggleMode} />
            <span className="slider"></span>
          </label>
          <span className="toggle-label" style={{ color: mode === 'presentation' ? 'var(--c-gold-dim)' : 'inherit', fontWeight: mode === 'presentation' ? 700 : 500 }}>Slaydlar</span>
        </div>

        {mode === 'landing' && (
          <div className="menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className={mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
          </div>
        )}
      </div>
    </header>
  );
}
