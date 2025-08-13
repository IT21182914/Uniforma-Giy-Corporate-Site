import { useOutletContext } from 'react-router-dom';
import Section from '../components/Section';
import ProductGrid from '../components/ProductGrid';
import Badge from '../components/Badge';
import CTA from '../components/CTA';
import translations from '../data/translations.json';
import productsData from '../data/products.json';

const Products = () => {
  const { language } = useOutletContext();
  const t = translations[language];

  const handleRequestQuote = (product) => {
    // Handle quote request - could open modal, navigate to contact form, etc.
    console.log('Quote requested for:', product);
    // For now, we'll just scroll to contact section or show a message
    alert(language === 'TR' 
      ? `${product.title[language]} için fiyat talebi alındı. Kısa sürede sizinle iletişime geçeceğiz.`
      : `Quote request received for ${product.title[language]}. We will contact you shortly.`
    );
  };

  return (
    <>
      {/* Hero Section */}
      <Section 
        background="gray" 
        padding="xl"
        className="relative overflow-hidden"
      >
        <div className="text-center">
          <Badge variant="primary" className="mb-6">
            {language === 'TR' ? 'Ürünlerimiz' : 'Our Products'}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.products.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>
      </Section>

      {/* Products Grid */}
      <Section padding="default">
        <ProductGrid
          products={productsData.products}
          language={language}
          showFilters={true}
          showSearch={true}
          gridCols={3}
          onRequestQuote={handleRequestQuote}
        />
      </Section>

      {/* Features Section */}
      <Section background="blue" padding="default">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'TR' ? 'Ürün Özelliklerimiz' : 'Product Features'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'TR' ? 'Güvenlik Standartları' : 'Safety Standards'}
              </h3>
              <p className="text-blue-100">
                {language === 'TR' 
                  ? 'Tüm ürünlerimiz EN ve ISO güvenlik standartlarına uygun üretilir.'
                  : 'All our products are manufactured in compliance with EN and ISO safety standards.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'TR' ? 'Özelleştirilebilir' : 'Customizable'}
              </h3>
              <p className="text-blue-100">
                {language === 'TR' 
                  ? 'Logo baskı, renk seçenekleri ve özel tasarım imkanları.'
                  : 'Logo printing, color options and custom design possibilities.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'TR' ? 'Hızlı Teslimat' : 'Fast Delivery'}
              </h3>
              <p className="text-blue-100">
                {language === 'TR' 
                  ? '3-5 iş günü içinde hızlı ve güvenli teslimat garantisi.'
                  : 'Fast and secure delivery guarantee within 3-5 business days.'
                }
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Industries Section */}
      <Section padding="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {language === 'TR' ? 'Hizmet Verdiğimiz Sektörler' : 'Industries We Serve'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {language === 'TR' 
              ? 'Farklı sektörlerin ihtiyaçlarına özel çözümler sunuyoruz.'
              : 'We offer customized solutions for the needs of different sectors.'
            }
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: language === 'TR' ? 'İnşaat' : 'Construction', icon: '🏗️' },
            { name: language === 'TR' ? 'Sağlık' : 'Healthcare', icon: '🏥' },
            { name: language === 'TR' ? 'Gıda' : 'Food', icon: '🍽️' },
            { name: language === 'TR' ? 'Otomotiv' : 'Automotive', icon: '🚗' },
            { name: language === 'TR' ? 'Tekstil' : 'Textile', icon: '🧵' },
            { name: language === 'TR' ? 'Kimya' : 'Chemical', icon: '⚗️' }
          ].map((industry, index) => (
            <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-3">{industry.icon}</div>
              <h3 className="text-sm font-medium text-gray-900">{industry.name}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Quality Assurance */}
      <Section background="gray" padding="default">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {language === 'TR' ? 'Kalite Güvencesi' : 'Quality Assurance'}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {language === 'TR' 
              ? 'Her ürününde kalite kontrolünden geçen ve güvenlik testlerini başarıyla tamamlayan ürünler sunuyoruz.'
              : 'We offer products that pass quality control and successfully complete safety tests in every product.'
            }
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            {[
              'ISO 9001',
              'CE Marking',
              'EN Standards',
              'OEKO-TEX',
              language === 'TR' ? 'TSE Belgeli' : 'TSE Certified'
            ].map((cert, index) => (
              <Badge key={index} variant="primary" size="lg">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <CTA 
        language={language}
        variant="default"
        title={language === 'TR' ? 'Özel Teklifinizi Alın' : 'Get Your Custom Quote'}
        subtitle={language === 'TR' 
          ? 'İhtiyaçlarınıza özel fiyat teklifi için bizimle iletişime geçin.'
          : 'Contact us for a custom price quote for your needs.'
        }
      />
    </>
  );
};

export default Products;
