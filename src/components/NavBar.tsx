import { motion } from 'framer-motion';
import {
  Home,
  User,
  Briefcase,
  Code2,
  Share2,
  Mail,
} from 'lucide-react';

interface NavBarProps {
  splitDone: boolean;
  activeSection: string;
  onNavClick: (id: string) => void;
}

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'stack', icon: Code2, label: 'Stack' },
  { id: 'socials', icon: Share2, label: 'Socials' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export default function NavBar({ splitDone, activeSection, onNavClick }: NavBarProps) {
  return (
    <motion.nav
      className="side-nav"
      initial={{ x: -80, opacity: 0 }}
      animate={splitDone ? { x: 0, opacity: 1 } : { x: -80, opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top pipe piece */}
      <div className="nav-logo-top">
        <span className="nav-pipe-glyph">|</span>
        <span className="nav-paren-glyph">(</span>
      </div>

      <div className="nav-icons">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              className={`nav-icon-btn ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => onNavClick(item.id)}
              title={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={splitDone ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} strokeWidth={1.6} />
              <span className="nav-tooltip">{item.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Bottom pipe piece */}
      <div className="nav-logo-bottom">
        <span className="nav-paren-glyph">)</span>
        <span className="nav-pipe-glyph">|</span>
      </div>
    </motion.nav>
  );
}
