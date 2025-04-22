import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBook, FaGraduationCap, FaArrowRight, FaPhone } from 'react-icons/fa';

import styles from '@/styles/DerslerPage.module.css';

export const metadata = {
  title: 'Derslerimiz - Özel Ders',
  description: 'LGS ve YKS hazırlık derslerimiz hakkında detaylı bilgi alın. Profesyonel eğitmenlerimizle başarıya ulaşın.',
};

export default function DerslerPage() {
  return (
    <>
     
      <main className={styles.derslerPageContainer}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Derslerimiz</h1>
          <p className={styles.pageSubtitle}>
            Size özel hazırlanmış eğitim programlarımızla hedeflerinize ulaşmanıza yardımcı oluyoruz. 
            Alanında uzman eğitmenlerimiz, özel metodolojimiz ve bireysel yaklaşımımızla başarıya giden yolda yanınızdayız.
          </p>
        </div>

        <div className={styles.derslerGrid}>
          {/* LGS Hazırlık Kartı */}
          <div className={styles.dersCardWrapper} style={{ '--i': 0 }}>
            <div className={styles.dersCard}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <FaBook className="text-primary me-2" size={24} />
                  <h2 className={styles.cardTitle}>LGS Hazırlık</h2>
                </div>
                <p className={styles.cardDescription}>
                  Liseye Geçiş Sınavı'na hazırlanan öğrenciler için özel olarak tasarlanmış programımızla, 
                  sınav başarısı ve akademik gelişim için gereken tüm desteği sunuyoruz. Kişiselleştirilmiş 
                  çalışma planları ve düzenli değerlendirmelerle hedefinize ulaşmanızı sağlıyoruz.
                </p>
                <Link href="/dersler/lgs-hazirlik" className="btn btn-primary d-flex align-items-center justify-content-center gap-2">
                  Detaylı Bilgi <FaArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* YKS Hazırlık Kartı */}
          <div className={styles.dersCardWrapper} style={{ '--i': 1 }}>
            <div className={styles.dersCard}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <FaGraduationCap className="text-primary me-2" size={24} />
                  <h2 className={styles.cardTitle}>YKS Hazırlık</h2>
                </div>
                <p className={styles.cardDescription}>
                  Yükseköğretim Kurumları Sınavı'na hazırlanan öğrencilere yönelik programımızda, 
                  TYT ve AYT aşamalarını kapsayan kapsamlı bir hazırlık sunuyoruz. Eksik konuların tespiti, 
                  bireysel çalışma stratejileri ve düzenli soru çözüm teknikleriyle başarınızı garanti altına alıyoruz.
                </p>
                <Link href="/dersler/yks-hazirlik" className="btn btn-primary d-flex align-items-center justify-content-center gap-2">
                  Detaylı Bilgi <FaArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Yakında gelecek dersler kartı */}
          <div className={styles.dersCardWrapper} style={{ '--i': 2 }}>
            <div className={styles.dersCard}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <FaBook className="text-secondary me-2" size={24} />
                  <h2 className={styles.cardTitle}>Yakında Gelecek</h2>
                </div>
                <p className={styles.cardDescription}>
                  Yakında eklenecek olan yeni ders programlarımız için bizi takip etmeye devam edin. 
                  İlkokul, ortaokul ve yabancı dil seviye geliştirme programları üzerinde çalışıyoruz. 
                  Her seviyeye uygun, kaliteli eğitim anlayışımızla yeni programlarımız çok yakında sizlerle.
                </p>
                <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2" disabled>
                  Çok Yakında
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Eğitim İhtiyaçlarınız İçin Yanınızdayız</h2>
          <p className={styles.ctaDescription}>
            Size özel ders programları, esnek çalışma saatleri ve alanında uzman öğretmenlerimizle 
            eğitim yolculuğunuzda yanınızda olmaktan mutluluk duyuyoruz. Hemen iletişime geçin, 
            eğitim danışmanlarımız size en uygun programı oluştursun.
          </p>
          <div className={styles.ctaButtonGroup}>
            <Link href="/iletisim" className="btn btn-primary px-4 py-2 d-flex align-items-center gap-2">
              <FaPhone size={16} /> Bize Ulaşın
            </Link>
            <Link href="/hakkimizda" className="btn btn-outline-primary px-4 py-2">
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </main>
    
    </>
  );
} 