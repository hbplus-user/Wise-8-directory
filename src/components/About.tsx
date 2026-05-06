import { motion, type Variants } from 'framer-motion';

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

export default function About() {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '80px', color: 'var(--text-primary)' }}>
          
          <div className="sticky-top">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-label"
              style={{ marginBottom: '24px' }}
            >
              The Founder
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-lg"
            >
              Meet the <br/> Editor.
            </motion.h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              variants={itemVariants}
              style={{
                width: '100%',
                height: '500px',
                backgroundColor: 'var(--accent-color)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: '48px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <motion.img 
                src="/selina.png" 
                alt="Selina Pattnaik"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.5s ease-in-out',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
                onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-label"
              style={{ marginBottom: '16px', opacity: 1 }}
            >
              Real people. Real change.
            </motion.p>

            <motion.div variants={itemVariants} style={{ fontSize: '1.25rem', lineHeight: 1.7, opacity: 0.8, color: 'var(--text-primary)' }}>
              <p style={{ marginBottom: '24px' }}>
                Selina Pattnaik is a Master NLP Practitioner, Therapist, and Life Coach. Her journey into transformation began after a bold transition from the legal profession to becoming a Business Analyst, and finally to behavioral science – a shift that reflects her fearless approach to life.
              </p>
              <p>
                Believing in the unlimited potential of individuals, she works passionately not just to solve immediate issues, but to empower clients with the exact skills to rewrite their own responses to similar situations in life.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} style={{ marginTop: '48px' }}>
              <a href="https://www.linkedin.com/in/selina-pattnaik" target="_blank" rel="noopener noreferrer" className="button">Connect with Selina</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
