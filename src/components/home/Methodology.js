'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaClipboardList, FaBullseye, FaCalendarCheck, FaSyncAlt, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import styles from '@/styles/Methodology.module.css';
import { useRef } from 'react';

const Methodology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const steps = [
    {
      icon: <FaClipboardList />,
      title: 'Analiz & Hedef Belirleme',
      description: 'Öğrencinin mevcut bilgi düzeyi, öğrenme stili, eksikleri ve hedefleri (LGS/YKS dahil) detaylıca analiz edilir.',
    },
    {
      icon: <FaBullseye />,
      title: 'Kişiye Özel Planlama',
      description: 'Analiz sonuçlarına göre, hedeflere ulaşmayı sağlayacak kişiselleştirilmiş bir ders ve çalışma programı oluşturulur.',
    },
    {
      icon: <FaCalendarCheck />,
      title: 'Günlük/Haftalık Ödevlendirme',
      description: 'Her ders sonrası, bir sonraki derse kadar \'gün gün\' çözülecek kaynak, konu ve sayfa/test içeren net bir ödevlendirme yapılır. \'Ne çalışmalıyım?\' kaygısı ortadan kalkar.',
    },
    {
      icon: <FaSyncAlt />,
      title: 'Takip, Tekrar & Yeni Konu',
      description: 'Bir sonraki derste ödevler kontrol edilir, yapılamayan sorular çözülür, eksikler giderilir ve yeni konulara geçilerek süreç devam eder.',
    },
  ];

  return (
    <section className={styles.methodology} ref={ref}>
      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className={styles.heading}>
            <h2 className={styles.title}>Sınavlara Nasıl Hazırlıyoruz? Başarı Metodolojimiz</h2>
            <p className={styles.subtitle}>
              LGS ve YKS gibi önemli sınavlara hazırlıkta ve okul başarısında, stresi azaltan, 
              ilerlemeyi netleştiren ve öğrenciyi hedefe taşıyan kanıtlanmış bir yöntem kullanıyoruz.
            </p>
          </motion.div>

          <motion.div className={styles.stepsGrid} variants={itemVariants}>
            {steps.map((step, index) => (
              <motion.div key={index} className={styles.stepItem} variants={itemVariants}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className={styles.messageBox} variants={itemVariants}>
            <div className={styles.messageIcon}><FaChalkboardTeacher /></div>
            <h3 className={styles.messageTitle}>Değerli Velilerimiz,</h3>
            <p className={styles.messageText}>
              Çocuğunuzun kritik sınav (LGS/YKS) hazırlık sürecinin tüm sorumluluğunu ve 
              yönetimini uzman ekibimize güvenle bırakabilirsiniz. Biz akademik süreci titizlikle takip ederken, 
              sizler sadece çocuğunuzun başarısını keyifle izleyin. Gözünüz arkada kalmasın.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology; 