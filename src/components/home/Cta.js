'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import styles from '@/styles/Cta.module.css';

const Cta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });

  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(227, 6, 19, 0.3)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className={styles.cta} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.wrapper}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className={styles.content} variants={childVariants}>
            <h2 className={styles.title}>Akademik Başarı İçin İlk Adımı Atın</h2>
            <p className={styles.subtitle}>
              Yapılandırılmış ders metodolojimiz, kişiselleştirilmiş haftalık planlarımız ve 
              esnek ders saatlerimiz ile öğrencilerimizin hedeflerine (LGS/YKS ve okul başarısı) ulaşmalarını sağlıyoruz.
            </p>
            <div className={styles.teacherProfile}>
              <div className={styles.teacherAvatar}>
                {isMounted && (
                  <Image 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=774&h=774&q=80"
                    alt="Emre Aktaş - Özel Ders Uzmanı"
                    width={100}
                    height={100}
                    className={styles.avatar}
                    priority
                  />
                )}
              </div>
              <div className={styles.teacherInfo}>
                <h3 className={styles.teacherName}>Emre Aktaş</h3>
                <p className={styles.teacherTitle}>Özel Ders Uzmanı</p>
                <div className={styles.teacherStats}>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>500+</span>
                    <span className={styles.statLabel}>Öğrenci</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>10+</span>
                    <span className={styles.statLabel}>Yıl Deneyim</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.actions}>
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <Link href="/talep" className={styles.primaryBtn}>
                  <span>Özel Ders Talebi Oluştur</span>
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </motion.svg>
                </Link>
              </motion.div>
              <Link href="/iletisim" className={styles.secondaryBtn}>
                Bize Ulaşın
              </Link>
            </div>
          </motion.div>
          <motion.div className={styles.features} variants={childVariants}>
            <motion.div className={styles.feature} variants={childVariants}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>İlk Ders Garantisi</h3>
                <p className={styles.featureDescription}>
                  İlk dersten memnun kalmazsanız ücret iadesi veya yeni bir eğitmen ile eşleştirme garantisi
                </p>
              </div>
            </motion.div>
            
            <motion.div className={styles.feature} variants={childVariants}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Esnek Ders Saatleri</h3>
                <p className={styles.featureDescription}>
                  Sizin için en uygun zamanlarda, haftanın her günü ders imkanı
                </p>
              </div>
            </motion.div>
            
            <motion.div className={styles.feature} variants={childVariants}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v8H7v-8h2zm4 0v8h-2v-8h2zm4 0v8h-2v-8h2z" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Ücretsiz Ek Kaynaklar</h3>
                <p className={styles.featureDescription}>
                  Özel dersler dışında ekstra çalışma materyalleri ve online kaynaklara erişim
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta; 