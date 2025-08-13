import { ArrowRight, Phone, Mail } from 'lucide-react';
import Button from './Button';
import WhatsAppButton from './WhatsAppButton';
import { classNames } from '../lib/classNames';

const CTA = ({ 
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  variant = 'default',
  language = 'TR',
  className = '',
  backgroundImage,
  ...props 
}) => {
  const variants = {
    default: {
      container: 'bg-gradient-to-r from-blue-600 to-orange-500 text-white',
      content: 'text-center',
      title: 'text-3xl md:text-4xl font-bold mb-4',
      subtitle: 'text-xl opacity-90 mb-8 max-w-2xl mx-auto'
    },
    banner: {
      container: 'bg-blue-900 text-white relative overflow-hidden',
      content: 'text-center relative z-10',
      title: 'text-2xl md:text-3xl font-bold mb-3',
      subtitle: 'text-lg opacity-90 mb-6'
    },
    card: {
      container: 'bg-white border border-gray-200 shadow-lg rounded-xl text-gray-900',
      content: 'text-center',
      title: 'text-2xl md:text-3xl font-bold text-gray-900 mb-4',
      subtitle: 'text-gray-600 mb-6'
    },
    hero: {
      container: 'bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white relative overflow-hidden',
      content: 'text-center relative z-10',
      title: 'text-4xl md:text-5xl font-bold mb-6',
      subtitle: 'text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto'
    }
  };

  const currentVariant = variants[variant];

  const defaultContent = {
    TR: {
      title: 'Size Nasıl Yardımcı Olabiliriz?',
      subtitle: 'Profesyonel iş kıyafetleri için hemen iletişime geçin ve özel teklifinizi alın.',
      primaryAction: 'Hemen İletişime Geçin',
      secondaryAction: 'Ürünleri İncele'
    },
    EN: {
      title: 'How Can We Help You?',
      subtitle: 'Contact us now for professional work clothes and get your special offer.',
      primaryAction: 'Contact Us Now',
      secondaryAction: 'Browse Products'
    }
  };

  const content = defaultContent[language];

  return (
    <section 
      className={classNames(currentVariant.container, 'py-16 px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Background Pattern */}
      {variant === 'hero' && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-orange-600/80" />
          <svg 
            className="absolute bottom-0 left-0 w-full h-24 text-white fill-current"
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path d="M1200 0L0 0 892.25 114.72 1200 0z"></path>
          </svg>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className={currentVariant.content}>
          {/* Title */}
          <h2 className={currentVariant.title}>
            {title || content.title}
          </h2>

          {/* Subtitle */}
          {(subtitle || content.subtitle) && (
            <p className={currentVariant.subtitle}>
              {subtitle || content.subtitle}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Action */}
            <Button
              variant={variant === 'card' ? 'primary' : 'white'}
              size="lg"
              onClick={primaryAction?.onClick}
              className="group"
            >
              <Phone size={20} className="mr-2" />
              {primaryAction?.label || content.primaryAction}
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>

            {/* Secondary Action */}
            {(secondaryAction || content.secondaryAction) && (
              <Button
                variant={variant === 'card' ? 'outline' : 'ghost'}
                size="lg"
                onClick={secondaryAction?.onClick}
                className={classNames(
                  variant === 'card' ? 'text-gray-700' : 'text-white border-white hover:bg-white hover:text-gray-900'
                )}
              >
                {secondaryAction?.label || content.secondaryAction}
              </Button>
            )}

            {/* WhatsApp Button */}
            <WhatsAppButton 
              variant="button"
              text={language === 'TR' ? 'WhatsApp ile Yaz' : 'Chat on WhatsApp'}
              className={classNames(
                variant === 'card' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600',
                'shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200'
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
