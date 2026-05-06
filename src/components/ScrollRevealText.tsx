import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const Char = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [5, 0]);
  const blur = useTransform(progress, range, [5, 0]);

  return (
    <motion.span 
      style={{ 
        opacity, 
        y,
        filter: useTransform(blur, b => `blur(${b}px)`),
        display: 'inline-block',
        willChange: 'opacity, filter, transform'
      }}
    >
      {children}
    </motion.span>
  );
};

export default function ScrollRevealText({ text, className = "", style }: ScrollRevealTextProps) {
  const container = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.85", "start 0.25"]
  });

  const words = text.split(" ");
  let charIndex = 0;
  const totalChars = text.replace(/\s/g, '').length;

  return (
    <p 
      ref={container} 
      className={className} 
      style={{ display: 'flex', flexWrap: 'wrap', columnGap: '0.25em', rowGap: '0em', ...style }}
    >
      {words.map((word, w_i) => {
        return (
          <span key={w_i} style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
            {word.split("").map((char, c_i) => {
              const step = 1 / totalChars;
              const start = charIndex * step;
              const end = start + step * 8; // generous overlap for fluidity
              charIndex++;
              return (
                <Char key={c_i} progress={scrollYProgress} range={[start, Math.min(end, 1)]}>
                  {char}
                </Char>
              );
            })}
          </span>
        );
      })}
    </p>
  );
}
