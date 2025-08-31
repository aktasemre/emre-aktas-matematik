import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CONTACT_INFO } from '@/constants/contact'
import Breadcrumb from '@/components/common/Breadcrumb'

export const metadata: Metadata = {
  title: '8. Sınıf LGS Örnek Sorular | MEB Kaynakları | Emre Aktaş',
  description: '8. sınıf LGS örnek soruları, MEB kaynakları, yıllara göre düzenlenmiş örnek sorular. Matematik odaklı LGS hazırlık kaynakları.',
  keywords: [
    '8. sınıf örnek sorular',
    'LGS örnek sorular',
    'MEB örnek sorular',
    'matematik örnek sorular',
    'LGS hazırlık',
    '8. sınıf matematik',
    'LGS matematik soruları'
  ],
  openGraph: {
    title: '8. Sınıf LGS Örnek Sorular | MEB Kaynakları',
    description: 'Yıllara göre düzenlenmiş 8. sınıf LGS örnek soruları ve MEB kaynakları.',
    type: 'website',
  },
  alternates: {
    canonical: '/8-sinif-ornek-sorular',
  },
}

const mathTopics = [
  { name: 'Çarpanlar ve Katlar', icon: '🔢' },
  { name: 'Üslü İfadeler', icon: '📈' },
  { name: 'Kareköklü İfadeler', icon: '√' },
  { name: 'Veri Analizi', icon: '📊' },
  { name: 'Basit Olayların Olma Olasılığı', icon: '🎲' },
  { name: 'Cebirsel İfadeler ve Özdeşlikler', icon: '📐' },
  { name: 'Doğrusal Denklemler', icon: '📏' },
  { name: 'Eşitsizlikler', icon: '⚖️' },
  { name: 'Üçgenler', icon: '🔺' },
  { name: 'Eşlik ve Benzerlik', icon: '🔄' },
  { name: 'Dönüşüm Geometrisi', icon: '🔄' },
  { name: 'Geometrik Cisimler', icon: '📦' }
]

const yearGroups = [
  {
    year: '2024-2025',
    color: 'blue',
    sets: [
      { number: 3, name: '3. Örnek Sorular' },
      { number: 2, name: '2. Örnek Sorular' },
      { number: 1, name: '1. Örnek Sorular' }
    ]
  },
  {
    year: '2023-2024',
    color: 'green',
    sets: [
      { number: 3, name: '3. Örnek Sorular' },
      { number: 2, name: '2. Örnek Sorular' },
      { number: 1, name: '1. Örnek Sorular' }
    ]
  },
  {
    year: '2022-2023',
    color: 'purple',
    months: ['Ekim', 'Kasım', 'Aralık', 'Ocak', 'Şubat']
  },
  {
    year: '2020',
    color: 'orange',
    months: ['Ocak', 'Şubat', 'Mart', 'Nisan (1)', 'Nisan (2)', 'Mayıs (1)', 'Mayıs (2)']
  },
  {
    year: '2018-2019',
    color: 'teal',
    months: ['Ekim', 'Kasım', 'Aralık', 'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs']
  },
  {
    year: '2017-2018',
    color: 'indigo',
    months: ['Genel Örnek Sorular']
  }
]

export default function SinifOrnekSorular() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: '8. Sınıf Örnek Sorular' }
        ]} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              8. Sınıf LGS Örnek Sorular
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              MEB tarafından yayınlanan 8. sınıf LGS örnek soruları<br />
              Yıllara ve konulara göre düzenlenmiş kapsamlı kaynaklar
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">📚 6 Yıl Arşiv</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">🔢 12 Matematik Konusu</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">📄 50+ PDF Kaynak</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">🎥 Video Çözümler</span>
            </div>
          </div>
        </div>
      </section>

      {/* Matematik Konuları */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              📚 8. Sınıf Matematik Konuları
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mathTopics.map((topic, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                  <div className="text-2xl mb-2">{topic.icon}</div>
                  <h3 className="text-sm font-semibold text-gray-800">{topic.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Yıllara Göre Örnek Sorular */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              📅 Yıllara Göre LGS Örnek Sorular
            </h2>
            
            {yearGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-12">
                <h3 className={`text-2xl font-bold mb-6 text-${group.color}-800 flex items-center gap-2`}>
                  <span className={`bg-${group.color}-100 px-3 py-1 rounded-full text-sm`}>
                    {group.year}
                  </span>
                  LGS Örnek Soruları
                </h3>
                
                                 {group.sets ? (
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {group.sets.map((set, setIndex) => (
                       <div key={setIndex} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                         <h4 className="text-lg font-semibold mb-4 text-gray-800">{set.name}</h4>
                         <div className="space-y-3">
                           <a 
                             href="https://kerimhoca.com/liselere-giris-sinavi-meb-ornek-sorular/"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="block bg-red-50 hover:bg-red-100 p-3 rounded-lg text-center transition-colors"
                           >
                             <div className="text-red-600 font-medium">📄 PDF Sayısal Bölüm</div>
                           </a>
                           <a 
                             href="https://kerimhoca.com/liselere-giris-sinavi-meb-ornek-sorular/"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="block bg-green-50 hover:bg-green-100 p-3 rounded-lg text-center transition-colors"
                           >
                             <div className="text-green-600 font-medium">📄 PDF Sözel Bölüm</div>
                           </a>
                           <a 
                             href="https://kerimhoca.com/liselere-giris-sinavi-meb-ornek-sorular/"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="block bg-blue-50 hover:bg-blue-100 p-3 rounded-lg text-center transition-colors"
                           >
                             <div className="text-blue-600 font-medium">🔢 PDF Matematik Bölümü</div>
                           </a>
                           <a 
                             href="https://kerimhoca.com/liselere-giris-sinavi-meb-ornek-sorular/"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="block bg-purple-50 hover:bg-purple-100 p-3 rounded-lg text-center transition-colors"
                           >
                             <div className="text-purple-600 font-medium">🎥 Video Çözümler</div>
                           </a>
                         </div>
                       </div>
                     ))}
                   </div>
                                 ) : (
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {group.months?.map((month, monthIndex) => {
                       // Tüm yıllar için özel linkler
                       const allLinks = {
                         '2022-2023': {
                           'Ekim': {
                             matematik: 'https://drive.google.com/file/d/1IpIxhXiS7_ARbFVhHStAR3g3yahqYmcI/view?usp=sharing',
                             sayisal: 'https://drive.google.com/file/d/1dl0LZmIUm96KKsctqw0Dm_QdhDK-L1rV/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/1U8JSp73p2KAvuKG51YQoV5RBjq-BqPTi/view?usp=sharing'
                           },
                           'Kasım': {
                             matematik: 'https://drive.google.com/file/d/1FJa-9BdlBnZEjRzabZuxGVI3SjeVWVi1/view?usp=sharing',
                             sayisal: 'https://drive.google.com/file/d/1LbsR--cIPKLPgIkkdA7B6LN415Kum_kd/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/1xbF9gl_AEXgfs354zad8Jsk6PnJMwP9l/view?usp=sharing',
                             videoSayisal: 'https://youtu.be/J4I4WkYbwj0',
                             videoSozel: 'https://youtu.be/QiVCqfhqnGk'
                           },
                           'Aralık': {
                             matematik: 'https://drive.google.com/file/d/1N7hREcGrHxah2NVvhNtJKTXRnO2jzBH_/view?usp=sharing',
                             sayisal: 'https://drive.google.com/file/d/12CLdfoDfu0J_vO8nTeSKj1q1zXg2I_vd/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/1nWDiXhUNV3Hbw8T_p2mKIxTqX-IByEIN/view?usp=sharing',
                             videoSayisal: 'https://www.youtube.com/watch?v=jE61He4z3Io',
                             videoSozel: 'https://www.youtube.com/watch?v=ib6kOixyfE8'
                           },
                           'Ocak': {
                             matematik: 'https://drive.google.com/file/d/1vPvwDpCxI7avXpQOBeYMZPIkuN0wUZeD/view?usp=sharing',
                             sayisal: 'https://drive.google.com/file/d/1ARpoMA4uCuk3PAo_4k0nhUUpYAUMt8fT/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/1J-9rw9eqfrq9scPRqHwpuLJVDoS3xSNE/view?usp=sharing',
                             videoSayisal: 'https://www.youtube.com/watch?v=8H1NPDWS3V8',
                             videoSozel: 'https://www.youtube.com/watch?v=cuXOZm71Pjk'
                           },
                           'Şubat': {
                             matematik: 'https://drive.google.com/file/d/16u6wE5sOHaSwxFs7OXTiu2j5ma4l/view?usp=sharing',
                             sayisal: 'https://drive.google.com/file/d/1ARpoMA4uCuk3PAo_4k0nhUUpYAUMt8fT/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/1J-9rw9eqfrq9scPRqHwpuLJVDoS3xSNE/view?usp=sharing'
                           }
                         },
                         '2020': {
                           'Ocak': {
                             sayisal: 'https://drive.google.com/open?id=1XUOmIV55iPeXbWnve7KNnxN31UhbX-SI',
                             sozel: 'https://drive.google.com/open?id=1a_OHo8ijeJVv7CA4xYdgGIwG9rZk3RhU'
                           },
                           'Şubat': {
                             sayisal: 'https://drive.google.com/open?id=1zLyf5REOU4CGawM7XAl7-bcvaDPNRU4A',
                             sozel: 'https://drive.google.com/open?id=12uDrvyb6w7ADcAcBGh9izdKdhUSMIj3q'
                           },
                           'Mart': {
                             sayisal: 'https://drive.google.com/open?id=1XvM-ISy0QK4VZkcVuuyfSXjEQNOxvOkv',
                             sozel: 'https://drive.google.com/open?id=1ky8xUVhAnLrDAjBCgnpTRZeifivqMabu'
                           },
                           'Nisan (1)': {
                             sayisal: 'https://drive.google.com/file/d/1EEVhK2BFy5_C63wgcOJsR6U4csGOa-GE/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/1d_hnsNswk14HqjlpBiwywnieSuBq-uuT/view?usp=sharing'
                           },
                           'Nisan (2)': {
                             sayisal: 'https://drive.google.com/file/d/1LrHGl6IjJqVXejNUiP8umULqyGHVr4B6/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/1W2e4NVKGZ-sN-9SARM1TjO-z9ngkr_lo/view?usp=sharing'
                           },
                           'Mayıs (1)': {
                             sayisal: 'https://drive.google.com/file/d/11Aw_Y3AojOAQUVDoTg5qlehq-GQABogZ/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/1mlbKQWJpI6OhjmpaGYY82jZvgxViRvkl/view?usp=sharing'
                           },
                           'Mayıs (2)': {
                             sayisal: 'https://drive.google.com/open?id=186g4WvWHbEx-9_99byGlgZMXjCO8OjbD',
                             sozel: 'https://drive.google.com/open?id=18pnAOGI1R04iYwgJftRyx4TvhMnBtdXM'
                           }
                         },
                         '2018-2019': {
                           'Ekim': {
                             sayisal: 'https://drive.google.com/file/d/133EmIISnCXUMOQh5SStY6T3lXt8nk13U/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/1s3boI7z_BypfKge46uSowPka2SdgKTLQ/view?usp=sharing'
                           },
                           'Kasım': {
                             sayisal: 'https://drive.google.com/file/d/1-J8Yfwuin_QdfZSypGQRgKCNQRmPcwUp/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/1WcuTN5vFduxUcwEddVA6A61rVKHXCtlp/view?usp=sharing'
                           },
                           'Aralık': {
                             sayisal: 'https://drive.google.com/file/d/1UTYlVuBIxG7BPiogDiFpY4WVruGTkyOB/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/1a80fFRtT2Rq-z3RGXDNUGIWKI0fxstfR/view?usp=sharing'
                           },
                           'Ocak': {
                             sayisal: 'https://drive.google.com/file/d/1MjwFmLQdKnb8X97vGuET4pfN3xsZ7Sss/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/17SULVrzVfJK4T1GkABZ6qrK7_CzGTbwC/view?usp=sharing'
                           },
                           'Şubat': {
                             sayisal: 'https://drive.google.com/file/d/1ssJX0xU1NKfSMrtVvlT5ZzW4AL-BR9kU/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/1AtocUgP0uVMeaodZUOApg5KCtn9yVdIt/view?usp=sharing'
                           },
                           'Mart': {
                             sayisal: 'https://drive.google.com/file/d/1A74ojb_Rr75DdunRxUvuULNA6_BDBiTA/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/1ox_Orjb9DkRioESY1DevRvoGD6DRhHla/view?usp=sharing'
                           },
                           'Nisan': {
                             sayisal: 'https://drive.google.com/file/d/1AFLeqPgYpt4bQd_fTaB1THs9Rd4PpEry/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/17_GYkUS5xcZXrdEII3QbVSZnZBysoEm8/view?usp=sharing'
                           },
                           'Mayıs': {
                             sayisal: 'https://drive.google.com/file/d/1vsNZ948CSNPKqS-aDQv3FfwJhcLVQpDP/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/1uTKYfHDSbKGdougVr98WsB6sDARZGuh1/view?usp=sharing'
                           }
                         },
                         '2017-2018': {
                           'Genel Örnek Sorular': {
                             sayisal: 'https://drive.google.com/file/d/1nF6zKr0HKpkSj3QV4FvqIicEFF0CRkEx/view?usp=sharing',
                             sozel: 'https://drive.google.com/file/d/1speASia-h3vZHMJ6J0UgFEh63qsb_qQR/view?usp=sharing'
                           }
                         }
                       }
                       
                       const yearLinks = allLinks[group.year as keyof typeof allLinks]
                       if (yearLinks) {
                         const monthLinks = yearLinks[month as keyof typeof yearLinks]
                         if (monthLinks) {
                           return (
                             <div key={monthIndex} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                               <h4 className="text-lg font-semibold mb-4 text-gray-800">{month} {group.year}</h4>
                               <div className="space-y-3">
                                 {'matematik' in monthLinks && (monthLinks as any).matematik && (
                                   <a 
                                     href={(monthLinks as any).matematik}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="block bg-blue-50 hover:bg-blue-100 p-3 rounded-lg text-center transition-colors"
                                   >
                                     <div className="text-blue-600 font-medium">🔢 PDF Matematik</div>
                                   </a>
                                 )}
                                 {'sayisal' in monthLinks && (monthLinks as any).sayisal && (
                                   <a 
                                     href={(monthLinks as any).sayisal}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="block bg-red-50 hover:bg-red-100 p-3 rounded-lg text-center transition-colors"
                                   >
                                     <div className="text-red-600 font-medium">📄 PDF Sayısal Bölüm</div>
                                   </a>
                                 )}
                                 {'sozel' in monthLinks && (monthLinks as any).sozel && (
                                   <a 
                                     href={(monthLinks as any).sozel}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="block bg-green-50 hover:bg-green-100 p-3 rounded-lg text-center transition-colors"
                                   >
                                     <div className="text-green-600 font-medium">📄 PDF Sözel Bölüm</div>
                                   </a>
                                 )}
                                 {'videoSayisal' in monthLinks && (monthLinks as any).videoSayisal && (
                                   <a 
                                     href={(monthLinks as any).videoSayisal}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="block bg-purple-50 hover:bg-purple-100 p-3 rounded-lg text-center transition-colors"
                                   >
                                     <div className="text-purple-600 font-medium">🎥 Video Çözüm Sayısal</div>
                                   </a>
                                 )}
                                 {'videoSozel' in monthLinks && (monthLinks as any).videoSozel && (
                                   <a 
                                     href={(monthLinks as any).videoSozel}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="block bg-purple-50 hover:bg-purple-100 p-3 rounded-lg text-center transition-colors"
                                   >
                                     <div className="text-purple-600 font-medium">🎥 Video Çözüm Sözel</div>
                                   </a>
                                 )}
                               </div>
                             </div>
                           )
                         }
                       }
                       
                       // Diğer yıllar için genel link
                       return (
                         <a 
                           key={monthIndex}
                           href="https://kerimhoca.com/liselere-giris-sinavi-meb-ornek-sorular/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className={`bg-${group.color}-50 hover:bg-${group.color}-100 p-4 rounded-lg text-center transition-colors border-2 border-${group.color}-200`}
                         >
                           <div className={`text-${group.color}-600 font-semibold text-sm`}>
                             {month}
                           </div>
                           <div className={`text-xs text-${group.color}-500 mt-1`}>
                             {group.year}
                           </div>
                         </a>
                       )
                     })}
                   </div>
                 )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEB Resmi Kaynaklar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              🏛️ MEB Resmi Kaynaklar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="https://odsgm.meb.gov.tr" target="_blank" rel="noopener noreferrer" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors text-center">
                <div className="text-3xl mb-3">🏛️</div>
                <h4 className="font-semibold text-blue-800 mb-2">ODSGM Ana Sayfası</h4>
                <p className="text-sm text-blue-600">MEB Ölçme Değerlendirme ve Sınav Hizmetleri</p>
              </a>
              <a href="https://www.meb.gov.tr/lgs-merkez-sinavina-yonelik-yeni-ornek-sorulari-yayimlandi/haber/35444/tr" target="_blank" rel="noopener noreferrer" className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors text-center">
                <div className="text-3xl mb-3">🆕</div>
                <h4 className="font-semibold text-green-800 mb-2">2024-2025 LGS Örnek Soruları</h4>
                <p className="text-sm text-green-600">En güncel LGS örnek soruları duyurusu</p>
              </a>
              <a href="https://kerimhoca.com/liselere-giris-sinavi-meb-ornek-sorular/" target="_blank" rel="noopener noreferrer" className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors text-center">
                <div className="text-3xl mb-3">👨‍🏫</div>
                <h4 className="font-semibold text-orange-800 mb-2">Kerimhoca.com</h4>
                <p className="text-sm text-orange-600">Kapsamlı LGS örnek sorular arşivi</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              LGS Hazırlığında Yardıma mı İhtiyacınız Var?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Örnek soruları çözdükten sonra, kişiselleştirilmiş özel ders ile 
              matematik başarınızı maksimum seviyeye çıkarın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent('Merhaba! 8. sınıf LGS matematik özel ders hakkında bilgi almak istiyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <span>💬 WhatsApp ile İletişim</span>
              </a>
              <Link 
                href="/lgs"
                className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <span>📚 LGS Hazırlık Detayları</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
