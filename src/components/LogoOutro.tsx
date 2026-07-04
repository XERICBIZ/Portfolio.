import { motion } from 'framer-motion';

interface LogoOutroProps {
  visible: boolean;
}

export default function LogoOutro({ visible }: LogoOutroProps) {
  return (
    <motion.div
      className="logo-outro-overlay"
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      style={{ pointerEvents: visible ? 'all' : 'none' }}
    >
      <motion.div
        className="logo-outro-text"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={visible ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Pieces animate in from outside */}
        <motion.span
          className="outro-pipe"
          initial={{ x: -120, opacity: 0 }}
          animate={visible ? { x: 0, opacity: 1 } : { x: -120, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >|</motion.span>

        <motion.span
          className="outro-paren"
          initial={{ x: -80, opacity: 0 }}
          animate={visible ? { x: 0, opacity: 1 } : { x: -80, opacity: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >(</motion.span>

        <motion.span
          className="outro-dot"
          initial={{ y: -50, opacity: 0 }}
          animate={visible ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >.</motion.span>

        <motion.span
          className="outro-o"
          initial={{ scale: 2, opacity: 0 }}
          animate={visible ? { scale: 1, opacity: 1 } : { scale: 2, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >o</motion.span>

        <motion.span
          className="outro-dot"
          initial={{ y: 50, opacity: 0 }}
          animate={visible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >.</motion.span>

        <motion.span
          className="outro-paren"
          initial={{ x: 80, opacity: 0 }}
          animate={visible ? { x: 0, opacity: 1 } : { x: 80, opacity: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >)</motion.span>

        <motion.span
          className="outro-pipe"
          initial={{ x: 120, opacity: 0 }}
          animate={visible ? { x: 0, opacity: 1 } : { x: 120, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >|</motion.span>
      </motion.div>

      <motion.p
        className="outro-tagline"
        initial={{ opacity: 0, y: 10 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        Thanks for scrolling ✦
      </motion.p>
    </motion.div>
  );
}
