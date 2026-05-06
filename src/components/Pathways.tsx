import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const pathwaysData = [
  {
    id: '01',
    slug: 'clarity',
    title: 'Clarity',
    summary: 'Step out of the fog of indecision. Create a concrete roadmap for individuals who feel capable but lack direction.',
    image: '/pathway_clarity.png'
  },
  {
    id: '02',
    slug: 'resilience',
    title: 'Resilience',
    summary: 'Shift from a reactive character to an intentional author. Build the psychological perspective needed to navigate plot twists.',
    image: '/pathway_resilience.png'
  },
  {
    id: '03',
    slug: 'equilibrium',
    title: 'Equilibrium',
    summary: 'Break the cycle of overthinking and emotional overwhelm. Master the skills to regulate your responses and manage stress.',
    image: '/pathway_equilibrium.png'
  },
  {
    id: '04',
    slug: 'connection',
    title: 'Connection',
    summary: 'Stop avoiding conflict and start setting boundaries. Learn how to navigate difficult dialogue with confidence.',
    image: '/pathway_connection.png'
  }
];

export default function Pathways() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(useTransform(scrollYProgress, [0.1, 0.4], [0, 1]), {
    stiffness: 100,
    damping: 30
  });

  return (
    <section id="pathways" ref={sectionRef} className="section" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)', overflow: 'hidden', padding: '0 0 140px 0' }}>
      <div className="container" style={{ width: '100%', paddingTop: '100px' }}>
        
        {/* Header - Bottom Aligned */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end', // Bottom align description to H1
          marginBottom: '100px',
          width: '100%',
          flexWrap: 'wrap',
          gap: '40px'
        }}>
          <div style={{ flex: '1 0 400px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-label"
              style={{ marginBottom: '24px', opacity: 1, color: 'var(--text-primary)' }}
            >
              Table of Contents
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-lg"
              style={{ lineHeight: 1.1, margin: 0, color: 'var(--text-primary)' }}
            >
              The Pathways <br/> of Change.
            </motion.h2>
          </div>

          <div style={{ flex: '1 0 300px', maxWidth: '500px' }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: '1.1rem', opacity: 1, lineHeight: 1.6, margin: 0, color: 'var(--text-primary)' }}
            >
              True transformation requires a specific roadmap. Explore our foundational pathways to find the exact framework you need to interrupt your current storyline.
            </motion.p>
          </div>
        </div>

        {/* Specialized Animation Line */}
        <div className="desktop-only" style={{ position: 'relative', height: '80px', marginBottom: '60px' }}>
          <svg width="100%" height="100%" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
            <motion.path 
              d="M125 40 H875" 
              stroke="var(--text-primary)" 
              strokeWidth="1" 
              style={{ pathLength, opacity: 0.1 }} 
            />
          </svg>
        </div>

        {/* Grid Container - No zoom, fits parent */}
        <div 
          className="pathway-grid-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            width: '100%',
            position: 'relative'
          }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {pathwaysData.map((pathway, i) => {
            const isHovered = hoveredIndex === i;
            const isNeighbor = hoveredIndex !== null && Math.abs(hoveredIndex - i) === 1;

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                animate={{
                  scaleY: isHovered ? 1.08 : isNeighbor ? 1.04 : 1,
                  y: isHovered ? -12 : isNeighbor ? -6 : 0,
                  z: isHovered ? 50 : 0
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 30 
                }}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  transformOrigin: 'top center',
                  zIndex: isHovered ? 10 : isNeighbor ? 5 : 1
                }}
              >
                <Link
                  to={`/pathways/${pathway.slug}`}
                  className="pathway-card-new"
                  style={{
                    textDecoration: 'none',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    width: '100%',
                    height: '500px',
                    padding: '40px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '24px',
                    border: '1px solid rgba(0,0,0,0.1)',
                    boxShadow: isHovered ? '0 30px 60px rgba(0,0,0,0.2)' : '0 10px 30px rgba(0,0,0,0.05)',
                    transition: 'box-shadow 0.4s ease'
                  }}
                >
                  {/* Background Image Card */}
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: `url(${pathway.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -1,
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                  }} />
                  
                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.8) 100%)',
                    zIndex: 0
                  }} />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div className="text-label" style={{ marginBottom: '16px', color: 'rgba(255,255,255,0.6)' }}>
                       Pathway {pathway.id}
                    </div>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '20px', lineHeight: 1.1, fontFamily: 'var(--font-serif)', color: '#fff' }}>
                      {pathway.title}
                    </h3>
                    
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.6, marginBottom: '24px', color: '#fff' }}>
                            {pathway.summary}
                          </p>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                             <span className="text-label" style={{ fontSize: '0.65rem', color: '#fff' }}>Open Chapters</span>
                             <div style={{ width: '20px', height: '1px', backgroundColor: '#fff', opacity: 0.5 }} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <style>{`
          @media (max-width: 1200px) {
            .pathway-grid-container { 
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 768px) {
            .pathway-grid-container { 
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
