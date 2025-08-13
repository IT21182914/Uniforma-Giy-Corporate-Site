import { useEffect, useState, useRef } from 'react';
import { classNames } from '../lib/classNames';

const Stats = ({ 
  stats = [], 
  language = 'TR',
  variant = 'default',
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});
  const sectionRef = useRef(null);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  // Animate numbers
  useEffect(() => {
    if (!isVisible) return;

    const animateValue = (stat) => {
      const value = stat.value;
      const numericValue = parseInt(value.replace(/[^\d]/g, ''));
      const prefix = value.match(/[^\d]+$/)?.[0] || '';
      
      let startValue = 0;
      const increment = numericValue / 60; // 60 frames for smooth animation
      
      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= numericValue) {
          startValue = numericValue;
          clearInterval(timer);
        }
        
        setAnimatedValues(prev => ({
          ...prev,
          [stat.id]: Math.floor(startValue) + prefix
        }));
      }, 16); // ~60fps

      return () => clearInterval(timer);
    };

    const cleanups = stats.map(stat => animateValue(stat));

    return () => {
      cleanups.forEach(cleanup => cleanup());
    };
  }, [isVisible, stats]);

  const variants = {
    default: {
      container: 'grid grid-cols-2 md:grid-cols-4 gap-6',
      item: 'text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100',
      value: 'text-3xl md:text-4xl font-bold text-blue-600 mb-2',
      label: 'text-sm text-gray-600'
    },
    hero: {
      container: 'grid grid-cols-2 md:grid-cols-4 gap-4',
      item: 'text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20',
      value: 'text-2xl md:text-3xl font-bold text-white mb-1',
      label: 'text-sm text-gray-200'
    },
    minimal: {
      container: 'flex flex-wrap justify-center gap-8',
      item: 'text-center',
      value: 'text-3xl font-bold text-gray-900 mb-1',
      label: 'text-sm text-gray-600'
    },
    cards: {
      container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
      item: 'text-center p-8 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl hover:shadow-lg transition-shadow duration-300',
      value: 'text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2',
      label: 'text-sm text-gray-700'
    }
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <div ref={sectionRef} className={classNames(currentVariant.container, className)}>
      {stats.map((stat) => {
        const label = stat.label[language] || stat.label.EN || '';
        const displayValue = isVisible 
          ? (animatedValues[stat.id] || stat.value)
          : '0';

        return (
          <div 
            key={stat.id} 
            className={classNames(
              currentVariant.item,
              'transform transition-all duration-500',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}
            style={{ 
              transitionDelay: `${stat.id * 100}ms` 
            }}
          >
            <div className={currentVariant.value}>
              {displayValue}
            </div>
            <div className={currentVariant.label}>
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
