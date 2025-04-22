'use client';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import TextLogo from './TextLogo';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <TextLogo />
            </div>
            <div className={styles.contact}>
              <p><FaPhone /> <a href="tel:+905001234567">(0850) 123 4567</a></p>
              <p><FaEnvelope /> <a href="mailto:iletisim@ozelders.com">iletisim@ozelders.com</a></p>
              <p><FaMapMarkerAlt /> PO Plaza K4 Kozyatağı/İstanbul</p>
            </div>
          </div>

          <div className={styles.column}>
            <h3>Bağlantılar</h3>
            <ul>
              <li><Link href="/">Eğitmen Başvuru</Link></li>
              <li><Link href="/ucretler">Ücretlendirme</Link></li>
              <li><Link href="/dersler">Dersler</Link></li>
              <li><Link href="/hakkimizda">Hakkımızda</Link></li>
              <li><Link href="/kariyer">Kariyer</Link></li>
              <li><Link href="/yayinlar">SSS - Açıklayıcı Makale</Link></li>
              <li><Link href="/iletisim">İletişim</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Özel Dersler</h3>
            <ul>
              <li><Link href="/dersler/lise">Lise Özel Ders</Link></li>
              <li><Link href="/dersler/ortaokul">Ortaokul Özel Ders</Link></li>
              <li><Link href="/dersler/ilkokul">İlkokul Özel Ders</Link></li>
              <li><Link href="/dersler/yabanci-dil">Yabancı Dil Özel Ders</Link></li>
              <li><Link href="/dersler/yazilim">Yazılım/IT Özel Dersler</Link></li>
              <li><Link href="/dersler/sanat">Sanat Özel Ders</Link></li>
              <li><Link href="/dersler/ozel">Yetenek-IQ Özel Dersler</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <Link href="/talep" className={styles.ctaButton}>
              Özel Ders Talebi Oluştur
            </Link>

            <div className={styles.social}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Özel Ders. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 