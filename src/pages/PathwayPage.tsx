import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import HowItWorks from '../components/HowItWorks';
import Reviews from '../components/Reviews';

const pathwaysContent = {
  clarity: {
    title: 'The Clarity Pathway',
    subtitle: 'Step out of the fog of indecision.',
    label: '01',
    color: '#c8b8a2',
    heroDesc: 'Create a concrete roadmap for individuals who feel capable but lack direction. Break out of parity loops and find your footing.',
    images: ['/pathway_clarity_v1.png', '/pathway_clarity_v2.png'],
    sections: [
      {
        title: 'Core Values Alignment',
        text: 'This pathway is designed for individuals who could be students, young professionals, or high-potential individuals who are capable but find themselves paralyzed by choice or lacking clear direction. If you are an overthinker, an inconsistent performer, or just exhausted from chasing someone else\'s storyline, this framework will help you break out of comparison loops and find your footing.'
      },
      {
        title: 'Ruthless Execution',
        text: 'Through practical frameworks, you will learn how to identify your core values, prioritize effectively, and convert abstract ideas into ruthless execution systems. You will walk away with the clarity, consistency, and confidence needed to make decisive choices and design realistic goals that genuinely align with your personal narrative.'
      }
    ]
  },
  resilience: {
    title: 'The Resilience Pathway',
    subtitle: 'Shift from a reactive character to an intentional author.',
    label: '02',
    color: '#9eb8b0',
    heroDesc: 'Build the psychological perspective needed to navigate plot twists. Interrupt negative thinking loops and comparison-driven stress.',
    images: ['/pathway_resilience_v1.png', '/pathway_resilience_v2.png'],
    sections: [
      {
        title: 'Cognitive Reframing',
        text: 'This pathway is built for individuals who feel stuck, frequently compare themselves to others, or feel as though life is writing to them rather than being written by them. It is specifically designed to interrupt negative thinking loops, comparison-driven stress, and an external locus of control, helping you navigate setbacks without losing your balance.'
      },
      {
        title: 'Emotional Maturity',
        text: 'By unpacking the basics of behavioral psychology and cognitive reframing, you will learn exactly how your perception dictates your emotional responses. You will develop profound emotional maturity and a stronger perspective, shifting from reactive habits to intentional thinking so you can handle uncertainty with grace and strength.'
      }
    ]
  },
  equilibrium: {
    title: 'The Equilibrium Pathway',
    subtitle: 'Break the cycle of overthinking.',
    label: '03',
    color: '#b8a89e',
    heroDesc: 'Master the skills to regulate your responses and manage stress. Decode how emotions function mechanically.',
    images: ['/pathway_equilibrium_v1.png', '/pathway_equilibrium_v2.png'],
    sections: [
      {
        title: 'Emotional Decoding',
        text: 'This pathway is tailored for individuals experiencing high levels of stress, anxiety, or emotional turbulence in their personal or professional environments. Whether you have an emotionally sensitive personality, are facing burnout, or simply struggle to maintain mental stability, this framework provides a safe space to address those overwhelming internal cycles.'
      },
      {
        title: 'Stress Regulation',
        text: 'You will decode how emotions function mechanically and learn proven techniques to actively regulate your responses and break negative thinking patterns. By mastering these self-regulation and stress-management skills, you will build the psychological resilience needed to rapidly recover from setbacks and navigate difficult emotions with deep confidence and stability.'
      }
    ]
  },
  connection: {
    title: 'The Connection Pathway',
    subtitle: 'Stop avoiding conflict and start setting boundaries.',
    label: '04',
    color: '#a8b0c2',
    heroDesc: 'Learn how to navigate difficult dialogue with confidence. Default to intentional connection over emotional reactivity.',
    images: ['/pathway_connection_v1.png', '/pathway_connection_v2.png'],
    sections: [
      {
        title: 'Conscious Communication',
        text: 'This pathway is essential for professionals, leaders, and individuals who struggle with boundary setting, avoid difficult conversations, or default to emotional reactivity. If you find yourself trapped in people-pleasing habits or lacking the frameworks to navigate tense situations, this approach will help you stop addressing it constructively.'
      },
      {
        title: 'Relationship Intelligence',
        text: 'Through the mastery of active listening, assertiveness, and conscious communication models, you will learn how to articulate your needs clearly without emotional volatility. You will gain total confidence in your conversational skills, developing the relationship intelligence required to foster deeply healthy, intentional connections in every chapter of your life.'
      }
    ]
  }
};

const inputStyle = {
  width: '100%',
  padding: '12px 0',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(0,0,0,0.1)',
  color: '#000',
  fontSize: '1rem',
  fontFamily: 'var(--font-sans)',
  outline: 'none',
  transition: 'border-color 0.3s'
};

export default function PathwayPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = pathwaysContent[slug as keyof typeof pathwaysContent];

  if (!content) return <div>Pathway not found</div>;

  return (
    <div className="app-container dark-theme" style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#000', color: '#fff' }}>
      <Nav />

      {/* Floating Pathway Badge */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          position: 'fixed',
          right: '24px',
          top: '50%',
          transform: 'translateY(-50%) rotate(90deg)',
          zIndex: 9000,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          transformOrigin: 'right center',
          pointerEvents: 'none',
        }}
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          backgroundColor: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderRadius: '9999px',
          border: `1px solid ${content.color}50`,
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            backgroundColor: content.color, display: 'inline-block', flexShrink: 0
          }} />
          <span style={{
            fontSize: '0.6rem', letterSpacing: '0.15em', fontWeight: 700,
            color: '#fff', opacity: 0.9, textTransform: 'uppercase' as const,
            whiteSpace: 'nowrap' as const
          }}>
            Pathway {content.label} · {content.title.replace('The ', '').replace(' Pathway', '')}
          </span>
        </div>
      </motion.div>
      
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '200px' }}>
        <div className="container" style={{ width: '100%' }}>
          <div className="bento-grid">
            <div style={{ gridColumn: 'span 7' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-label"
                style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <span style={{
                  display: 'inline-block', width: '8px', height: '8px',
                  borderRadius: '50%', backgroundColor: content.color
                }} />
                PATHWAY {content.label}
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="heading-xl"
                style={{ lineHeight: 1.1, marginBottom: '40px' }}
              >
                {content.title}
              </motion.h1>
            </div>
            <div style={{ gridColumn: 'span 5', textAlign: 'right' }}>
               <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '400px', marginLeft: 'auto' }}
              >
                {content.subtitle}
              </motion.p>
            </div>
          </div>

          <div className="bento-grid" style={{ marginTop: '60px' }}>
            <div style={{ gridColumn: 'span 5' }}>
              <div className="text-label">Overview</div>
            </div>
            <div style={{ gridColumn: 'span 7' }}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ fontSize: '1.4rem', lineHeight: 1.6, opacity: 0.9 }}
              >
                {content.heroDesc}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Blocks */}
      {content.sections.map((section, i) => (
        <section key={i} className="section" style={{ 
          backgroundImage: `url(${content.images[i] || content.images[0]})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* Overlay */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 0 }} />
          
          {/* Pathway tagline watermark */}
          <div style={{
            position: 'absolute',
            bottom: '32px',
            right: '5vw',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: 0.4
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: content.color, display: 'inline-block' }} />
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', fontWeight: 600, color: '#fff', textTransform: 'uppercase' as const }}>
              {content.title} · {content.label}
            </span>
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 1, color: 'white' }}>
            <div className="bento-grid">
              <div style={{ gridColumn: 'span 8' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-label"
                  style={{ marginBottom: '24px', color: content.color, opacity: 0.9 }}
                >
                  {content.title} · Phase {i + 1}
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="heading-lg"
                  style={{ color: 'white', marginBottom: '40px' }}
                >
                  {section.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <p style={{ fontSize: '1.25rem', lineHeight: 1.6, opacity: 0.9, marginBottom: '40px' }}>
                    {section.text}
                  </p>
                  <a href="#pathway-form" className="button" style={{ 
                    backgroundColor: 'white', 
                    color: 'black', 
                    border: 'none', 
                    display: 'inline-block',
                    padding: '16px 32px'
                  }}>
                    Begin This Pathway
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Extra sections */}
      <div>
        <Reviews />
        <HowItWorks />
      </div>

      {/* Pathway-specific Contact Form */}
      <section id="pathway-form" className="section" style={{ backgroundColor: '#0c0c0c', color: '#fff', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            
            {/* Left: context copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Pathway pill */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                border: `1px solid ${content.color}60`,
                backgroundColor: `${content.color}18`,
                marginBottom: '32px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: content.color, display: 'inline-block' }} />
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', fontWeight: 700, color: '#000', opacity: 0.7, textTransform: 'uppercase' as const }}>
                  Pathway {content.label} · {content.title.replace('The ', '')}
                </span>
              </div>

              <div className="text-label" style={{ marginBottom: '24px', opacity: 0.6, color: '#fff' }}>Begin Here</div>
              <h2 className="heading-lg" style={{ marginBottom: '32px', lineHeight: 1.1, color: '#fff' }}>
                Ready to start<br />{content.title}?
              </h2>
              <p style={{ fontSize: '1.15rem', opacity: 0.7, lineHeight: 1.7, marginBottom: '48px', color: '#fff' }}>
                {content.subtitle} Share a few details and we will reach out to schedule your first session.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <div className="text-label" style={{ fontSize: '0.65rem', marginBottom: '8px', opacity: 0.5, color: '#fff' }}>Email</div>
                  <a href="mailto:selinapattnaik.8@gmail.com" style={{ fontSize: '1rem', color: '#fff' }}>selinapattnaik.8@gmail.com</a>
                </div>
                <div>
                  <div className="text-label" style={{ fontSize: '0.65rem', marginBottom: '8px', opacity: 0.5, color: '#fff' }}>Phone</div>
                  <div style={{ fontSize: '1rem', color: '#fff' }}>+91 9004390019</div>
                </div>
              </div>
            </motion.div>

            {/* Right: form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bento-card"
                style={{ backgroundColor: '#fff', color: '#000' }}
              >
              <form style={{ display: 'flex', flexDirection: 'column', gap: '28px' }} onSubmit={e => e.preventDefault()}>
                
                {/* Pre-selected pathway indicator inside form */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  backgroundColor: `${content.color}18`,
                  borderRadius: '8px',
                  border: `1px solid ${content.color}40`
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: content.color, display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', fontWeight: 600, color: '#000', opacity: 0.6, textTransform: 'uppercase' as const }}>
                    You have selected: {content.title}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                  <input type="text" placeholder="Name" style={inputStyle} />
                  <input type="email" placeholder="Email" style={inputStyle} />
                </div>
                <input type="tel" placeholder="Phone Number" style={inputStyle} />
                
                {/* How can we help – updated options */}
                <div style={{ position: 'relative' }}>
                  <select style={{ ...inputStyle, cursor: 'pointer', appearance: 'none', width: '100%' }}>
                    <option value="" disabled>How can we help?</option>
                    <option value="individual">Individual Therapy &amp; Coaching</option>
                    <option value="corporate">Corporate Training &amp; Nurturing</option>
                    <option value="workshop">Exclusive Workshops &amp; Events</option>
                  </select>
                  <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: 0.4 }}>↓</div>
                </div>

                {/* Second dropdown: preferred format */}
                <div style={{ position: 'relative' }}>
                  <select style={{ ...inputStyle, cursor: 'pointer', appearance: 'none', width: '100%' }}>
                    <option value="" disabled>Preferred format</option>
                    <option value="1:1">One-on-one Sessions</option>
                    <option value="group">Small Group Programme</option>
                    <option value="intensive">Intensive Weekend Retreat</option>
                    <option value="online">Online &amp; Remote</option>
                  </select>
                  <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: 0.4 }}>↓</div>
                </div>

                <textarea 
                  placeholder={`Tell us about your relationship with ${content.subtitle.toLowerCase().replace('.', '')} and what you are hoping to shift.`}
                  rows={4}
                  style={{ ...inputStyle, resize: 'none' }}
                />

                <button className="button" style={{ 
                  backgroundColor: '#000', color: '#fff', 
                  border: 'none', marginTop: '8px', width: '100%', padding: '18px'
                }}>
                  Begin {content.title.replace('The ', '')}
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .pathway-form-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Slim pathway footer — no Epilogue or Blank Page sections */}
      <footer style={{
        backgroundColor: '#f7f9f6',
        color: '#000',
        padding: '48px 5vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap' as const,
        gap: '16px',
        borderTop: '1px solid rgba(0,0,0,0.06)'
      }}>
        <div style={{ fontSize: '0.75rem', opacity: 0.4, letterSpacing: '0.08em' }}>© {new Date().getFullYear()} The Wise 8</div>
        <div style={{ display: 'flex', gap: '32px', fontSize: '0.75rem', opacity: 0.5 }}>
          <a href="mailto:selinapattnaik.8@gmail.com" style={{ color: '#000' }}>selinapattnaik.8@gmail.com</a>
          <span>+91 9004390019</span>
        </div>
      </footer>
    </div>
  );
}
