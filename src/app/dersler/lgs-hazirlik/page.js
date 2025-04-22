import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaGraduationCap, 
  FaChalkboardTeacher, 
  FaBook, 
  FaUserCheck, 
  FaArrowRight, 
  FaChartLine, 
  FaClipboardCheck, 
  FaUserFriends,
  FaRegLightbulb,
  FaRegCheckCircle,
  FaRegClock,
  FaMedal
} from 'react-icons/fa';

import styles from '@/styles/LgsHazirlikPage.module.css';

export const metadata = {
  title: 'LGS Hazırlık | Özel Ders Merkezi',
  description: 'Kişiye özel planlanmış LGS hazırlık programı ile hedefinize güvenle ilerleyin. Üstün başarı için profesyonel öğretmenlerimizle birebir çalışın.',
};

export default function LgsHazirlikPage() {
  return (
    <div className={styles.lgsContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>LGS Hazırlık Programı</h1>
          <p className={styles.pageDescription}>
            Öğrencilerin bireysel ihtiyaçlarına göre hazırlanmış özel LGS hazırlık programımız, 
            analitik düşünme becerileri kazandırırken hedeflerinize ulaşmanızı sağlar. 
            Alanında uzman öğretmenlerimizle birebir çalışarak başarıya giden yolda emin 
            adımlarla ilerleyin.
          </p>
          <Link href="/iletisim" className={styles.heroButton}>
            Hemen Başvuru Yap <FaArrowRight className={styles.buttonIcon} />
          </Link>
        </div>
        <div className={styles.heroImageContainer}>
          <Image 
            src="/images/lgs-student.jpg" 
            alt="LGS Hazırlık Öğrencisi" 
            width={500} 
            height={350} 
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* Program Bölümü */}
      <section className={styles.programSection}>
        <h2 className={styles.sectionTitle}>Program Hakkında</h2>
        <div className={styles.programContent}>
          <div className={styles.programTextContainer}>
            <p className={styles.programText}>
              LGS hazırlık programımız, öğrencilerin hem akademik hem de zihinsel olarak sınav 
              sürecine en iyi şekilde hazırlanmalarını hedefler. Kişiselleştirilmiş öğrenme planı 
              ile her öğrencinin güçlü ve zayıf yönlerini belirleyerek, gerekli alanlarda 
              destekleyici çalışmalar yaparız.
            </p>
            <p className={styles.programText}>
              Merkezi sınav sistemi, öğrencilerin analitik düşünme, problem çözme ve zaman yönetimi 
              becerilerini ölçer. Programımız bu becerileri geliştirmeye odaklanırken, öğrencilerin 
              özgüven kazanmalarını ve sınav stresini yönetmelerini de sağlar.
            </p>
          </div>
          <div className={styles.programHighlights}>
            <div className={styles.highlightItem}>
              <FaChalkboardTeacher className={styles.highlightIcon} />
              <span>Alanında Uzman Öğretmenler</span>
            </div>
            <div className={styles.highlightItem}>
              <FaRegLightbulb className={styles.highlightIcon} />
              <span>Kişiselleştirilmiş Öğrenme Planı</span>
            </div>
            <div className={styles.highlightItem}>
              <FaRegCheckCircle className={styles.highlightIcon} />
              <span>Düzenli Deneme Sınavları</span>
            </div>
            <div className={styles.highlightItem}>
              <FaRegClock className={styles.highlightIcon} />
              <span>Esnek Ders Programı</span>
            </div>
            <div className={styles.highlightItem}>
              <FaUserFriends className={styles.highlightIcon} />
              <span>Birebir Ders İmkanı</span>
            </div>
            <div className={styles.highlightItem}>
              <FaMedal className={styles.highlightIcon} />
              <span>Kanıtlanmış Başarı</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Metodoloji Bölümü */}
      <section className={styles.methodologySection}>
        <h2 className={styles.sectionTitle}>Çalışma Metodolojimiz</h2>
        <p className={styles.methodologyDescription}>
          LGS hazırlık sürecinde izlediğimiz sistematik yaklaşım, öğrencilerin adım adım 
          gelişimini ve başarıya ulaşmasını sağlar. Metodolojimiz dört ana aşamadan oluşur:
        </p>
        <div className={styles.stepsContainer}>
          <div className={styles.stepCard}>
            <div className={styles.stepIconContainer}>
              <FaUserCheck className={styles.stepIcon} />
            </div>
            <h3 className={styles.stepTitle}>Analiz ve Seviye Tespiti</h3>
            <p className={styles.stepDescription}>
              Öğrencinin akademik seviyesi, öğrenme stili ve ihtiyaçları 
              detaylı bir şekilde analiz edilerek, güçlü ve geliştirilmesi 
              gereken yönler belirlenir.
            </p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepIconContainer}>
              <FaClipboardCheck className={styles.stepIcon} />
            </div>
            <h3 className={styles.stepTitle}>Kişisel Plan Hazırlama</h3>
            <p className={styles.stepDescription}>
              Analiz sonuçlarına göre öğrenciye özel bir çalışma programı 
              oluşturulur. Bu plan, konuların işleniş sırası ve yoğunluğu 
              öğrencinin ihtiyaçlarına göre düzenlenir.
            </p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepIconContainer}>
              <FaBook className={styles.stepIcon} />
            </div>
            <h3 className={styles.stepTitle}>Uygulama ve Konu Anlatımı</h3>
            <p className={styles.stepDescription}>
              Oluşturulan plan doğrultusunda dersler işlenir. Her derste konunun 
              temel noktaları, soru çözüm teknikleri ve stratejileri öğretilir.
              Öğrencinin anlamadığı yerler tekrar edilir.
            </p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepIconContainer}>
              <FaChartLine className={styles.stepIcon} />
            </div>
            <h3 className={styles.stepTitle}>Takip ve Değerlendirme</h3>
            <p className={styles.stepDescription}>
              Düzenli testler ve denemeler ile öğrencinin ilerlemesi 
              takip edilir. Gerekli görülen durumlarda çalışma planı 
              revize edilerek sürekli gelişim sağlanır.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Bölümü */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Hayalindeki Okula Bir Adım Daha Yakın Ol!</h2>
          <p className={styles.ctaText}>
            LGS hazırlık programımızla başarıya giden yolda sana destek olmak için buradayız. 
            Hemen kayıt ol, ücretsiz deneme dersimize katıl ve farkı kendin gör!
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/iletisim" className={`${styles.primaryButton} btn-hover-effect`}>
              Hemen Başvuru Yap
            </Link>
            <Link href="/hakkimizda" className={`${styles.secondaryButton} btn-hover-effect`}>
              Daha Fazla Bilgi Al
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 