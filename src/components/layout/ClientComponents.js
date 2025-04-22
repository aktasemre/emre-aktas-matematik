'use client';

import dynamic from 'next/dynamic';

// İstemci tarafındaki bileşenleri dinamik olarak yükle
export const ClientHeader = dynamic(() => import('../common/Header'), { ssr: false });
export const ClientFooter = dynamic(() => import('../common/Footer'), { ssr: false });
export const ClientNavbar = dynamic(() => import('../common/Header'), { ssr: false }); // Şimdilik Header bileşenini NavBar olarak kullanıyoruz

// İstemci tarafı içerik bileşenleri
export const ClientHero = dynamic(() => import('../home/Hero'), { ssr: false });
export const ClientCta = dynamic(() => import('../home/Cta'), { ssr: false });
export const ClientStats = dynamic(() => import('../home/Stats'), { ssr: false });
export const ClientTestimonials = dynamic(() => import('../home/Testimonials'), { ssr: false });
export const ClientProcessSteps = dynamic(() => import('../home/ProcessSteps'), { ssr: false });
export const ClientScheduleTimer = dynamic(() => import('../home/ScheduleTimer'), { ssr: false });
export const ClientMethodology = dynamic(() => import('../home/Methodology'), { ssr: false }); 