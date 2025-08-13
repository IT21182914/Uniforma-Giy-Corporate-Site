import { MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { classNames } from '../lib/classNames';

const WhatsAppButton = ({ 
  url = 'https://wa.me/94776048468',
  variant = 'floating',
  text,
  className = '',
  ...props 
}) => {
  const variants = {
    floating: 'fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300',
    compact: 'inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg transition-colors duration-200',
    button: 'inline-flex items-center px-4 py-2 text-base font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg transition-all duration-200 hover:shadow-md',
    header: 'inline-flex items-center px-4 py-2 text-sm font-medium bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-200'
  };

  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'floating') {
    return (
      <button
        onClick={handleClick}
        className={classNames(variants[variant], className)}
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
        {...props}
      >
        <FaWhatsapp size={24} />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={classNames(variants[variant], className)}
      {...props}
    >
      <FaWhatsapp size={variant === 'compact' ? 16 : 20} className="mr-2" />
      {text || 'WhatsApp'}
    </button>
  );
};

export default WhatsAppButton;
