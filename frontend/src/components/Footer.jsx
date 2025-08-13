import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Button from './Button';
import SocialIcons from './SocialIcons';
import { NAV_LINKS, CONTACT_INFO } from '../lib/constants';
import translations from '../data/translations.json';

const Footer = ({ language = 'TR' }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const t = translations[language];
  const links = NAV_LINKS[language];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="Üniforma Giy" 
                className="h-8 w-auto filter brightness-0 invert"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-xl font-bold">Üniforma Giy</span>
            </div>
            <p className="text-gray-300 text-sm">
              {language === 'TR' 
                ? '25 yıllık deneyim ile profesyonel iş kıyafetleri üretiminde lider şirket.'
                : 'Leading company in professional work clothing production with 25 years of experience.'
              }
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center space-x-2">
                <Mail size={16} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-blue-400 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p className="text-gray-300">{CONTACT_INFO.address}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'TR' ? 'İletişim' : 'Contact'}
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">{CONTACT_INFO.phone}</p>
              <p className="text-gray-300">{CONTACT_INFO.address}</p>
              <div className="pt-2">
                <SocialIcons variant="footer" />
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.newsletter}</h3>
            <p className="text-gray-300 text-sm mb-4">
              {t.footer.newsletterText}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <Button 
                type="submit"
                variant="primary"
                size="sm"
                className="w-full"
                disabled={isSubscribed}
              >
                {isSubscribed ? '✓' : t.footer.subscribe}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Üniforma Giy. {language === 'TR' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <SocialIcons variant="minimal" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
