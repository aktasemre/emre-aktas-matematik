import React from 'react';
import Button from '@/components/common/Button';
// ClientHeader ve ClientFooter importları kaldırıldı.
// import { ClientHeader, ClientFooter } from '@/components/layout/ClientComponents';
// import styles from '@/styles/DersDetayPage.module.css'; // Stiller artık Template içinde
import DersDetayTemplate from '@/components/dersler/DersDetayTemplate'; // Yeni şablonu import et
import Link from 'next/link';
import { motion } from 'framer-motion';
import YksHazirlikContent from './YksHazirlikContent';

export const metadata = {
  title: 'YKS Hazırlık Programı | Özel Ders Platformu',
  description: 'Lise öğrencilerine ve mezunlara yönelik YKS (TYT-AYT) hazırlık programımız. Alanında uzman öğretmenlerle kişiye özel dersler, deneme sınavları ve rehberlik hizmetleri.',
};

// YKS'ye özel metodoloji adımları
const yksMethodologySteps = [
  {
    title: '1. Kapsamlı Analiz',
    description: 'Öğrencinin TYT ve AYT konularındaki bilgi düzeyini, eksiklerini ve öğrenme stilini detaylı olarak analiz ederiz.',
  },
  {
    title: '2. Hedefe Yönelik Planlama',
    description: 'Öğrencinin hedeflediği puan türü ve bölümü göz önünde bulundurarak, kişiye özel, esnek ve sonuç odaklı bir ders çalışma programı hazırlarız.',
  },
  {
    title: '3. Uzmanlarla Uygulama',
    description: 'Alanında deneyimli öğretmenlerimizle TYT ve AYT konularını kapsayan birebir dersler, konu tekrarları, yoğun soru çözümleri ve strateji geliştirme çalışmaları yapılır.',
  },
  {
    title: '4. Sürekli Takip ve Rehberlik',
    description: 'Periyodik TYT-AYT deneme sınavları, detaylı analiz raporları, performans değerlendirmeleri ve kariyer rehberliği ile öğrencinin ilerlemesini yakından takip eder, gerekli güncellemeleri yaparız.',
  },
];

export default function YKSHazirlikPage() {
  return <YksHazirlikContent />;
}