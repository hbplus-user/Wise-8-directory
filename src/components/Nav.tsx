import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const navTextColor = scrolled ? 'var(--text-primary)' : '#ffffff';
    const navBtnBg = scrolled ? 'var(--text-primary)' : '#ffffff';
    const navBtnColor = scrolled ? 'var(--bg-color)' : '#000000';
  
    return (
      <nav 
        className="blend-header"
        style={{
          position: 'fixed',
          top: 0, 
          left: 0, 
          right: 0,
          padding: scrolled ? '16px 5vw' : '24px 5vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: scrolled ? 'var(--bg-color)' : 'transparent',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        width: '100%',
        borderBottom: 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: 0 }}>
        <Link 
          to="/"
          style={{ 
            textDecoration: 'none',
            fontSize: '1.4rem', 
            fontFamily: 'var(--font-serif)', 
            letterSpacing: '-0.02em', 
            fontWeight: 500, 
            color: navTextColor
          }} 
          className="touch-target"
        >
          The Wise 8
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }} className="desktop-menu">
          <div style={{ display: 'flex', gap: '0', marginRight: '24px' }}>
            {['About', 'Services', 'Pathways', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="touch-target"
                style={{ 
                  opacity: 1, 
                  fontSize: '0.75rem', 
                  transition: 'opacity 0.3s', 
                  color: navTextColor, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  padding: '0 16px'
                }}
              >
                {item}
              </a>
            ))}
          </div>
          <div>
            <a href="#contact" className="button" style={{ 
              backgroundColor: navBtnBg, 
              color: navBtnColor, 
              border: 'none',
              fontSize: '0.7rem'
            }}>
              Rewrite Your Narrative
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-menu { display: none !important; }
          nav { padding: 16px 5vw !important; }
        }
      `}</style>
    </nav>
  );
}
