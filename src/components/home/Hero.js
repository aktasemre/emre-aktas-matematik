'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Hero.module.css';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [animateCount, setAnimateCount] = useState(false);
  const [studentsCount, setStudentsCount] = useState(0);
  const [teachersCount, setTeachersCount] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setIsLoaded(true);
    setIsMounted(true);

    // Sayaç animasyonu için zamanlayıcı
    const timer = setTimeout(() => {
      setAnimateCount(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Sayaç animasyonu
  useEffect(() => {
    if (animateCount && isClient) {
      const studentsInterval = setInterval(() => {
        setStudentsCount(prev => {
          if (prev < 5000) return prev + 100;
          clearInterval(studentsInterval);
          return 5000;
        });
      }, 20);

      const teachersInterval = setInterval(() => {
        setTeachersCount(prev => {
          if (prev < 200) return prev + 4;
          clearInterval(teachersInterval);
          return 200;
        });
      }, 30);

      return () => {
        clearInterval(studentsInterval);
        clearInterval(teachersInterval);
      };
    }
  }, [animateCount, isClient]);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2 + 0.8,
        duration: 0.5
      }
    })
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.03, 1],
    transition: {
      duration: 3, 
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Sunucu tarafında varsayılan değerler
  const defaultContent = (
    <section className={styles.hero}>
      <div className={styles.backgroundEffect}>
        <div className={styles.gradientCircle1}></div>
        <div className={styles.gradientCircle2}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Emre Aktaş ile <span className={styles.highlight}>Kişiselleştirilmiş</span> Eğitim
          </h1>
          <p className={styles.subtitle}>
            Türkiye'nin en iyi üniversitelerinden mezun, deneyimli öğretmenlerimizle birebir özel dersler.
            Sınavlara hazırlık, okul derslerinde destek veya yeni beceriler edinmek için yanınızdayız.
          </p>
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>0+</div>
              <div className={styles.statLabel}>Öğrenci</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>0+</div>
              <div className={styles.statLabel}>Eğitmen</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>%98</div>
              <div className={styles.statLabel}>Memnuniyet</div>
            </div>
          </div>
          <div className={styles.cta}>
            <Link href="/talep" className={`${styles.primaryBtn} ${styles.glowEffect}`}>
              <span>Özel Ders Talebi Oluştur</span>
            </Link>
            <Link href="/dersler" className={styles.secondaryBtn}>
              Ders Programlarını Keşfet
            </Link>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <div className={styles.overlay}></div>
          </div>
        </div>
      </div>
    </section>
  );

  // Client tarafında animasyonlu içerik
  const clientContent = (
    <section className={styles.hero}>
      <div className={styles.backgroundEffect}>
        <div className={styles.gradientCircle1}></div>
        <div className={styles.gradientCircle2}></div>
      </div>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.h1 className={styles.title} variants={titleVariants}>
            Emre Aktaş ile <motion.span className={styles.highlight} variants={highlightVariants}>Kişiselleştirilmiş</motion.span> Eğitim
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            custom={1}
            variants={fadeInVariants}
          >
            Türkiye'nin en iyi üniversitelerinden mezun, deneyimli öğretmenlerimizle birebir özel dersler. 
            Hedeflerinize özel oluşturulan **yapılandırılmış haftalık planlar** ve yakın takip ile sınavlara (LGS/YKS) ve okul derslerine hazırlanın.
          </motion.p>

          <motion.div 
            className={styles.statsBar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className={styles.statItem}>
              <div className={styles.statValue}>{studentsCount.toLocaleString()}+</div>
              <div className={styles.statLabel}>Öğrenci</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>{teachersCount}+</div>
              <div className={styles.statLabel}>Eğitmen</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>%98</div>
              <div className={styles.statLabel}>Memnuniyet</div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.cta}
            custom={2}
            variants={fadeInVariants}
          >
            <Link href="/talep" className={`${styles.primaryBtn} ${styles.glowEffect}`}>
              <span>Özel Ders Talebi Oluştur</span>
              <motion.span 
                className={styles.btnArrow}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
            <Link href="/dersler" className={styles.secondaryBtn}>
              Ders Programlarını Keşfet
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.imageWrapper}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <motion.div 
            className={styles.decorationElement1}
            animate={floatingAnimation}
          ></motion.div>
          <motion.div 
            className={styles.decorationElement2} 
            animate={pulseAnimation}
          ></motion.div>
          
          <div className={styles.imageContainer}>
            <motion.div 
              className={styles.imageBg}
              animate={{
                borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <div className={styles.overlay}></div>
            {isMounted && (
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Emre Aktaş - Profesyonel Özel Ders Eğitmeni"
                width={600}
                height={700}
                className={styles.heroImage}
                priority
              />
            )}
          </div>
          
          <motion.div 
            className={styles.badge}
            animate={floatingAnimation}
          >
            <span className={styles.years}>10+</span>
            <span className={styles.text}>Yıllık Deneyim</span>
          </motion.div>
          
          <motion.div 
            className={styles.featuredBadge}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <svg viewBox="0 0 24 24" className={styles.starIcon} fill="#FFD700">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span>En Çok Tercih Edilen</span>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span>Aşağı Kaydır</span>
        <motion.div 
          className={styles.scrollArrow}
          animate={{ 
            y: [0, 10, 0], 
            opacity: [0.6, 1, 0.6] 
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );

  return isClient ? clientContent : defaultContent;
};

export default Hero; 