import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={ref}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="card-header">
          <span className="card-header-label">05 · Let's Collaborate</span>
          <span className="card-header-num">Contact</span>
        </div>

        {/* Two-column layout */}
        <div className="contact-layout">
          {/* LEFT — big headline */}
          <div className="contact-left">
            <motion.div
              className="contact-giant"
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Got an idea?
              <span>Let's build it.</span>
            </motion.div>
          </div>

          {/* RIGHT — Send Message form */}
          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="contact-form-wrap">
              <p className="contact-form-label">Send a Message</p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="cf-field">
                  <label className="cf-label">Full Name</label>
                  <input
                    className="cf-input"
                    type="text"
                    placeholder="Pratyaksh Ranjan"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                </div>
                <div className="cf-field">
                  <label className="cf-label">Email Address</label>
                  <input
                    className="cf-input"
                    type="email"
                    placeholder="hello@example.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                  />
                </div>
                <div className="cf-field">
                  <label className="cf-label">Message</label>
                  <textarea
                    className="cf-input cf-textarea"
                    placeholder="Tell me about your idea..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                  />
                </div>
                <button className="cf-submit" type="submit">
                  {sent ? 'Sent! ✓' : <><Send size={14} /> Send Message</>}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <div className="card-footer">
          <div className="card-footer-col">
            <span className="label-xs">Based In</span>
            <span className="value-xs">Saharsa, India 🌍</span>
          </div>
          <div className="card-footer-col">
            <span className="label-xs">Available For</span>
            <span className="value-xs">Freelancer</span>
          </div>
          <div className="card-footer-col">
            <span className="label-xs">Response</span>
            <span className="value-xs">Within 24 Hours</span>
          </div>
          <div className="card-footer-col">
            <span className="label-xs">Rate</span>
            <span className="value-xs">Discuss on Call</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
