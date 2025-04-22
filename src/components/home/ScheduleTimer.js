'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/ScheduleTimer.module.css';
import { BsFillCalendarFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const ScheduleTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const targetDate = new Date('September 1, 2024 00:00:00').getTime();
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };
    
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Animasyon varyantları
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        when: "beforeChildren", 
        staggerChildren: 0.2 
      } 
    }
  };
  
  const boxVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      } 
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 0.8,
        type: "spring",
        stiffness: 200
      } 
    },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    }
  };

  if (!isClient) {
    return (
      <section className={styles.scheduleTimerContainer}>
        <h2 className={styles.timerTitle}>Yeni Dönem Kayıtları Başlıyor</h2>
        <p className={styles.timerDescription}>
          Özel ders programımıza kayıt olmak için geri sayım başladı. Kontenjanlar sınırlı, hemen yerinizi ayırtın!
        </p>
        <div className={styles.timerWrapper}>
          <div className={styles.timerBox}>
            <div className={styles.timerValue}>00</div>
            <div className={styles.timerLabel}>Gün</div>
          </div>
          <div className={styles.timerDivider}>:</div>
          <div className={styles.timerBox}>
            <div className={styles.timerValue}>00</div>
            <div className={styles.timerLabel}>Saat</div>
          </div>
          <div className={styles.timerDivider}>:</div>
          <div className={styles.timerBox}>
            <div className={styles.timerValue}>00</div>
            <div className={styles.timerLabel}>Dakika</div>
          </div>
          <div className={styles.timerDivider}>:</div>
          <div className={styles.timerBox}>
            <div className={styles.timerValue}>00</div>
            <div className={styles.timerLabel}>Saniye</div>
          </div>
        </div>
        <div className={styles.cta}>
          <Link href="/kayit" className={styles.primaryButton}>
            Hemen Kaydol <span className={styles.btnArrow}>→</span>
          </Link>
        </div>
      </section>
    );
  }
  
  return (
    <motion.section 
      className={styles.scheduleTimerContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 
        className={styles.timerTitle}
        variants={textVariants}
      >
        Yeni Dönem Kayıtları Başlıyor
      </motion.h2>
      
      <motion.p 
        className={styles.timerDescription}
        variants={textVariants}
      >
        Özel ders programımıza kayıt olmak için geri sayım başladı. Kontenjanlar sınırlı, hemen yerinizi ayırtın!
      </motion.p>
      
      <div className={styles.timerWrapper}>
        <motion.div className={styles.timerBox} variants={boxVariants}>
          <div className={styles.timerValue}>{timeLeft.days.toString().padStart(2, '0')}</div>
          <div className={styles.timerLabel}>Gün</div>
        </motion.div>
        
        <div className={styles.timerDivider}>:</div>
        
        <motion.div className={styles.timerBox} variants={boxVariants}>
          <div className={styles.timerValue}>{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className={styles.timerLabel}>Saat</div>
        </motion.div>
        
        <div className={styles.timerDivider}>:</div>
        
        <motion.div className={styles.timerBox} variants={boxVariants}>
          <div className={styles.timerValue}>{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className={styles.timerLabel}>Dakika</div>
        </motion.div>
        
        <div className={styles.timerDivider}>:</div>
        
        <motion.div className={styles.timerBox} variants={boxVariants}>
          <div className={styles.timerValue}>{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className={styles.timerLabel}>Saniye</div>
        </motion.div>
      </div>
      
      <motion.div 
        className={styles.cta}
        variants={buttonVariants}
      >
        <Link href="/kayit">
          <motion.button 
            className={styles.primaryButton}
            whileHover="hover"
          >
            Hemen Kaydol <span className={styles.btnArrow}>→</span>
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default ScheduleTimer; 