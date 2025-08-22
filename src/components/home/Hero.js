'use client';

import { useState, useEffect } from 'react';
import { CONTACT_INFO } from '@/constants/contact';

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const stats = [
    { label: '15+ Yıl Deneyim', value: '15+' },
    { label: '1000+ Öğrenci', value: '1000+' },
    { label: '%98 Başarı Oranı', value: '%98' },
    { label: '7 Hizmet Bölgesi', value: '7' }
  ];

  const teachingMethods = [
    {
      title: 'Kişiselleştirilmiş Eğitim',
      description: 'Her öğrencinin öğrenme tarzına uygun özel program',
      icon: '🎯'
    },
    {
      title: 'Pratik Odaklı Yaklaşım',
      description: 'Bol örnek ve alıştırma ile konuları pekiştirme',
      icon: '📝'
    },
    {
      title: 'Sınav Stratejileri',
      description: 'LGS, TYT, AYT için özel sınav teknikleri',
      icon: '📊'
    },
    {
      title: 'Sürekli Takip',
      description: 'Düzenli geri bildirim ve ilerleme raporları',
      icon: '📈'
    }
  ];

  const gradeLevels = [
    {
      grade: '5-8. Sınıf',
      focus: 'Temel Matematik',
      description: 'Matematik temellerini güçlendirme ve okul başarısı',
      features: ['Temel işlemler', 'Geometri', 'Problem çözme', 'Sınav hazırlığı']
    },
    {
      grade: '9-10. Sınıf',
      focus: 'LGS Hazırlık',
      description: 'Liseye Geçiş Sınavı için kapsamlı hazırlık',
      features: ['Yeni nesil sorular', 'Sınav stratejileri', 'Zaman yönetimi', 'Kaygı kontrolü']
    },
    {
      grade: '11-12. Sınıf',
      focus: 'TYT/AYT Hazırlık',
      description: 'Üniversite sınavları için ileri matematik',
      features: ['Analitik geometri', 'İleri matematik', 'Sınav teknikleri', 'Konu tekrarları']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Arka plan resmi */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-math.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/80 to-indigo-900/90"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto">
            {/* Ana başlık */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">15 Yıllık Deneyimli</span>
              <span className="block text-yellow-400">Matematik Öğretmeni</span>
            </h1>
            
            {/* Alt başlık */}
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              LGS, TYT, AYT ve okul desteği için özel matematik dersleri. 
              <br />
              <span className="text-yellow-300 font-semibold">
                Başakşehir, Bahçeşehir, Florya, Küçükçekmece, Esenler, Sultangazi, Arnavutköy
              </span>
            </p>

            {/* İstatistikler */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                    {isClient ? stat.value : '...'}
                  </div>
                  <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Butonları */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent(CONTACT_INFO.WHATSAPP_DEFAULT_TEXT)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center gap-2"
              >
                <span>📱 WhatsApp'tan Yaz</span>
              </a>
              <a
                href={`tel:+${CONTACT_INFO.PHONE}`}
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center gap-2"
              >
                <span>📞 Hemen Ara</span>
              </a>
            </div>

            {/* Hizmet bölgeleri */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-3 text-yellow-300">Hizmet Bölgeleri</h3>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                {CONTACT_INFO.SERVICE_AREAS.map((area, index) => (
                  <span 
                    key={index}
                    className="bg-white/20 px-3 py-1 rounded-full text-white"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Öğretim Yöntemleri */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Öğretim Yöntemlerim</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                15 yıllık deneyimimle geliştirdiğim özel yöntemlerle matematik öğretiyorum
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teachingMethods.map((method, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sınıf Bazlı Ders Yöntemleri */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Sınıf Bazlı Ders Yöntemleri</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Her sınıf seviyesine özel geliştirdiğim eğitim programları
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {gradeLevels.map((level, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">{level.grade}</h3>
                    <p className="text-lg font-semibold text-gray-700 mb-2">{level.focus}</p>
                    <p className="text-gray-600">{level.description}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <span className="text-green-500 text-lg">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Başarı Hikayeleri */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Başarı Hikayeleri</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Öğrencilerimin matematik yolculuğundaki başarıları
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-yellow-400 text-2xl mb-4">⭐</div>
                <p className="text-gray-200 mb-4">
                  "Emre Hocam sayesinde matematik korkum tamamen geçti. LGS'de %98 başarı elde ettim."
                </p>
                <p className="text-sm text-gray-300">- Ayşe K., LGS Öğrencisi</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-yellow-400 text-2xl mb-4">⭐</div>
                <p className="text-gray-200 mb-4">
                  "TYT matematikte 15 net yapıyordum, şimdi 35 net yapıyorum. Teşekkürler Emre Hocam!"
                </p>
                <p className="text-sm text-gray-300">- Mehmet A., TYT Öğrencisi</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-yellow-400 text-2xl mb-4">⭐</div>
                <p className="text-gray-200 mb-4">
                  "Matematik artık en sevdiğim ders. Emre Hocam'ın yöntemleri çok etkili."
                </p>
                <p className="text-sm text-gray-300">- Zeynep B., 8. Sınıf</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero; 