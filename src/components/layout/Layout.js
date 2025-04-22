'use client';

import { ClientHeader, ClientFooter } from './ClientComponents';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/Layout.module.css';

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Sayfa geçiş animasyonu için varyantlar
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className={styles.layoutWrapper}>
      {/* Yükleme ekranı */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div 
            className={styles.loaderWrapper}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.loader}>
              <div className={styles.logoAnimated}>
                <svg 
                  width="60" 
                  height="60" 
                  viewBox="0 0 60 60" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="60" height="60" rx="12" fill="#E30613" />
                  <path 
                    d="M15 20h30M15 30h30M15 40h20" 
                    stroke="white" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className={styles.loadingText}>Yükleniyor...</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ana içerik */}
      <ClientHeader />
      
      <AnimatePresence mode="wait">
        {isMounted && !isLoading && (
          <motion.main 
            className={styles.mainContent}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {children}
          </motion.main>
        )}
      </AnimatePresence>

      <ClientFooter />
    </div>
  );
};

export default Layout; 