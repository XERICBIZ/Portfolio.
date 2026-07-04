import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Code2, Share2, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero',       icon: Home,     label: 'Home' },
  { id: 'about',      icon: User,     label: 'About' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'stack',      icon: Code2,    label: 'Stack' },
  { id: 'socials',    icon: Share2,   label: 'Socials' },
  { id: 'contact',    icon: Mail,     label: 'Contact' },
];

interface BottomNavProps {
  visible: boolean;
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function BottomNav({ visible, activeSection, onNavClick }: BottomNavProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="bottom-nav"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          {/* Left logo glyph — the |( remnant */}
          <span className="bnav-logo-glyph bnav-logo-left">
            <span className="bnav-pipe">|</span>
            <span className="bnav-paren">(</span>
          </span>

          {/* Nav icons */}
          <div className="bnav-icons">
            {navItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  className={`bnav-btn ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => onNavClick(item.id)}
                  title={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.06 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={17} strokeWidth={1.6} />
                  <span className="bnav-label">{item.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Right logo glyph — the )| remnant */}
          <span className="bnav-logo-glyph bnav-logo-right">
            <span className="bnav-paren">)</span>
            <span className="bnav-pipe">|</span>
          </span>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
