'use client';
import { motion } from 'framer-motion';
import styles from '../../styles/TextLogo.module.css';

const TextLogo = () => {
  return (
    <motion.div 
      className={styles.logo}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <span className={styles.logoMain}>Özel Ders</span>
      <span className={styles.logoTagline}>Kaliteli Eğitim, Başarılı Gelecek</span>
    </motion.div>
  );
};

export default TextLogo; 