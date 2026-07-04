import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function StackSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="stack" ref={ref}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="card-header">
          <span className="card-header-label">03 · Technical Arsenal</span>
          <span className="card-header-num">Skills &amp; Tools</span>
        </div>

        <div className="systems-grid">

          {/* Frontend Orbit */}
          <div className="solar-system">
            <div className="center-star">Frontend</div>
            <div className="orbit-ring">
              <div className="skill-wrapper pos-top">
                <div className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" /></div>
              </div>
              <div className="skill-wrapper pos-right">
                <div className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" /></div>
              </div>
              <div className="skill-wrapper pos-bottom">
                <div className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS" /></div>
              </div>
              <div className="skill-wrapper pos-left">
                <div className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" /></div>
              </div>
            </div>
          </div>

          {/* Backend Orbit */}
          <div className="solar-system">
            <div className="center-star">Backend</div>
            <div className="orbit-ring">
              <div className="skill-wrapper pos-top"><div className="empty-badge"></div></div>
              <div className="skill-wrapper pos-right"><div className="empty-badge"></div></div>
              <div className="skill-wrapper pos-bottom"><div className="empty-badge"></div></div>
              <div className="skill-wrapper pos-left"><div className="empty-badge"></div></div>
            </div>
          </div>

          {/* ML Orbit */}
          <div className="solar-system" style={{ width: '280px', height: '280px' }}>
            <div className="center-star" style={{ fontSize: '1rem' }}>ML</div>
            
            <div className="orbit-ring" style={{ width: '50%', height: '50%', animation: 'spin 10s linear infinite' }}>
              <div className="skill-wrapper pos-top"><div className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" /></div></div>
              <div className="skill-wrapper pos-right"><div className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" alt="NumPy" /></div></div>
              <div className="skill-wrapper pos-bottom"><div className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" /></div></div>
              <div className="skill-wrapper pos-left"><div className="skill-badge"><img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" alt="Matplotlib" /></div></div>
            </div>

            <div className="orbit-ring" style={{ width: '100%', height: '100%', borderColor: '#222', animation: 'spin 25s linear infinite reverse' }}>
              <div className="skill-wrapper pos-top"><div className="skill-badge" style={{ fontSize: '0.55rem' }}>Superv.</div></div>
              <div className="skill-wrapper pos-right"><div className="skill-badge" style={{ fontSize: '0.55rem' }}>Unsup.</div></div>
              <div className="skill-wrapper pos-bottom"><div className="skill-badge"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="SQL" /></div></div>
              <div className="skill-wrapper pos-left"><div className="skill-badge" style={{ fontSize: '0.55rem' }}>Stats</div></div>
              <div className="skill-wrapper" style={{ top: '20%', left: '80%' }}><div className="skill-badge" style={{ fontSize: '0.5rem' }}>Tuning</div></div>
            </div>
          </div>

          {/* DevOps Orbit */}
          <div className="solar-system">
            <div className="center-star">DevOps</div>
            <div className="orbit-ring">
              <div className="skill-wrapper pos-top"><div className="empty-badge"></div></div>
              <div className="skill-wrapper pos-right"><div className="empty-badge"></div></div>
              <div className="skill-wrapper pos-bottom"><div className="empty-badge"></div></div>
              <div className="skill-wrapper pos-left"><div className="empty-badge"></div></div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
