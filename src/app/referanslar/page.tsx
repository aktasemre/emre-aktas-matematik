import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referanslar | Emre Aktaş Matematik',
  description: 'Öğrenci ve veli görüşleri. Emre Aktaş ile matematik özel ders alan öğrencilerin başarı hikayeleri.',
  openGraph: {
    title: 'Referanslar | Emre Aktaş Matematik',
    description: 'Öğrenci ve veli görüşleri. Emre Aktaş ile matematik özel ders alan öğrencilerin başarı hikayeleri.',
  },
}

export default function ReferanslarPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-800 mb-6">
          Referanslar
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Öğrenci ve veli görüşleri. Emre Aktaş ile matematik özel ders alan öğrencilerin 
          başarı hikayeleri ve deneyimleri.
        </p>
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">500+</div>
          <div className="text-indigo-100">Mutlu Öğrenci</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">%98</div>
          <div className="text-green-100">Memnuniyet</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">4.9/5</div>
          <div className="text-purple-100">Ortalama Puan</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">10+</div>
          <div className="text-orange-100">Yıl Deneyim</div>
        </div>
      </div>

      {/* LGS Başarı Hikayeleri */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">LGS Başarı Hikayeleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                A
              </div>
              <div>
                <div className="font-bold text-gray-800">Ahmet Yılmaz</div>
                <div className="text-sm text-gray-600">Fen Lisesi Öğrencisi</div>
                <div className="text-sm text-green-600 font-semibold">LGS: 20/20 Matematik</div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Emre Hocam sayesinde LGS'de matematikten tam puan aldım. Özellikle yeni nesil sorularda 
              çok yardımı oldu. Sabırlı yaklaşımı ve anlaşılır anlatımı ile matematik artık en sevdiğim ders."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                E
              </div>
              <div>
                <div className="font-bold text-gray-800">Elif Kaya</div>
                <div className="text-sm text-gray-600">Anadolu Lisesi Öğrencisi</div>
                <div className="text-sm text-blue-600 font-semibold">LGS: 19/20 Matematik</div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Matematikten korkuyordum ama Emre Hocam'ın sabırlı yaklaşımı sayesinde 
              LGS'de matematik alanında %95 başarı elde ettim. Artık matematikten korkmuyorum."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                M
              </div>
              <div>
                <div className="font-bold text-gray-800">Mehmet Demir</div>
                <div className="text-sm text-gray-600">Fen Lisesi Öğrencisi</div>
                <div className="text-sm text-purple-600 font-semibold">LGS: 18/20 Matematik</div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Emre Hocam'ın sistematik yaklaşımı ve düzenli deneme sınavları sayesinde 
              LGS'de başarılı oldum. Özellikle zaman yönetimi konusunda çok yardımı oldu."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                S
              </div>
              <div>
                <div className="font-bold text-gray-800">Selin Özkan</div>
                <div className="text-sm text-gray-600">Anadolu Lisesi Öğrencisi</div>
                <div className="text-sm text-orange-600 font-semibold">LGS: 17/20 Matematik</div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Emre Hocam'ın kişiselleştirilmiş eğitim yaklaşımı sayesinde matematik 
              seviyem çok gelişti. LGS'de hedeflediğim puanı aldım."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TYT/AYT Başarı Hikayeleri */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">TYT/AYT Başarı Hikayeleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-500">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                M
              </div>
              <div>
                <div className="font-bold text-gray-800">Mehmet Arslan</div>
                <div className="text-sm text-gray-600">Tıp Fakültesi Öğrencisi</div>
                <div className="text-sm text-indigo-600 font-semibold">TYT: 35/40 Matematik</div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Emre Hocam sayesinde TYT'de matematikten 35 doğru yaptım ve hayalimdeki tıp fakültesine yerleştim. 
              Özellikle AYT matematik konularında çok yardımı oldu."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                S
              </div>
              <div>
                <div className="font-bold text-gray-800">Selin Korkmaz</div>
                <div className="text-sm text-gray-600">Mühendislik Fakültesi Öğrencisi</div>
                <div className="text-sm text-green-600 font-semibold">AYT: 38/40 Matematik</div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "AYT matematik konularında zorlanıyordum ama Emre Hocam'ın sistematik yaklaşımı sayesinde 
              mühendislik fakültesine yerleştim. Çok teşekkürler!"
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                B
              </div>
              <div>
                <div className="font-bold text-gray-800">Berk Yıldız</div>
                <div className="text-sm text-gray-600">İktisat Fakültesi Öğrencisi</div>
                <div className="text-sm text-purple-600 font-semibold">TYT: 32/40 Matematik</div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Emre Hocam'ın pratik çözüm teknikleri sayesinde TYT matematikte başarılı oldum. 
              Özellikle zaman yönetimi konusunda çok yardımı oldu."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                Z
              </div>
              <div>
                <div className="font-bold text-gray-800">Zeynep Aydın</div>
                <div className="text-sm text-gray-600">Eczacılık Fakültesi Öğrencisi</div>
                <div className="text-sm text-orange-600 font-semibold">AYT: 36/40 Matematik</div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Emre Hocam'ın detaylı konu anlatımları ve bol örnek çözümleri sayesinde 
              AYT matematikte başarılı oldum. Eczacılık fakültesine yerleştim."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Veli Görüşleri */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Veli Görüşleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                A
              </div>
              <div>
                <div className="font-bold text-gray-800">Ayşe Yılmaz</div>
                <div className="text-sm text-gray-600">Ahmet'in Annesi</div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Oğlum matematikten çok korkuyordu. Emre Hocam'ın sabırlı yaklaşımı sayesinde 
              artık matematik en sevdiği ders oldu. LGS'de de çok başarılı oldu. Çok teşekkürler!"
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                M
              </div>
              <div>
                <div className="font-bold text-gray-800">Mehmet Demir</div>
                <div className="text-sm text-gray-600">Elif'in Babası</div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Kızımın matematik notları çok düşüktü. Emre Hocam'ın sistematik yaklaşımı sayesinde 
              notları yükseldi ve özgüveni arttı. Çok memnunuz."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                F
              </div>
              <div>
                <div className="font-bold text-gray-800">Fatma Kaya</div>
                <div className="text-sm text-gray-600">Selin'in Annesi</div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Emre Hocam'ın düzenli veli bilgilendirmeleri ve şeffaf yaklaşımı çok güzel. 
              Kızımın gelişimini net bir şekilde görebiliyoruz. Teşekkürler!"
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                A
              </div>
              <div>
                <div className="font-bold text-gray-800">Ali Özkan</div>
                <div className="text-sm text-gray-600">Berk'in Babası</div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Oğlumun üniversite sınavına hazırlık sürecinde Emre Hocam'ın profesyonel yaklaşımı 
              çok faydalı oldu. Hedeflediği bölüme yerleşti. Çok teşekkürler!"
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Genel Değerlendirmeler */}
      <div className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Genel Değerlendirmeler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">4.9/5</div>
            <div className="text-gray-600 mb-4">Genel Puan</div>
            <div className="flex justify-center text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <div className="text-sm text-gray-600">500+ değerlendirme</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">%98</div>
            <div className="text-gray-600 mb-4">Memnuniyet Oranı</div>
            <div className="text-sm text-gray-600">Öğrenci ve veli memnuniyeti</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">%95</div>
            <div className="text-gray-600 mb-4">Başarı Oranı</div>
            <div className="text-sm text-gray-600">Hedeflerine ulaşan öğrenci</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Siz de Başarı Hikayenizi Yazın!</h2>
        <p className="text-xl mb-6 text-indigo-100">
          Emre Aktaş ile matematik özel ders alarak hedeflerinize ulaşın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/905XXXXXXXXX?text=Referanslarınızı gördüm, bilgi almak istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            WhatsApp ile İletişim
          </a>
          <a 
            href="tel:+905XXXXXXXXX"
            className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Hemen Ara
          </a>
        </div>
      </div>
    </main>
  )
}
