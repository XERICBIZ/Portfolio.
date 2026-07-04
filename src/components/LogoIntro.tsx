import { motion } from 'framer-motion';

interface LogoIntroProps {
  onComplete: () => void;
}

export default function LogoIntro({ onComplete }: LogoIntroProps) {
  return (
    <motion.div
      className="logo-intro-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      onAnimationComplete={onComplete}
    >
      <div className="logo-text-center">
        <span className="logo-pipe logo-pipe-left">|</span>
        <span className="logo-face">(</span>
        <span className="logo-dot-eye">.</span>
        <span className="logo-o">o</span>
        <span className="logo-dot-eye">.</span>
        <span className="logo-face">)</span>
        <span className="logo-pipe logo-pipe-right">|</span>
      </div>
    </motion.div>
  );
}
