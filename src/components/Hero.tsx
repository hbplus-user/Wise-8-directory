import { motion, useMotionValue, useSpring, type Variants } from 'framer-motion';
import { useEffect } from 'react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 100);
      mouseY.set(e.clientY - 100);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="section" style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: 0
    }}>
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'url(/hero_bg.png.jpeg?v=3)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#000',
        zIndex: -2,
      }}>
        {/* Subtle dark overlay to ensure text contrast over bright areas of the cinematic image */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',
          zIndex: 1
        }} />
      </div>

      {/* Mouse Ripple Overlay */}
      <motion.div 
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
          zIndex: -1,
          left: springX,
          top: springY,
        }}
      />

      <div className="container" style={{ textAlign: 'center', zIndex: 1, paddingBottom: '24px' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <motion.div variants={itemVariants} className="text-label" style={{ marginBottom: '32px', opacity: 1, color: '#fff' }}>
            Behavioral Science • Behavioral Change
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="heading-xl" style={{ marginBottom: '40px', color: '#fff', textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
            The story is not written. <br /> It is authored.
          </motion.h1>

          <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '650px', margin: '0 auto 64px', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            Step out of autopilot and take back the pen. We provide the psychological frameworks to help you shift from reactive habits to intentional authoring.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
            <a href="#services" className="button" style={{ backgroundColor: '#fff', color: '#000', border: 'none' }}>
              Claim Your Clarity
            </a>
            <motion.a 
              href="#about" 
              className="button outline" 
              whileHover={{ 
                backgroundColor: "#fff",
                color: "#000",
                borderColor: "#fff"
              }}
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}
            >
              The Philosophy
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        opacity: 0.7
      }}>
        <div className="text-label" style={{ fontSize: '0.65rem', color: '#fff' }}>Scroll to Explore</div>
      </div>
    </section>
  );
}
