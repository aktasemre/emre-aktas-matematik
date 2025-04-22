'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/Stats.module.css';

const Stats = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.title}>Başarılarımızla Gurur Duyuyoruz</h2>
          <p className={styles.subtitle}>
            Öğrencilerimiz ve eğitmenlerimizle birlikte oluşturduğumuz başarı hikayemizin rakamlarla gösterimi.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.item}>
            <div className={styles.number}>
              <span className={animated ? styles.animated : ''}>5000+</span>
            </div>
            <div className={styles.label}>Öğrenci</div>
            <p className={styles.description}>
              Bugüne kadar hizmet verdiğimiz öğrenci sayısı
            </p>
          </div>

          <div className={styles.item}>
            <div className={styles.number}>
              <span className={animated ? styles.animated : ''}>750+</span>
            </div>
            <div className={styles.label}>Eğitmen</div>
            <p className={styles.description}>
              Platformumuzda aktif olarak hizmet veren uzman eğitmen sayısı
            </p>
          </div>

          <div className={styles.item}>
            <div className={styles.number}>
              <span className={animated ? styles.animated : ''}>98%</span>
            </div>
            <div className={styles.label}>Memnuniyet</div>
            <p className={styles.description}>
              Öğrencilerimizin hizmetlerimizden memnuniyet oranı
            </p>
          </div>

          <div className={styles.item}>
            <div className={styles.number}>
              <span className={animated ? styles.animated : ''}>25+</span>
            </div>
            <div className={styles.label}>Ders Kategorisi</div>
            <p className={styles.description}>
              Sunduğumuz özel ders kategorisi sayısı
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 