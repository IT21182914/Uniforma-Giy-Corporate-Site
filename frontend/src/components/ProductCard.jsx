import { ArrowRight } from 'lucide-react';
import Button from './Button';
import Card from './Card';
import Badge from './Badge';
import { classNames } from '../lib/classNames';

const ProductCard = ({ 
  product, 
  language = 'TR',
  onRequestQuote,
  className = '',
  ...props 
}) => {
  if (!product) return null;

  const title = product.title[language] || product.title.EN;
  const description = product.description[language] || product.description.EN;

  const handleRequestQuote = () => {
    if (onRequestQuote) {
      onRequestQuote(product);
    } else {
      // Default action - could navigate to contact page with product info
      console.log('Request quote for:', product);
    }
  };

  return (
    <Card 
      className={classNames(
        'group overflow-hidden h-full flex flex-col',
        className
      )}
      padding="none"
      {...props}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image || '/api/placeholder/300/300'}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {product.featured && (
          <Badge 
            variant="primary"
            className="absolute top-3 left-3"
          >
            {language === 'TR' ? 'Öne Çıkan' : 'Featured'}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 flex-1">
          {description}
        </p>

        {/* Category Badge */}
        <div className="mb-4">
          <Badge variant="outline" size="sm">
            {product.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </Badge>
        </div>

        {/* CTA Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={handleRequestQuote}
          className="group/btn w-full"
        >
          {language === 'TR' ? 'Fiyat Talebi' : 'Request Quote'}
          <ArrowRight 
            size={16} 
            className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" 
          />
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
