import React from 'react';
import Methodology from '@/components/home/Methodology'; // Mevcut metodoloji bileşenini import et
import Link from 'next/link';
// ClientHeader ve ClientFooter importları kaldırıldı, layout.js tarafından sağlanıyor.
// import { ClientHeader, ClientFooter } from '@/components/layout/ClientComponents';

// Sayfanın meta verileri (isteğe bağlı)
export const metadata = {
  title: 'Başarı Metodolojimiz | Özel Ders Platformu',
  description: 'LGS ve YKS hazırlığında kullandığımız kanıtlanmış 4 adımlı başarı metodolojimizi keşfedin: Analiz, Planlama, Ödevlendirme ve Takip.',
};

const MetodolojiPage = () => {
  return (
    <>
      {/* ClientHeader çağrısı kaldırıldı */}
      {/* <ClientHeader /> */}
      <main>
        {/* Mevcut Metodoloji bileşenini burada doğrudan kullanabiliriz */}
        <Methodology /> 
        
        {/* YENİ EKLENEN - Metodoloji Sayfası CTA Bölümü */}
        <div className="container my-5 py-4 px-4 bg-light rounded-3 text-center">
          <h2 className="h3 mb-3">Metodolojimizle Başarıya Ulaşın</h2>
          <p className="mb-4 mx-auto" style={{ maxWidth: "800px" }}>
            Kanıtlanmış metodolojimizle LGS, YKS ve diğer sınavlarda başarıya nasıl ulaşabileceğinizi 
            öğrenmek için bizimle iletişime geçin. Size özel bir yol haritası oluşturalım.
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a href="https://wa.me/905XXXXXXXXX?text=Eğitim%20metodolojiniz%20hakkında%20bilgi%20almak%20istiyorum" 
              className="btn btn-success d-flex align-items-center" 
              target="_blank" 
              rel="noopener noreferrer">
              <i className="bi bi-whatsapp me-2 fs-5"></i> WhatsApp ile Bilgi Alın
            </a>
            <a href="tel:+905XXXXXXXXX" className="btn btn-primary d-flex align-items-center">
              <i className="bi bi-telephone me-2 fs-5"></i> Ücretsiz Danışmanlık İçin Arayın
            </a>
            <Link href="/dersler" className="btn btn-outline-primary d-flex align-items-center">
              <i className="bi bi-book me-2 fs-5"></i> Ders Programlarımızı İnceleyin
            </Link>
          </div>
        </div>
        {/* İleride bu sayfaya özel ek içerikler veya farklı bölümler eklenebilir */}
      </main>
      {/* ClientFooter çağrısı kaldırıldı */}
      {/* <ClientFooter /> */}
    </>
  );
};

export default MetodolojiPage; 