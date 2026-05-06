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

export default function Volumes() {
  const volumes = [
    {
      title: 'Volume I',
      subtitle: 'The Protagonist',
      type: 'Individual Therapy & Coaching',
      description: 'Navigate from "where the story is" to "where you want it to go". Our unwavering commitment to one-session therapy empowers you to self-coach out of stress, overcome psychosomatic roadblocks, and rewrite the relationship you have with yourself.',
      themes: 'Awareness about self | Exploring options beyond limitations | Communication as a superpower.',
      buttonText: 'Claim Your Clarity',
      span: 'col-span-12 md:col-span-7'
    },
    {
      title: 'Volume II',
      subtitle: 'The Ensemble',
      type: 'Corporate Workshops & Training',
      description: 'We replace outdated training scripts with experiential psychological frameworks. We prepare your teams for crucial dialogue and growth arcs, helping organizations build self-aware, high-performing cultures that grow from within.',
      themes: 'Leadership Intelligence | The Art of Feedback | Balance as a Skill.',
      buttonText: 'Request a Consultation',
      span: 'col-span-12 md:col-span-5'
    },
    {
      title: 'Volume III',
      subtitle: 'The Anthology',
      type: 'Events & Workshops',
      description: 'Interactive workshops designed to equip groups with the basic life skills our education system missed. These sessions use role-play and real-world application to transform how people lead, decide, and connect in a shared environment.',
      themes: 'Decision Making & Autonomy | Conscious Communication | Energy Management.',
      buttonText: 'Skip the next waitlist',
      span: 'col-span-12'
    }
  ];

  return (
    <section id="services" className="volumes-section section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'url(/volumes_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.1,
        zIndex: -1,
      }} />

      <div className="container">
        <div className="volumes-header" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '100px' }}>
          <div className="sticky-top">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-label"
              style={{ marginBottom: '24px' }}
            >
              The Services
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-lg"
            >
              The Volumes: <br className="desktop-only" /> Three Roads.
            </motion.h2>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ fontSize: '1.25rem', opacity: 0.7, lineHeight: 1.6 }}
            >
              Our foundation in Behavioral Science is consistent across all chapters. Whether for yourself, your team, or a shared community, we provide the experiential frameworks needed to shift from reactive habits to intentional authoring.
            </motion.p>
          </div>
        </div>

        <div className="volumes-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px'
        }}>
          {volumes.map((vol, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bento-card volume-card"
              style={{
                gridColumn: 'span 4',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '480px'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
                  <div>
                    <div className="text-label" style={{ marginBottom: '12px' }}>{vol.type}</div>
                    <h3 style={{ fontSize: '2.8rem', lineHeight: 1 }}>{vol.title}</h3>
                    <div style={{ fontSize: '1.1rem', opacity: 0.6, marginTop: '8px' }}>{vol.subtitle}</div>
                  </div>
                  <div className="volume-number" style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '50%', 
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.4
                  }}>
                    {i + 1}
                  </div>
                </div>
                
                <p style={{ opacity: 0.8, lineHeight: 1.6, fontSize: '1.1rem', marginBottom: '32px' }}>
                  {vol.description}
                </p>

                <div style={{ fontSize: '0.85rem', opacity: 0.5, fontStyle: 'italic' }}>
                  <strong>Key Themes:</strong> {vol.themes}
                </div>
              </div>

              <div style={{ marginTop: '48px' }}>
                <a href="#contact" className="button outline" style={{ width: '100%' }}>{vol.buttonText}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .volumes-header {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            margin-bottom: 60px !important;
          }
          .sticky-top {
            position: relative !important;
            top: 0 !important;
          }
          .volumes-grid {
            grid-template-columns: 1fr !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .volume-card {
            grid-column: span 12 !important;
            min-height: auto !important;
            padding: 32px !important;
          }
          .volume-card h3 {
            font-size: 2.2rem !important;
          }
          .desktop-only {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
