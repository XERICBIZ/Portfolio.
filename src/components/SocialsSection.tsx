import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './GooeySocials.css';

export default function SocialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="socials" ref={ref}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="card-header">
          <span className="card-header-label">04 · Socials</span>
          <span className="card-header-num">Connect &amp; Follow</span>
        </div>

        {/* Liquid Filter Engine */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <filter id="black-white-goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -12" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>

        <div className="menu-container">
          {/* LAYER 1: The Liquids */}
          <div className="liquid-engine">
            <div className="liquid-mass fluid-pill insta"></div>
            <div className="liquid-mass fluid-pill github"></div>
            <div className="liquid-mass fluid-pill x"></div>
            <div className="liquid-mass fluid-pill discord"></div>
            <div className="liquid-mass fluid-pill center-node"></div>
          </div>

          {/* LAYER 2: The Text Content */}
          <div className="typography-engine">
            <a href="https://www.instagram.com/stoic_xeric/" target="_blank" rel="noopener noreferrer" className="social-link insta">Instagram</a>
            <a href="https://github.com/XERICBIZ" target="_blank" rel="noopener noreferrer" className="social-link github">GitHub</a>
            <a href="https://x.com/BizXeric2416" target="_blank" rel="noopener noreferrer" className="social-link x">X / Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link discord">Discord</a>
            
            <a href="https://www.linkedin.com/in/pratyaksh-ranjan-61794b383/" target="_blank" rel="noopener noreferrer" className="social-link center-node">
              <span className="text-default">My Socials</span>
              <span className="text-hover">LinkedIn</span>
            </a>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
