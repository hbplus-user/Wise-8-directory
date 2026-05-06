import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const reviews = [
  {
    content: "I can't express enough gratitude for the incredible support and guidance I've received in just a few sessions. In such a short time, Selina has helped me make meaningful progress on my personal journey. Her empathetic, insightful, and patient approach created a safe space where I felt heard and understood from the start. I highly recommend her to anyone seeking professional expertise.",
    author: "Shivani Baddi",
    title: "Team Lead in Client Servicing"
  },
  {
    content: "I just wanted to again say, THANK YOU. After the session with you and the days that followed, I am feeling so light, and also so much more positive! Thank you for everything you do and are doing! I am just very thankful!",
    author: "Anonymous Client",
    title: "Therapy journey"
  },
  {
    content: "With Selina, I've felt understood from the start. I'm so grateful for finding her and I highly recommend her to anyone who's seeking professional help.",
    author: "Dakshaini Pathi",
    title: "Copywriter"
  }
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-color)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '10px' }}>Reader Reviews</h2>
          <p style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>The results of a rewritten life.</p>
        </div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', textAlign: 'center', minHeight: '350px', padding: '0 8px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              style={{ position: 'absolute', width: '100%', top: 0, left: 0, padding: '0 56px' }}
            >
              <div style={{ fontSize: 'clamp(1rem, 2vw, 1.45rem)', fontFamily: 'var(--font-serif)', lineHeight: 1.3, marginBottom: '40px', fontStyle: 'italic', color: 'var(--text-primary)' }}>
                "{reviews[current].content}"
              </div>
              
              <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.05em' }}>{reviews[current].author}</div>
                <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginTop: '5px' }}>{reviews[current].title}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div style={{
            position: 'absolute', top: '40%', left: '-4px', transform: 'translateY(-50%)',
            cursor: 'pointer', opacity: 0.5, padding: '10px'
          }} onClick={prev}><ChevronLeft size={32} /></div>

          <div style={{
            position: 'absolute', top: '40%', right: '-4px', transform: 'translateY(-50%)',
            cursor: 'pointer', opacity: 0.5, padding: '10px'
          }} onClick={next}><ChevronRight size={32} /></div>
        </div>
      </div>
    </section>
  );
}
