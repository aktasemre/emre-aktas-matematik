// Analytics Configuration
export const ANALYTICS_CONFIG = {
  // Google Analytics 4
  GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-6CZGGPFC0M',
  
  // Google Tag Manager
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-NBTHB6K7',
  
  // Google Search Console - Gerçek doğrulama kodları
  GOOGLE_VERIFICATION: 'fU8GiG_ZqzPKVBUJegGQcEfrAB5isOnHhi32WU3t0f4',
  GOOGLE_VERIFICATION_2: 'UMyzKAip0OjAEJSWajHZicW82U6ZK8URD5v-_GU-QPQ',
  
  // Yandex Webmaster
  YANDEX_VERIFICATION: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || 'your-yandex-verification-code',
  
  // Bing Webmaster
  BING_VERIFICATION: process.env.NEXT_PUBLIC_BING_VERIFICATION || 'your-bing-verification-code',
} as const;

// Custom Analytics Events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Page View Tracking
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', ANALYTICS_CONFIG.GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Contact Form Tracking
export const trackContactForm = (source: string) => {
  trackEvent('contact_form_submit', {
    form_source: source,
    event_category: 'engagement',
    event_label: 'contact_form',
  });
};

// WhatsApp Click Tracking
export const trackWhatsAppClick = (source: string) => {
  trackEvent('whatsapp_click', {
    click_source: source,
    event_category: 'engagement',
    event_label: 'whatsapp_contact',
  });
};

// Phone Call Tracking
export const trackPhoneCall = (source: string) => {
  trackEvent('phone_call', {
    call_source: source,
    event_category: 'engagement',
    event_label: 'phone_contact',
  });
};

// Service Page View Tracking
export const trackServicePageView = (service: string) => {
  trackEvent('service_page_view', {
    service_name: service,
    event_category: 'engagement',
    event_label: 'service_interest',
  });
};

// Pricing Page View Tracking
export const trackPricingPageView = () => {
  trackEvent('pricing_page_view', {
    event_category: 'engagement',
    event_label: 'pricing_interest',
  });
};

// Global gtag type declaration
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
