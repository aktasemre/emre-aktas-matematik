'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CONTACT_INFO } from '@/constants/contact';
import { trackWhatsAppClick, trackPhoneCall } from '@/lib/analytics';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('header');
  };

  const handlePhoneClick = () => {
    trackPhoneCall('header');
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const mainNavItems = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hakkimda', label: 'Hakkımda' },
    { 
      label: 'Hizmetler', 
      type: 'dropdown',
      items: [
        { href: '/matematik', label: 'Matematik' },
        { href: '/lgs', label: 'LGS Hazırlık' },
        { href: '/tyt-ayt', label: 'TYT/AYT' },
        { href: '/okul-destek', label: 'Okul Desteği' }
      ]
    },
    { 
      label: 'Kaynaklar', 
      type: 'dropdown',
      items: [
        { href: '/metodoloji', label: 'Metodoloji' },
        { href: '/matematik-ogrenme-merkezi', label: 'Ücretsiz Kaynaklar' },
        { href: '/blog', label: 'Blog' }
      ]
    },
    { href: '/ucretler', label: 'Ücretler' },
    { href: '/referanslar', label: 'Referanslar' },
    { href: '/iletisim', label: 'İletişim' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
            Emre Aktaş
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {mainNavItems.map((item, index) => (
              <div key={index} className="relative">
                {item.type === 'dropdown' ? (
                  <div className="dropdown-container">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="text-gray-700 hover:text-indigo-600 font-medium transition-colors flex items-center gap-1"
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent(CONTACT_INFO.WHATSAPP_DEFAULT_TEXT)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <span>📱 WhatsApp</span>
            </a>
            <a
              href={`tel:+${CONTACT_INFO.PHONE}`}
              onClick={handlePhoneClick}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <span>📞 Ara</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {mainNavItems.map((item, index) => (
                <div key={index}>
                  {item.type === 'dropdown' ? (
                    <div className="dropdown-container">
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="text-gray-700 hover:text-indigo-600 font-medium transition-colors flex items-center justify-between w-full"
                      >
                        {item.label}
                        <svg className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              onClick={() => {
                                closeMenu();
                                setActiveDropdown(null);
                              }}
                              className="block text-gray-600 hover:text-indigo-600 transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <a
                  href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent(CONTACT_INFO.WHATSAPP_DEFAULT_TEXT)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleWhatsAppClick();
                    closeMenu();
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <span>📱 WhatsApp</span>
                </a>
                <a
                  href={`tel:+${CONTACT_INFO.PHONE}`}
                  onClick={() => {
                    handlePhoneClick();
                    closeMenu();
                  }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <span>📞 Ara</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;