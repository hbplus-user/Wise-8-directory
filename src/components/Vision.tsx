import { motion, type Variants } from 'framer-motion';
import ScrollRevealText from './ScrollRevealText';

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

export default function Vision() {
  const metrics = [
    { number: '4', label: 'Life skill learning pathways' },
    { number: '75+', label: 'Individuals guided in development' },
    { number: '10+', label: 'Thinking frameworks taught' },
  ];

  return (
    <section className="vision-section section" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)', textAlign: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-label"
            style={{ marginBottom: '24px', color: 'var(--text-primary)', opacity: 0.8 }}
          >
            The Vision
          </motion.div>
          
          <ScrollRevealText
            className="heading-lg"
            style={{ color: 'var(--text-primary)', maxWidth: '800px', lineHeight: 1.2, marginBottom: '40px', justifyContent: 'center' }}
            text="Equipping you with the life skills the narrative missed."
          />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <motion.p
              variants={itemVariants}
              style={{ fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6, color: 'var(--text-primary)', maxWidth: '750px', margin: '0 auto' }}
            >
              At The Wise 8, our vision is simple but bold: <strong>To help 100,000 people unlearn their conditioning and master their own behavior.</strong> Through experiential learning rooted in psychology.
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="vision-metrics-grid"
          style={{ width: '100%', maxWidth: 'var(--container-width)', margin: '0 auto' }}
        >
          {metrics.map((metric, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="bento-card metric-card hover-glow"
              style={{ 
                padding: '40px 24px',
                backgroundColor: 'var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'default',
                border: '1px solid var(--border-subtle)',
                width: '100%',
                height: '100%',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '4rem', fontFamily: 'var(--font-serif)', marginBottom: '16px', lineHeight: 1, color: 'var(--text-primary)' }}>
                {metric.number}
              </div>
              <div className="text-label" style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: 600, opacity: 0.6 }}>
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <style>{`
          .vision-metrics-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            width: 100%;
          }
          .vision-metrics-grid > div:last-child {
            grid-column: span 2;
          }
          .hover-glow {
            transition: all 0.4s ease;
          }
          .hover-glow:hover {
            background-color: var(--border-subtle) !important;
            border-color: var(--text-primary) !important;
            transform: translateY(-5px);
          }
          @media (max-width: 768px) {
            .vision-section p {
              font-size: 1.1rem !important;
            }
            .vision-metrics-grid {
              grid-template-columns: 1fr !important;
            }
            .vision-metrics-grid > div:last-child {
              grid-column: span 1 !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
