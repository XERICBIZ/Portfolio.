import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const education = [
  {
    period: '2025 — 2029',
    school: 'Indian Institute of Information Technology (IIIT) Manipur',
    degree: 'Bachelor of Technology in Computer Science',
  },
  {
    period: '2021 — 2023',
    school: 'Patna Central School',
    degree: 'Higher Secondary Education',
  },
  {
    period: '2014 — 2021',
    school: 'Vidya Vihar Residential School',
    degree: 'Secondary Education',
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="milestones" ref={ref}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="card-header">
          <span className="card-header-label">04 · Milestones</span>
          <span className="card-header-num">Achievements &amp; Education</span>
        </div>

        <div className="card-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          <div>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '24px', fontWeight: 600, color: '#f3d399', marginBottom: '20px' }}>Achievements</h3>
            <div style={{ padding: '24px', border: '1px solid var(--border-s)', borderRadius: '12px', background: 'radial-gradient(circle at top right, rgba(243, 211, 153, 0.05) 0%, transparent 50%)' }}>
              <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#f3d399', display: 'flex', alignItems: 'center', gap: '8px' }}>
                ★ BREAKTHROUGH
              </span>
              <h4 style={{ fontFamily: 'var(--display)', fontSize: '22px', fontWeight: 600, color: 'var(--white)', marginTop: '12px', marginBottom: '12px' }}>Discovered a Moving Celestial Object</h4>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--gray-2)' }}>
                Identified a previously uncatalogued moving object in deep space image datasets using machine learning algorithms for anomaly detection.
              </p>
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '24px', fontWeight: 600, color: 'var(--white)', marginBottom: '20px' }}>Education</h3>
            <div style={{ padding: '24px', border: '1px solid var(--border-s)', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {education.map((edu, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === 0 ? '#f3d399' : 'transparent', border: i === 0 ? 'none' : '1px solid var(--gray-2)', boxShadow: i === 0 ? '0 0 10px rgba(243, 211, 153, 0.5)' : 'none' }} />
                    {i !== education.length - 1 && <div style={{ width: '1px', flex: 1, background: 'var(--border-s)', marginTop: '8px' }} />}
                  </div>
                  <div style={{ paddingBottom: i !== education.length - 1 ? '16px' : '0' }}>
                    <div style={{ fontFamily: 'var(--display)', fontSize: '11px', fontWeight: 600, color: i === 0 ? '#f3d399' : 'var(--gray-2)', letterSpacing: '1px', marginBottom: '6px' }}>{edu.period}</div>
                    <div style={{ fontFamily: 'var(--display)', fontSize: '15px', fontWeight: 600, color: i === 0 ? 'var(--white)' : 'var(--gray-1)', marginBottom: '4px' }}>{edu.school}</div>
                    <div style={{ fontSize: '12px', color: 'var(--gray-2)' }}>{edu.degree}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
