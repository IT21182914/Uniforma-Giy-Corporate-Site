import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import LangSwitcher from './LangSwitcher';
import WhatsAppButton from './WhatsAppButton';
import { NAV_LINKS, CONTACT_INFO } from '../lib/constants';
import { classNames } from '../lib/classNames';

const Navbar = ({ language = 'TR', onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const links = NAV_LINKS[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <header className={classNames(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Üniforma Giy" 
              className="h-8 w-auto"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className={classNames(
              'text-xl font-bold',
              isScrolled ? 'text-gray-900' : 'text-white'
            )}>
              Üniforma Giy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={classNames(
                  'text-sm font-medium transition-colors duration-200',
                  isActive(link.href)
                    ? isScrolled 
                      ? 'text-blue-600' 
                      : 'text-orange-400'
                    : isScrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-white hover:text-orange-400'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LangSwitcher 
              currentLanguage={language}
              onLanguageChange={onLanguageChange}
              variant={isScrolled ? 'light' : 'dark'}
            />
            <WhatsAppButton 
              url={CONTACT_INFO.whatsapp}
              variant="compact"
              className={isScrolled ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'}
            />
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={classNames(
              'md:hidden p-2 rounded-md transition-colors duration-200',
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={classNames(
                    'block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200',
                    isActive(link.href)
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center justify-between px-3 py-2">
                <LangSwitcher 
                  currentLanguage={language}
                  onLanguageChange={onLanguageChange}
                  variant="light"
                />
                <WhatsAppButton 
                  url={CONTACT_INFO.whatsapp}
                  variant="compact"
                  className="bg-green-600 hover:bg-green-700"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
