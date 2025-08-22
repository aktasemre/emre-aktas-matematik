'use client';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { CONTACT_INFO } from '@/constants/contact';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo ve İletişim */}
          <div className="space-y-4">
            <div className="text-2xl lg:text-3xl font-bold text-indigo-400">
              Emre Aktaş
            </div>
            <div className="text-sm lg:text-base text-gray-300 space-y-3">
              <p className="flex items-center">
                <FaPhone className="mr-3 text-indigo-400 flex-shrink-0" />
                <a 
                  href={`tel:${CONTACT_INFO.PHONE}`} 
                  className="hover:text-indigo-400 transition-colors duration-200"
                >
                  {CONTACT_INFO.PHONE_DISPLAY}
                </a>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-3 text-indigo-400 flex-shrink-0" />
                <a 
                  href={`mailto:${CONTACT_INFO.EMAIL}`} 
                  className="hover:text-indigo-400 transition-colors duration-200"
                >
                  {CONTACT_INFO.EMAIL}
                </a>
              </p>
              <p className="flex items-start">
                <FaMapMarkerAlt className="mr-3 text-indigo-400 flex-shrink-0 mt-1" />
                <span>{CONTACT_INFO.ADDRESS}</span>
              </p>
            </div>
          </div>

          {/* Hizmetler */}
          <div className="space-y-4">
            <h3 className="text-lg lg:text-xl font-semibold text-indigo-400 border-b border-gray-700 pb-2">
              Hizmetler
            </h3>
            <div className="space-y-2">
              <Link href="/matematik" className="block text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                Matematik Özel Ders
              </Link>
              <Link href="/lgs" className="block text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                LGS Hazırlık
              </Link>
              <Link href="/tyt-ayt" className="block text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                TYT/AYT Hazırlık
              </Link>
              <Link href="/okul-destek" className="block text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                Okul Desteği
              </Link>
              <Link href="/metodoloji" className="block text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                Metodoloji
              </Link>
            </div>
          </div>

          {/* Sayfalar */}
          <div className="space-y-4">
            <h3 className="text-lg lg:text-xl font-semibold text-indigo-400 border-b border-gray-700 pb-2">
              Sayfalar
            </h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                Ana Sayfa
              </Link>
              <Link href="/hakkimda" className="block text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                Hakkımda
              </Link>
              <Link href="/ucretler" className="block text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                Ücretler
              </Link>
              <Link href="/referanslar" className="block text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                Referanslar
              </Link>
              <Link href="/iletisim" className="block text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                İletişim
              </Link>
            </div>
          </div>

          {/* İletişim */}
          <div className="space-y-4">
            <h3 className="text-lg lg:text-xl font-semibold text-indigo-400 border-b border-gray-700 pb-2">
              İletişim
            </h3>
            <div className="space-y-4">
              <a 
                href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent(CONTACT_INFO.WHATSAPP_DEFAULT_TEXT)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-sm lg:text-base"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp ile İletişim
              </a>
              
              <div className="text-sm text-gray-400">
                <p className="mb-2">Çalışma Saatleri:</p>
                <p>Pazartesi - Cuma: {CONTACT_INFO.WORKING_HOURS.WEEKDAYS}</p>
                <p>Cumartesi: {CONTACT_INFO.WORKING_HOURS.SATURDAY}</p>
                <p>Pazar: {CONTACT_INFO.WORKING_HOURS.SUNDAY}</p>
              </div>
              
              <div className="text-sm text-gray-400">
                <p className="mb-2">Hizmet Bölgeleri:</p>
                <p>{CONTACT_INFO.SERVICE_AREAS.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="text-sm lg:text-base">
            © {new Date().getFullYear()} Emre Aktaş - Matematik Özel Ders. Tüm hakları saklıdır.
          </p>
          <p className="text-xs lg:text-sm mt-2 text-gray-500">
            15 yıllık deneyimli matematik öğretmeni - İstanbul'da matematik özel ders hizmeti
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 