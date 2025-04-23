'use client';

import Button from '@/components/common/Button';
import { FaHome, FaBook, FaAward, FaGraduationCap, FaProjectDiagram, FaSearch } from 'react-icons/fa';
import styles from '@/styles/DerslerPage.module.css';

export default function NotFound() {
  return (
    <main className={styles.derslerPageContainer}>
      <div className={styles.pageHeader} style={{ textAlign: 'center', marginTop: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32 }}>
          <div style={{ position: 'relative', width: 180, height: 180 }}>
            <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '8rem', fontWeight: 800, color: '#e30613', opacity: 0.13 }}>404</span>
            </div>
            <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaSearch size={70} color="#e30613" className="icon-bounce" />
            </div>
          </div>
        </div>
        <h1 className={styles.pageTitle} style={{ color: '#e30613', fontWeight: 800 }}>Sayfa Bulunamadı</h1>
        <p className={styles.pageSubtitle} style={{ marginBottom: 32 }}>
          Üzgünüz, aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 40 }}>
          <Button href="/" variant="primary" size="large" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FaHome size={20} /> Ana Sayfaya Dön
          </Button>
          <Button href="/dersler" variant="secondary" size="large" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FaBook size={20} /> Derslerimize Göz Atın
          </Button>
        </div>
      </div>
      <div style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 600, textAlign: 'center', marginBottom: 24 }}>Aşağıdaki sayfalar ilginizi çekebilir:</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, maxWidth: 900, margin: '0 auto' }}>
          <a href="/dersler/lgs-hazirlik" className={styles.dersCard + ' card-hover scale-hover fade-in delay-1'} style={{ textDecoration: 'none' }}>
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <FaAward size={38} color="#ffc107" className="icon-pulse" style={{ marginBottom: 12 }} />
              <h3 className={styles.cardTitle}>LGS Hazırlık</h3>
            </div>
          </a>
          <a href="/dersler/yks-hazirlik" className={styles.dersCard + ' card-hover scale-hover fade-in delay-2'} style={{ textDecoration: 'none' }}>
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <FaGraduationCap size={38} color="#0d6efd" className="icon-pulse" style={{ marginBottom: 12 }} />
              <h3 className={styles.cardTitle}>YKS Hazırlık</h3>
            </div>
          </a>
          <a href="/metodoloji" className={styles.dersCard + ' card-hover scale-hover fade-in delay-3'} style={{ textDecoration: 'none' }}>
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <FaProjectDiagram size={38} color="#198754" className="icon-pulse" style={{ marginBottom: 12 }} />
              <h3 className={styles.cardTitle}>Metodolojimiz</h3>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}