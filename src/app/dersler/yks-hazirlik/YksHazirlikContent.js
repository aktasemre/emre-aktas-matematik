'use client';
import React from 'react';
import Button from '@/components/common/Button';
import DersDetayTemplate from '@/components/dersler/DersDetayTemplate';
import Link from 'next/link';
import { motion } from 'framer-motion';

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

export default function YksHazirlikContent() {
  return (
    <DersDetayTemplate
      pageTitle="YKS (TYT-AYT) Hazırlık Programı"
      pageSubtitle="Üniversite hayallerinize ulaşmanız için buradayız."
      programDescription={(
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className={'h3 mb-3'}>Programın Kapsamı</h2>
          <p style={{ marginBottom: 20 }}>
            YKS hazırlık programımız, lise son sınıf öğrencileri ve mezunlar için Yükseköğretim Kurumları Sınavı'nın (YKS) <b>her iki oturumu</b> olan <b>Temel Yeterlilik Testi (TYT)</b> ve <b>Alan Yeterlilik Testleri (AYT)</b> odaklıdır.<br />
            Öğrencilerimizin hedefledikleri üniversite ve bölümlere yerleşmeleri için gerekli akademik altyapıyı oluşturmayı, sınav becerilerini geliştirmeyi ve motivasyonlarını en üst düzeyde tutmayı amaçlıyoruz.
          </p>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: '32px 0 16px 0' }}>Özellikle Yoğunlaştığımız Konu Grupları:</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: 16 }}>
            {["Limit - Türev - İntegral","Polinomlar - 2. Dereceden Denklemler - Parabol - Eşitsizlikler","Trigonometri","Permütasyon - Kombinasyon - Binom - Olasılık","TYT Matematik Temel Kavramlar ve Problem Çözme Stratejileri","AYT Fen Bilimleri (Fizik, Kimya, Biyoloji) Konu Eksikleri ve Soru Tipleri"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px rgba(13,110,253,0.07)', padding: '1rem 1.2rem', display: 'flex', alignItems: 'center', gap: 12 }}
              >
                <i className="bi bi-check-circle-fill text-success" style={{ fontSize: 20 }}></i>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
          <motion.p className="mt-3 fst-italic" style={{ color: '#555', fontSize: '1rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Bu konu grupları başta olmak üzere, öğrencinin ihtiyaçlarına göre tüm TYT ve AYT müfredatını kapsayan kişiselleştirilmiş bir program sunuyoruz.
          </motion.p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: 24, marginBottom: 12 }}>
            <Button
              href="https://wa.me/905XXXXXXXXX?text=YKS%20Hazırlık%20programı%20hakkında%20bilgi%20almak%20istiyorum"
              variant="success"
              size="large"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <i className="bi bi-whatsapp" style={{ fontSize: 20 }}></i> WhatsApp ile Bilgi Al
            </Button>
            <Button
              href="tel:+905XXXXXXXXX"
              variant="primary"
              size="large"
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <i className="bi bi-telephone" style={{ fontSize: 20 }}></i> Hemen Ara
            </Button>
            <Button
              href="/iletisim"
              variant="secondary"
              size="large"
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <i className="bi bi-envelope" style={{ fontSize: 20 }}></i> İletişim Formunu Doldur
            </Button>
          </div>
        </motion.div>
      )}
      methodologyTitle="Metodolojimiz ile YKS Başarısı"
      methodologySteps={yksMethodologySteps}
      additionalInfo="Ayrıca, tercih danışmanlığı ve stres yönetimi gibi konularda da öğrencilerimize destek oluyoruz."
      ctaTitle="Hayalinizdeki Üniversite İçin Harekete Geçin!"
      ctaText="Programlarımız hakkında detaylı bilgi almak ve size özel çözümlerimizi öğrenmek için bize ulaşın."
    />
  );
}
