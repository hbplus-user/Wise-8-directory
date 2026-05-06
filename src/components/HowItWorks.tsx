import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollRevealText from './ScrollRevealText';

const steps = [
  {
    number: '01',
    title: 'Recognise the Script',
    description: 'Every pattern of behaviour, every habitual response—it was written by years of conditioning. The first step is seeing it clearly. We guide you through a structured self-assessment to map the beliefs and reactions that are shaping your current chapter.'
  },
  {
    number: '02',
    title: 'Interrupt the Default',
    description: 'Awareness alone does not create change. Using a blend of NLP, behavioural science, and experiential exercises, we give you the precise psychological tools to interrupt your conditioned responses at the moment they arise—not in theory, but in real time.'
  },
  {
    number: '03',
    title: 'Author the New Chapter',
    description: 'Sustainable transformation is not about motivation. It is about building new neural pathways through deliberate practice. We embed the skills so they become automatic—a new, intentional default that holds even under pressure.'
  }
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress: spineProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.6']
  });

  const spineHeight = useTransform(spineProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="section" style={{ backgroundColor: 'var(--bg-color)', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Header */}
        <div className="bento-grid" style={{ marginBottom: '100px' }}>
          <div style={{ gridColumn: 'span 5' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-label"
              style={{ marginBottom: '24px' }}
            >
              The Process
            </motion.div>
            <ScrollRevealText
              className="heading-lg"
              style={{ lineHeight: 1.2 }}
              text="How the story changes."
            />
          </div>
          <div style={{ gridColumn: 'span 7' }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ fontSize: '1.25rem', opacity: 0.7, lineHeight: 1.6 }}
            >
              Change is not a moment—it is a sequence. Our three-phase methodology mirrors the way meaningful transformation actually happens, moving from recognition through interruption to permanent authorship.
            </motion.p>
          </div>
        </div>

        {/* Vertical Timeline Steps */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '80px', paddingLeft: '40px' }}>
          
          {/* Vertical Spine */}
          <div style={{
            position: 'absolute',
            top: '20px',
            bottom: '-20px',
            left: 0,
            width: '1px',
            backgroundColor: 'var(--border-subtle)',
            zIndex: 0
          }}>
            <motion.div style={{
              width: '100%',
              height: spineHeight,
              backgroundColor: 'currentColor',
              opacity: 0.4
            }} />
          </div>

          {steps.map((step, i) => {
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 80, damping: 20, delay: i * 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)',
                  gap: '40px',
                  alignItems: 'start',
                  position: 'relative',
                  paddingBottom: '20px'
                }}
              >
                {/* Node Point */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
                  style={{
                    position: 'absolute',
                    left: '-44px',
                    top: '20px',
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--text-primary)',
                    zIndex: 1
                  }}
                />

                {/* Number & Title */}
                <div>
                  <div style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    fontWeight: 700,
                    opacity: 0.35,
                    marginBottom: '16px'
                  }}>
                    {step.number}
                  </div>
                  <ScrollRevealText
                    className="heading-md"
                    style={{ lineHeight: 1.2 }}
                    text={step.title}
                  />
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.75 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{ fontSize: '1.1rem', lineHeight: 1.7, paddingTop: '32px' }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
