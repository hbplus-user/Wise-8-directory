import { useRef, useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';

export default function SwitchSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [localDark, setLocalDark] = useState(false);
  const hasTriggered = useRef(false);

  // Monitor scroll within this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Automatically switch immediately when the section enters the fold (0% deep)
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0 && !hasTriggered.current) {
        setLocalDark(true);
        hasTriggered.current = true;
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Sync with global theme manually to avoid high-level re-renders
  useEffect(() => {
    if (localDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [localDark]);

  const toggle = () => setLocalDark(v => !v);

  return (
    <section 
      id="philosophy" 
      ref={sectionRef} 
      className="switch-section"
      style={{
        padding: '160px 0 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: localDark ? '#000' : 'var(--bg-color)',
        transition: 'background-color 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div className="container" style={{ zIndex: 1, textAlign: 'center', width: '100%', padding: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 40px' }}>
          <div
            className="text-label"
            style={{ marginBottom: '40px', color: localDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}
          >
            Inner Transformation
          </div>

          {/* Toggle Switch */}
          <div className="toggle-container" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            marginBottom: '80px',
            padding: '12px 32px',
            backgroundColor: localDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
            borderRadius: 'var(--radius-full)',
            border: `1px solid ${localDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
            position: 'relative',
            zIndex: 10
          }}>
            <span style={{ 
              fontSize: '0.75rem', 
              letterSpacing: '0.15em', 
              fontWeight: 700, 
              opacity: !localDark ? 1 : 0.3, 
              transition: 'opacity 0.4s ease',
              color: localDark ? '#fff' : '#000'
            }}>AUTOPILOT</span>
            
            <div 
              style={{
                width: '48px',
                height: '24px',
                borderRadius: '24px',
                backgroundColor: localDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background-color 0.4s ease'
              }}
              onClick={toggle}
            >
              <div 
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: localDark ? '#fff' : '#000',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: 0,
                  left: localDark ? '24px' : '0px',
                  transition: 'left 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
              />
            </div>
            
            <span style={{ 
              fontSize: '0.75rem', 
              letterSpacing: '0.15em', 
              fontWeight: 700, 
              opacity: localDark ? 1 : 0.3, 
              transition: 'opacity 0.4s ease',
              color: localDark ? '#fff' : '#000'
            }}>AWARENESS</span>
          </div>

          <div style={{ position: 'relative', minHeight: '400px', width: '100%', maxWidth: '900px', margin: '0 auto' }}>
            <div 
              style={{ 
                position: 'absolute', 
                width: '100%', 
                left: 0, 
                opacity: localDark ? 0 : 1, 
                visibility: localDark ? 'hidden' : 'visible',
                transition: 'opacity 0.8s ease, visibility 0.8s' 
              }}
            >
              <h2 className="heading-md" style={{ marginBottom: '32px', width: '100%', textAlign: 'center' }}>
                If only breaking out of autopilot were as simple as flipping a switch.
              </h2>
              <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
                Are you functioning with purpose or living on autopilot? The patterns dictating results are deeply conditioned, but rewiring them is entirely possible.
              </p>
            </div>

            <div 
              style={{ 
                position: 'absolute', 
                width: '100%', 
                left: 0, 
                opacity: localDark ? 1 : 0, 
                visibility: localDark ? 'visible' : 'hidden',
                color: '#fff',
                transition: 'opacity 0.8s ease, visibility 0.8s' 
              }}
            >
              <h2 className="heading-md" style={{ marginBottom: '32px', color: '#fff', width: '100%', textAlign: 'center' }}>
                There is no magic switch, but there is a profound process.
              </h2>
              <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.6, color: '#fff', maxWidth: '800px', margin: '0 auto' }}>
                True transformation requires process, not just theory. Whether for yourself or your team, we provide the experiential frameworks to equip you with the skills to shift from reactive to intentional living.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .switch-section {
            padding: 80px 0 0 0 !important;
          }
          .toggle-container {
            gap: 16px !important;
            padding: 8px 20px !important;
            margin-bottom: 40px !important;
          }
          .switch-section h2 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}

