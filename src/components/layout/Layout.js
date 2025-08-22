'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="min-h-screen bg-gray-50">
      {/* Yükleme ekranı */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-indigo-600 rounded-xl flex items-center justify-center">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 32 32" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 12h16M8 16h16M8 20h12" 
                      stroke="white" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-gray-600 font-medium">Yükleniyor...</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ana içerik */}
      <Header />
      
      <AnimatePresence mode="wait">
        {isMounted && !isLoading && (
          <motion.main 
            className="pt-16"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {children}
          </motion.main>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Layout; 