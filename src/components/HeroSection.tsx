import { motion } from 'framer-motion';
import pratyakshPhoto from '../assets/pratyaksh.png';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1, y: 0,
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function HeroSection() {
  return (
    <section id="hero">
      <motion.div
        className="hero-card"
        variants={{ hidden: {}, show: {} }}
        initial="hidden"
        animate="show"
      >
        {/* Card top label */}
        <div className="card-header">
          <span className="card-header-label">Portfolio · |(.o.)|</span>
          <span className="card-header-num">2024 — 2025</span>
        </div>

        {/* Main content row: name + photo */}
        <div className="hero-main-row">
          <div className="hero-text-col">
            {/* Giant name — fills card width like the reference */}
            <div className="hero-name-area">
              <h1 className="hero-giant-name">Pratyaksh Ranjan</h1>
            </div>

            {/* Role + tagline sub-row */}
            <motion.div className="hero-sub-row" variants={fadeUp(0.15)}>
              <span className="hero-role-badge">Full-Stack Dev</span>
              <span className="hero-role-badge">ML Research</span>
              <span className="hero-role-badge">Open Source</span>
              <span className="hero-tagline">Code. Create. Ascend.</span>
            </motion.div>
          </div>

          {/* Photo — positioned bottom-right like the reference */}
          <motion.div
            className="hero-photo-wrap"
            variants={fadeUp(0.1)}
          >
            <img
              src={pratyakshPhoto}
              alt="Pratyaksh Ranjan"
              className="hero-photo"
            />
          </motion.div>
        </div>

        {/* Footer metadata row — exactly like the reference */}
        <motion.div className="card-footer" variants={fadeUp(0.25)}>
          <div className="card-footer-col">
            <span className="label-xs">Name</span>
            <span className="value-xs">Pratyaksh Ranjan</span>
          </div>
          <div className="card-footer-col">
            <span className="label-xs">Mail:</span>
            <span className="value-xs">ranjanpratyaksh121@gmail.com</span>
          </div>
          <div className="card-footer-col">
            <span className="label-xs">IG &amp; Socials:</span>
            <span className="value-xs">@stoic_xeric</span>
          </div>
          <div className="card-footer-col">
            <span className="label-xs">Role</span>
            <span className="value-xs">作品集 · Portfolio</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
