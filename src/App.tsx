import { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import './index.css';

// Components
import Nav from './components/Nav';
import Hero from './components/Hero';
import SwitchSection from './components/SwitchSection';
import Vision from './components/Vision';
import Pathways from './components/Pathways';
import Volumes from './components/Volumes';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PathwayPage from './pages/PathwayPage';

const CustomCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 65, stiffness: 700, restDelta: 0.001 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = (e: MouseEvent) => {
      const id = Date.now();
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: smoothX,
          y: smoothY,
          left: 0,
          top: 0
        }}
      />
      <div className="cursor-wrapper">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.div
              key={ripple.id}
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="cursor-ripple"
              style={{
                left: ripple.x,
                top: ripple.y,
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef}>
      <CustomCursor />
      
      <Router>
        <ScrollToTop />
        <Nav />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <SwitchSection />
              <Pathways />
              <About />
              <Vision />
              <Volumes />
              <HowItWorks />
              <Reviews />
              <Footer />
            </main>
          } />
          <Route path="/pathways/:slug" element={<PathwayPage />} />
        </Routes>
      </Router>
    </div>
  );
}
