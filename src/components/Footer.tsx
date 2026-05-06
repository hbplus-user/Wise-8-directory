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

export default function Footer() {
  return (
    <>
      {/* The Cliffhanger */}
      <section className="section" style={{ backgroundColor: '#0c0c0c', color: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-label"
            style={{ marginBottom: '32px', color: 'rgba(255,255,255,0.5)' }}
          >
            The Epilogue
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-lg"
            style={{ color: '#fff', marginBottom: '48px' }}
          >
            This is the end of the <br/> prologue.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '1.4rem', opacity: 0.7, marginBottom: '64px', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto 64px' }}
          >
            The burnout, the autopilot, the feeling of being stuck—that wasn't the whole story. That was just the prologue. The page is turning. The psychological frameworks are waiting.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <a href="#contact" className="button outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
              Write the next chapter 
            </a>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="section" style={{ 
        backgroundImage: 'linear-gradient(rgba(12,12,12,0.85), rgba(12,12,12,0.85)), url(/footer_bg.png)', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundColor: '#0c0c0c',
        color: '#fff', 
        borderTop: 'none',
        position: 'relative'
      }}>
        <div className="container">
          <div className="footer-grid">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
            >
              <div className="text-label" style={{ marginBottom: '24px', color: 'rgba(255,255,255,0.5)' }}>The Blank Page</div>
              <h2 className="heading-lg" style={{ color: '#fff', marginBottom: '48px', lineHeight: 1.1 }}>
                Ready to outline your next chapter?
              </h2>
              <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', opacity: 0.7, marginBottom: '64px', lineHeight: 1.6, width: '100%', color: '#fff' }}>
                Whether you are seeking individual clarity or aiming to rewrite your team's culture, the next chapter starts with a conversation.
              </motion.p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
                <motion.div variants={itemVariants}>
                  <div className="text-label" style={{ fontSize: '0.65rem', marginBottom: '12px', color: 'rgba(255,255,255,0.5)' }}>Email Us</div>
                  <a href="mailto:selinapattnaik.8@gmail.com" style={{ fontSize: '1.2rem', color: '#fff' }}>selinapattnaik.8@gmail.com</a>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <div className="text-label" style={{ fontSize: '0.65rem', marginBottom: '12px', color: 'rgba(255,255,255,0.5)' }}>Call Us</div>
                  <div style={{ fontSize: '1.2rem', color: '#fff' }}>+91 9004390019</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bento-card footer-form-card"
              style={{ backgroundColor: '#ffffff', color: '#000', width: '100%', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
            >
              <form style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} onSubmit={e => e.preventDefault()}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                  <input type="text" placeholder="Name" style={inputStyleLight} />
                  <input type="email" placeholder="Email" style={inputStyleLight} />
                </div>
                <input type="tel" placeholder="Phone Number" style={inputStyleLight} />
                
                <div style={{ position: 'relative' }}>
                  <select style={{ ...inputStyleLight, cursor: 'pointer', appearance: 'none', width: '100%' }}>
                    <option value="" disabled selected>How can we help?</option>
                    <option value="1">Individual Therapy & Coaching</option>
                    <option value="2">Corporate Training &amp; Nurturing</option>
                    <option value="3">Exclusive Workshops &amp; Events</option>
                  </select>
                  <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: 0.4 }}>↓</div>
                </div>

                <textarea 
                  placeholder="Tell us about the chapter you are currently in." 
                  rows={4}
                  style={{ ...inputStyleLight, resize: 'none' }}
                ></textarea>

                <button className="button" style={{ 
                  backgroundColor: '#000', color: '#fff', 
                   border: 'none', marginTop: '12px', width: '100%', padding: '20px'
                }}>
                  Start Dialogue
                </button>
              </form>
            </motion.div>
          </div>
          
          <div style={{ marginTop: '120px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.5, fontSize: '0.7rem', color: '#fff' }}>
             <div>© {new Date().getFullYear()} The Wise 8. All rights reserved.</div>
             <div style={{ display: 'flex', gap: '24px' }}>
               <a href="#" style={{ color: '#fff' }}>Privacy Policy</a>
               <a href="#" style={{ color: '#fff' }}>Terms of Service</a>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}

const inputStyleLight = {
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
