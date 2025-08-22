'use client';

import { CONTACT_INFO } from '@/constants/contact';

const Cta = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Arka plan resmi */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(/images/teacher-student.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          {/* Ana başlık */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block">15 Yıllık Deneyimle</span>
            <span className="block text-yellow-400">Matematik Başarısı</span>
          </h2>
          
          {/* Alt başlık */}
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            LGS, TYT, AYT ve okul desteği için özel matematik dersleri. 
            Kişiselleştirilmiş eğitim metodolojisi ile matematik artık korkutucu değil!
          </p>

          {/* İstatistikler */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-lg text-gray-200">Yıl Deneyim</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">%98</div>
              <div className="text-lg text-gray-200">Başarı Oranı</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">1000+</div>
              <div className="text-lg text-gray-200">Mutlu Öğrenci</div>
            </div>
          </div>

          {/* Hizmet bölgeleri */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-300">Hizmet Bölgeleri</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {CONTACT_INFO.SERVICE_AREAS.map((area, index) => (
                <span 
                  key={index}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Butonları */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent(CONTACT_INFO.WHATSAPP_DEFAULT_TEXT)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <span>📱 WhatsApp'tan Yaz</span>
            </a>
            <a
              href={`tel:+${CONTACT_INFO.PHONE}`}
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <span>📞 Hemen Ara</span>
            </a>
          </div>

          {/* İletişim bilgileri */}
          <div className="mt-12 text-gray-300">
            <p className="text-lg">
              <strong>Telefon:</strong> {CONTACT_INFO.PHONE_DISPLAY} | 
              <strong> E-posta:</strong> {CONTACT_INFO.EMAIL}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta 