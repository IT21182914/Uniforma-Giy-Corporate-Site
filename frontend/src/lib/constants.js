// Application constants
export const APP_NAME = 'Üniforma Giy';
export const APP_DESCRIPTION = 'Professional work uniform manufacturer and supplier';

// Contact information
export const CONTACT_INFO = {
  phone: '+90 000 000 0000',
  email: 'info@uniformagiy.com',
  address: 'Istanbul, Turkey',
  whatsapp: 'https://wa.me/94776048468'
};

// Navigation links
export const NAV_LINKS = {
  TR: [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/about', label: 'Hakkımızda' },
    { href: '/products', label: 'Ürünler' },
    { href: '/certificates', label: 'Sertifikalar' },
    { href: '/contact', label: 'İletişim' }
  ],
  EN: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/certificates', label: 'Certificates' },
    { href: '/contact', label: 'Contact' }
  ]
};

// Product categories
export const PRODUCT_CATEGORIES = {
  TR: [
    { id: 'all', label: 'Tümü' },
    { id: 'work-uniforms', label: 'İş Elbiseleri' },
    { id: 'polo-shirts', label: 'Polo Tişörtler' },
    { id: 'vests', label: 'Yelekler' },
    { id: 'jackets', label: 'Ceketler' },
    { id: 'overalls', label: 'Tulumlar' }
  ],
  EN: [
    { id: 'all', label: 'All' },
    { id: 'work-uniforms', label: 'Work Uniforms' },
    { id: 'polo-shirts', label: 'Polo Shirts' },
    { id: 'vests', label: 'Vests' },
    { id: 'jackets', label: 'Jackets' },
    { id: 'overalls', label: 'Overalls' }
  ]
};

// Company values
export const COMPANY_VALUES = {
  TR: [
    { key: 'durability', label: 'Dayanıklılık' },
    { key: 'safety', label: 'Güvenlik' },
    { key: 'compliance', label: 'Uyumluluk' },
    { key: 'quality', label: 'Kalite' }
  ],
  EN: [
    { key: 'durability', label: 'Durability' },
    { key: 'safety', label: 'Safety' },
    { key: 'compliance', label: 'Compliance' },
    { key: 'quality', label: 'Quality' }
  ]
};

// API endpoints (for future use)
export const API_ENDPOINTS = {
  CONTACT_FORM: '/api/contact',
  NEWSLETTER: '/api/newsletter',
  PRODUCTS: '/api/products'
};
