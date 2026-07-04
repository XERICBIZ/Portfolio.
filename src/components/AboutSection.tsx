import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import MetaBalls from './MetaBalls';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
});

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref}>
      {/* ── About body card ─── */}
      <motion.div
        className="card"
        style={{ position: 'relative', overflow: 'hidden' }}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {/* MetaBalls — absolutely pinned to top-right corner below header */}
        <div style={{
          position: 'absolute',
          top: '40px',
          right: '0',
          width: '420px',
          height: '300px',
          zIndex: 0,
          pointerEvents: 'none',
        }}>
          <MetaBalls
            color="#ffffff"
            cursorBallColor="#ffffff"
            cursorBallSize={2}
            ballCount={9}
            animationSize={39}
            enableMouseInteraction={false}
            enableTransparency={true}
            hoverSmoothness={0.15}
            clumpFactor={1}
            speed={0.4}
          />
        </div>

        <div className="card-header">
          <span className="card-header-label">01 · About Me</span>
          <span className="card-header-num">Introduction</span>
        </div>

        <div className="card-inner" style={{ position: 'relative', zIndex: 1 }}>
          <p className="about-body-text">
            I'm a B.Tech student and aspiring full-stack developer passionate about building modern, user-focused web applications.
            I enjoy turning ideas into clean, responsive, and scalable digital experiences while continuously improving my skills in software development and problem-solving.
          </p>
          <p className="about-body-text" style={{ marginTop: '1.2rem' }}>
            Alongside full-stack development, I've completed Machine Learning and enjoy exploring how intelligent systems can solve real-world problems. I'm continuously learning Data Structures &amp; Algorithms, modern web technologies, cloud computing, and UI/UX design, with the goal of building impactful, high-quality software that delivers great user experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
