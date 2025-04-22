'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import styles from '@/styles/ProcessSteps.module.css';

const ProcessSteps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="process-section" className={styles.process} ref={ref}>
      <motion.div
        className={styles.container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className={styles.heading}>
          <h2 className={styles.title}>Başarıya Giden Yol: 4 Adımda Süreç Yönetimi</h2>
          <p className={styles.subtitle}>
            Öğrencinizin potansiyelini en üst düzeye çıkarmak için yapılandırılmış ve kişiye özel bir süreç izliyoruz.
          </p>
        </div>

        <div className={styles.steps}>
          <motion.div 
            className={styles.step}
            custom={0}
            variants={stepVariants}
          >
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Analiz ve Hedef Belirleme</h3>
              <p className={styles.stepDescription}>
                Öğrencinizin mevcut durumunu, eksiklerini, güçlü yönlerini ve hedeflerini (LGS/YKS dahil) detaylı bir şekilde analiz ediyoruz.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.step}
            custom={1}
            variants={stepVariants}
          >
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Özel Çalışma Planı</h3>
              <p className={styles.stepDescription}>
                Analiz sonuçlarına göre öğrenciye özel, hangi konulara ne kadar ağırlık verileceğini belirleyen bir ders ve çalışma programı hazırlıyoruz.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.step}
            custom={2}
            variants={stepVariants}
          >
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Günlük/Haftalık Ödevlendirme</h3>
              <p className={styles.stepDescription}>
                Her ders sonrası, bir sonraki derse kadar **gün gün** hangi kitaptan, hangi konudan kaç sayfa/test çözüleceğini içeren net bir ödev tablosu sunuyoruz.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.step}
            custom={3}
            variants={stepVariants}
          >
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Kontrol, Tekrar ve Yeni Konu</h3>
              <p className={styles.stepDescription}>
                Sonraki derste önceki haftanın ödev kontrolü yapılır, anlaşılamayan noktalar ve sorular çözülür. Ardından yeni konu anlatımı ile döngü devam eder.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProcessSteps; 