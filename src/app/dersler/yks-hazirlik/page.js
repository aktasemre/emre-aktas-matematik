import React from 'react';
// ClientHeader ve ClientFooter importları kaldırıldı.
// import { ClientHeader, ClientFooter } from '@/components/layout/ClientComponents';
// import styles from '@/styles/DersDetayPage.module.css'; // Stiller artık Template içinde
import DersDetayTemplate from '@/components/dersler/DersDetayTemplate'; // Yeni şablonu import et
import Link from 'next/link';

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

const YKSHazirlikPage = () => {
  return (
    <>
      {/* ClientHeader çağrısı kaldırıldı */}
      {/* <ClientHeader /> */}
      <DersDetayTemplate
        pageTitle="YKS (TYT-AYT) Hazırlık Programı"
        pageSubtitle="Üniversite hayallerinize ulaşmanız için buradayız."
        programDescription={(
          <>
            <h2 className={'h3 mb-3'}>Programın Kapsamı</h2> {/* Geçici class */}
            <p>
              YKS hazırlık programımız, lise son sınıf öğrencileri ve mezunlar için Yükseköğretim Kurumları Sınavı'nın (YKS) 
              her iki oturumu olan Temel Yeterlilik Testi (TYT) ve Alan Yeterlilik Testleri (AYT) odaklıdır.
              Öğrencilerimizin hedefledikleri üniversite ve bölümlere yerleşmeleri için gerekli akademik altyapıyı 
              oluşturmayı, sınav becerilerini geliştirmeyi ve motivasyonlarını en üst düzeyde tutmayı amaçlıyoruz.
            </p>
            {/* Yeni eklenen bölüm: Öne Çıkan Konu Grupları */}
            <h3 className={'h5 mt-4 mb-3 fw-semibold'}>Özellikle Yoğunlaştığımız Konu Grupları:</h3>
            <ul className="list-unstyled ps-3">
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2 text-success"></i>Limit - Türev - İntegral</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2 text-success"></i>Polinomlar - 2. Dereceden Denklemler - Parabol - Eşitsizlikler</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2 text-success"></i>Trigonometri</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2 text-success"></i>Permütasyon - Kombinasyon - Binom - Olasılık</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2 text-success"></i>TYT Matematik Temel Kavramlar ve Problem Çözme Stratejileri</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill me-2 text-success"></i>AYT Fen Bilimleri (Fizik, Kimya, Biyoloji) Konu Eksikleri ve Soru Tipleri</li>
                 {/* Buraya başka konu grupları da eklenebilir */}
            </ul>
            <p className="mt-3 fst-italic">
                Bu konu grupları başta olmak üzere, öğrencinin ihtiyaçlarına göre tüm TYT ve AYT müfredatını kapsayan 
                kişiselleştirilmiş bir program sunuyoruz.
            </p>

            {/* YENİ EKLENEN BÖLÜM: İletişim Butonları */}
            <div className="d-flex flex-wrap gap-2 mt-4 mb-2">
              <a href="https://wa.me/905XXXXXXXXX?text=YKS%20Hazırlık%20programı%20hakkında%20bilgi%20almak%20istiyorum" 
                className="btn btn-success d-flex align-items-center" 
                target="_blank" 
                rel="noopener noreferrer">
                <i className="bi bi-whatsapp me-2 fs-5"></i> WhatsApp ile Bilgi Al
              </a>
              <a href="tel:+905XXXXXXXXX" className="btn btn-primary d-flex align-items-center">
                <i className="bi bi-telephone me-2 fs-5"></i> Hemen Ara
              </a>
              <Link href="/iletisim" className="btn btn-outline-secondary d-flex align-items-center">
                <i className="bi bi-envelope me-2 fs-5"></i> İletişim Formunu Doldur
              </Link>
            </div>
          </>
        )}
        methodologyTitle="Metodolojimiz ile YKS Başarısı"
        methodologySteps={yksMethodologySteps}
        additionalInfo="Ayrıca, tercih danışmanlığı ve stres yönetimi gibi konularda da öğrencilerimize destek oluyoruz."
        ctaTitle="Hayalinizdeki Üniversite İçin Harekete Geçin!"
        ctaText="Programlarımız hakkında detaylı bilgi almak ve size özel çözümlerimizi öğrenmek için bize ulaşın."
      />
      {/* ClientFooter çağrısı kaldırıldı */}
      {/* <ClientFooter /> */}
    </>
  );
};

export default YKSHazirlikPage; 