'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ClientHero, 
  ClientNavbar, 
  ClientCta, 
  ClientStats, 
  ClientTestimonials, 
  ClientProcessSteps,
  ClientScheduleTimer,
  ClientMethodology
} from '@/components/layout/ClientComponents';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {isClient && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-30 transition-opacity"
          animate={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        />
      )}
      
      <ClientHero />
      <ClientStats />
      <ClientProcessSteps />
      <ClientMethodology />
      <ClientTestimonials />
      <ClientScheduleTimer />
      <ClientCta />
    </div>
  );
}
