'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPhone, FaShoppingCart } from 'react-icons/fa';
import TextLogo from './TextLogo';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Sticky Header Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Stick after 50px scroll
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on link click (optional but good UX)
  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" onClick={handleLinkClick}>
            <TextLogo />
          </Link>
        </div>

        <nav className={`${styles.nav} ${isOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/dersler" className={styles.navLink} onClick={handleLinkClick}>
                Özel Dersler
              </Link>
              <div className={styles.submenu}>
                <div className={styles.submenuContent}>
                  <div className={styles.submenuColumn}>
                    <h4 className={styles.submenuTitle}>Sınav Hazırlık</h4>
                    <ul>
                      <li><Link href="/dersler/yks-hazirlik" onClick={handleLinkClick}>YKS Hazırlık</Link></li>
                      <li><Link href="/dersler/lgs-hazirlik" onClick={handleLinkClick}>LGS Hazırlık</Link></li>
                    </ul>
                  </div>
                  <div className={styles.submenuColumn}>
                    <h4 className={styles.submenuTitle}>Akademik Destek</h4>
                    <ul>
                      <li><Link href="/dersler/lise" onClick={handleLinkClick}>Lise Dersleri</Link></li>
                      <li><Link href="/dersler/ortaokul" onClick={handleLinkClick}>Ortaokul Dersleri</Link></li>
                      <li><Link href="/dersler/ilkokul" onClick={handleLinkClick}>İlkokul Dersleri</Link></li>
                      <li><Link href="/dersler/universite" onClick={handleLinkClick}>Üniversite Dersleri</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.navItem}>
              <Link href="/metodoloji" className={styles.navLink} onClick={handleLinkClick}>
                Metodolojimiz
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/ucretler" className={styles.navLink} onClick={handleLinkClick}>
                Ücretler
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/egitmenler" className={styles.navLink} onClick={handleLinkClick}>
                Eğitmen Kadromuz
              </Link>
            </li>
            
            <li className={styles.navItem}>
              <Link href="/iletisim" className={styles.navLink} onClick={handleLinkClick}>
                İletişim
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href="tel:+908501234567" className={styles.phoneLink}>
            <FaPhone /> <span>(0850) 123 4567</span>
          </a>
          <Link href="/talep" className={styles.ctaButton}>
            <FaShoppingCart className={styles.cartIcon} />
            <span>Talep Oluştur</span>
          </Link>
        </div>

        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Menüyü Aç/Kapat">
          <span className={`${styles.menuBar} ${isOpen ? styles.active : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 