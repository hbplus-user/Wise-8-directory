import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  
  const navItems = ['About', 'Services', 'Pathways', 'Contact'];

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
            color: mobileMenuOpen ? 'var(--text-primary)' : navTextColor,
            zIndex: 10001
          }} 
          className="touch-target"
          onClick={() => setMobileMenuOpen(false)}
        >
          The Wise 8
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }} className="desktop-menu">
          <div style={{ display: 'flex', gap: '0', marginRight: '24px' }}>
            {navItems.map((item) => (
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

        {/* Mobile Menu Button */}
        <div 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ 
            zIndex: 10001,
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: '6px',
            padding: '10px'
          }}
        >
          <motion.div 
            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
            style={{ width: '24px', height: '2px', backgroundColor: mobileMenuOpen ? 'var(--text-primary)' : navTextColor }} 
          />
          <motion.div 
            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
            style={{ width: '24px', height: '2px', backgroundColor: navTextColor }} 
          />
          <motion.div 
            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
            style={{ width: '24px', height: '2px', backgroundColor: mobileMenuOpen ? 'var(--text-primary)' : navTextColor }} 
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'var(--bg-color)',
              zIndex: 10000,
              display: 'flex',
              flexDirection: 'column',
              padding: '120px 10vw'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    fontSize: '2.5rem',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none'
                  }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ marginTop: '20px' }}
              >
                <a 
                  href="#contact" 
                  className="button" 
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ width: '100%', padding: '20px' }}
                >
                  Rewrite Your Narrative
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          nav { padding: 16px 5vw !important; }
        }
      `}</style>
    </nav>
  );
}
