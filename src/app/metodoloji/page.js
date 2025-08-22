import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaPhone, FaBook, FaChartLine, FaCalendarAlt, FaClipboardCheck, FaEye } from 'react-icons/fa';
import { CONTACT_INFO } from '@/constants/contact';

export const metadata = {
  title: 'Başarı Metodolojimiz | Emre Aktaş Matematik',
  description: 'LGS ve YKS hazırlığında kullandığımız kanıtlanmış 4 adımlı başarı metodolojimizi keşfedin: Analiz, Planlama, Ödevlendirme ve Takip.',
};

const MetodolojiPage = () => {
  const whatsappText = encodeURIComponent('Eğitim metodolojiniz hakkında bilgi almak istiyorum');
  const whatsappLink = `https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${whatsappText}`;
  const phoneLink = `tel:${CONTACT_INFO.PHONE}`;

  const methodologySteps = [
    {
      icon: <FaChartLine className="text-4xl text-indigo-600" />,
      title: "1. Analiz ve Değerlendirme",
      description: "Öğrencinin mevcut seviyesi, güçlü ve zayıf yönleri detaylı olarak analiz edilir.",
      details: [
        "Seviye belirleme testi",
        "Önceki sınav sonuçları analizi",
        "Öğrenme stili tespiti",
        "Hedef belirleme"
      ]
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-purple-600" />,
      title: "2. Kişiselleştirilmiş Planlama",
      description: "Analiz sonuçlarına göre öğrenciye özel haftalık ve aylık çalışma planı oluşturulur.",
      details: [
        "Haftalık ders programı",
        "Konu bazlı çalışma planı",
        "Sınav takvimi entegrasyonu",
        "Esnek düzenleme imkanı"
      ]
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-green-600" />,
      title: "3. Ödevlendirme ve Takip",
      description: "Her ders sonrası ödev verilir ve düzenli olarak takip edilir.",
      details: [
        "Günlük ödev takibi",
        "Haftalık değerlendirme",
        "Eksik konuların tespiti",
        "Performans raporları"
      ]
    },
    {
      icon: <FaEye className="text-4xl text-blue-600" />,
      title: "4. Sürekli İzleme ve Geri Bildirim",
      description: "Öğrencinin gelişimi sürekli izlenir ve gerekli düzenlemeler yapılır.",
      details: [
        "Aylık gelişim raporu",
        "Veli bilgilendirme",
        "Plan güncellemeleri",
        "Motivasyon desteği"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Başarı Metodolojimiz
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            LGS ve YKS hazırlığında kullandığımız kanıtlanmış 4 adımlı başarı metodolojimiz ile 
            hedeflerinize ulaşın.
          </p>
        </div>
      </section>

      {/* Methodology Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodologySteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-gray-700">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Metodolojimizle Başarıya Ulaşın
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Kanıtlanmış metodolojimizle LGS, YKS ve diğer sınavlarda başarıya nasıl ulaşabileceğinizi 
            öğrenmek için bizimle iletişime geçin. Size özel bir yol haritası oluşturalım.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp ile Bilgi Alın
            </a>
            
            <a 
              href={phoneLink}
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaPhone className="mr-2" />
              Ücretsiz Danışmanlık İçin Arayın
            </a>
            
            <Link 
              href="/matematik"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <FaBook className="mr-2" />
              Matematik Derslerini İnceleyin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MetodolojiPage;