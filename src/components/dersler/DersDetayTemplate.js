import React from 'react';
import styles from '@/styles/DersDetayPage.module.css';
import Button from '@/components/common/Button';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import { CONTACT_INFO, FORM_SOURCES } from '@/constants';
import Image from 'next/image';

const DersDetayTemplate = ({ 
  title,
  subtitle,
  imagePath,
  altText,
  children,
  methodologyTitle = 'Nasıl Çalışıyoruz?',
  methodologySteps = [],
  additionalInfo = null,
  ctaTitle = 'Hemen Başlamak İçin',
  ctaText = 'Alanında uzman öğretmenlerimizle tanışmak ve detaylı bilgi almak için bizimle iletişime geçin.',
  showWhatsAppButton = true,
  whatsAppText = CONTACT_INFO.WHATSAPP_DEFAULT_TEXT,
  showPhoneButton = true,
  showContactFormButton = true,
  contactFormSource = FORM_SOURCES.DEFAULT,
}) => {

  const encodedWhatsAppText = encodeURIComponent(whatsAppText);
  const whatsappLink = `https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodedWhatsAppText}`;
  const phoneLink = `tel:${CONTACT_INFO.PHONE}`;
  const contactFormLink = `/iletisim?source=${contactFormSource}`;

  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-800 mb-3">{title}</h1>
        {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
      </div>

      {imagePath && (
        <div className="mb-8 relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image 
            src={imagePath} 
            alt={altText || title} 
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {children && (
        <div className="mb-10">
          {children}
        </div>
      )}

      {methodologySteps && methodologySteps.length > 0 && (
        <div className="mb-10 bg-indigo-50 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-5">{methodologyTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methodologySteps.map((step, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-indigo-500 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-bold text-indigo-700 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
          {additionalInfo && (
            <div className="mt-6 p-4 bg-white rounded-lg">
              {typeof additionalInfo === 'string' ? (
                <p className="text-gray-700">{additionalInfo}</p>
              ) : (
                additionalInfo 
              )}
            </div>
          )}
        </div>
      )}

      <div className="text-center bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-xl shadow-sm"> 
        <h2 className="text-2xl font-bold text-indigo-800 mb-3">{ctaTitle}</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">{ctaText}</p>

        <div className="flex flex-wrap gap-4 justify-center">
          {showWhatsAppButton && (
            <Button
              href={whatsappLink}
              variant="success"
              size="large"
              target="_blank"
              rel="noopener noreferrer"
              iconLeft={<FaWhatsapp />}
              className="px-6 py-3 font-medium"
            >
              WhatsApp ile Bilgi Al
            </Button>
          )}
          {showPhoneButton && (
            <Button
              href={phoneLink}
              variant="primary"
              size="large"
              iconLeft={<FaPhone />}
              className="px-6 py-3 font-medium"
            >
              Hemen Ara
            </Button>
          )}
          {showContactFormButton && (
            <Button
              href={contactFormLink}
              variant="secondary"
              size="large"
              iconLeft={<FaEnvelope />}
              className="px-6 py-3 font-medium"
            >
              İletişim Formunu Doldur
            </Button>
          )}
        </div>
      </div>
    </main>
  );
};

export default DersDetayTemplate; 