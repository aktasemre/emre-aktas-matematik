'use client';

import Hero from '@/components/home/Hero';
import Cta from '@/components/home/Cta';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <Cta />
    </div>
  );
}
