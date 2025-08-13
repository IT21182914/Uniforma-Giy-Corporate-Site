import { useOutletContext } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import WhatsAppButton from '../components/WhatsAppButton';
import Card from '../components/Card';
import Badge from '../components/Badge';
import translations from '../data/translations.json';
import { CONTACT_INFO } from '../lib/constants';

const Contact = () => {
  const { language } = useOutletContext();
  const t = translations[language];

  const handleFormSubmit = async (formData) => {
    // Handle form submission
    console.log('Contact form submitted:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically send data to your backend
    // throw new Error('Test error'); // Uncomment to test error handling
  };

  const contactMethods = [
    {
      icon: Phone,
      title: language === 'TR' ? 'Telefon' : 'Phone',
      value: CONTACT_INFO.phone,
      description: language === 'TR' ? 'Pazartesi - Cuma, 09:00 - 18:00' : 'Monday - Friday, 09:00 - 18:00',
      action: () => window.open(`tel:${CONTACT_INFO.phone}`)
    },
    {
      icon: Mail,
      title: language === 'TR' ? 'E-posta' : 'Email',
      value: CONTACT_INFO.email,
      description: language === 'TR' ? '24 saat içinde yanıt' : 'Response within 24 hours',
      action: () => window.open(`mailto:${CONTACT_INFO.email}`)
    },
    {
      icon: MapPin,
      title: language === 'TR' ? 'Adres' : 'Address',
      value: CONTACT_INFO.address,
      description: language === 'TR' ? 'Fabrika ve showroom' : 'Factory and showroom',
      action: () => window.open(`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`)
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section 
        background="blue" 
        padding="xl"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-orange-600/60" />
        <div className="relative z-10 text-center text-white">
          <Badge variant="white" className="mb-6 text-blue-600">
            {language === 'TR' ? 'İletişim' : 'Contact'}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.contact.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </Section>

      {/* WhatsApp CTA Banner */}
      <Section background="green" padding="sm" className="bg-green-600 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              {t.contact.whatsappHeader}
            </h2>
            <p className="text-green-100">
              {language === 'TR' 
                ? 'Hızlı yanıt için WhatsApp üzerinden bizimle iletişime geçin.'
                : 'Contact us via WhatsApp for quick response.'
              }
            </p>
          </div>
          <WhatsAppButton 
            variant="button"
            text={language === 'TR' ? 'WhatsApp\'ta Sohbet Et' : 'Chat on WhatsApp'}
            className="bg-white text-green-600 hover:bg-gray-50 shadow-lg"
          />
        </div>
      </Section>

      {/* Contact Methods */}
      <Section padding="default">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card 
                key={index}
                className="text-center cursor-pointer group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={method.action}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {method.title}
                </h3>
                <p className="text-lg text-gray-800 mb-2 font-medium">
                  {method.value}
                </p>
                <p className="text-sm text-gray-600">
                  {method.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Contact Form & Map */}
      <Section background="gray" padding="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {language === 'TR' ? 'Bize Yazın' : 'Write to Us'}
            </h2>
            <p className="text-gray-600 mb-8">
              {language === 'TR' 
                ? 'Sorularınızı, taleplerinizi veya önerilerinizi bizimle paylaşın. En kısa sürede size geri dönüş yapacağız.'
                : 'Share your questions, requests or suggestions with us. We will get back to you as soon as possible.'
              }
            </p>
            <ContactForm 
              language={language}
              onSubmit={handleFormSubmit}
            />
          </div>

          {/* Map and Additional Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {language === 'TR' ? 'Bizi Ziyaret Edin' : 'Visit Us'}
            </h2>
            
            {/* Map Placeholder */}
            <div className="bg-gray-300 rounded-lg h-64 mb-6 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin size={48} className="mx-auto mb-2" />
                <p>{language === 'TR' ? 'Harita Yüklenecek' : 'Map will be loaded'}</p>
                <p className="text-sm mt-2">Google Maps iframe will be integrated here</p>
              </div>
            </div>

            {/* Location Details */}
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {language === 'TR' ? 'Lokasyon Bilgileri' : 'Location Details'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {language === 'TR' ? 'Adres' : 'Address'}
                    </p>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock size={20} className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {language === 'TR' ? 'Çalışma Saatleri' : 'Working Hours'}
                    </p>
                    <p className="text-gray-600">
                      {language === 'TR' ? 'Pazartesi - Cuma: 09:00 - 18:00' : 'Monday - Friday: 09:00 - 18:00'}
                    </p>
                    <p className="text-gray-600">
                      {language === 'TR' ? 'Cumartesi: 09:00 - 14:00' : 'Saturday: 09:00 - 14:00'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section padding="default">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'TR' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'TR' 
                ? 'En çok merak edilen sorular ve yanıtları.'
                : 'Most frequently asked questions and their answers.'
              }
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: language === 'TR' 
                  ? 'Minimum sipariş miktarınız nedir?' 
                  : 'What is your minimum order quantity?',
                answer: language === 'TR' 
                  ? 'Minimum sipariş miktarımız ürüne göre değişmektedir. Detaylı bilgi için bizimle iletişime geçiniz.'
                  : 'Our minimum order quantity varies according to the product. Please contact us for detailed information.'
              },
              {
                question: language === 'TR' 
                  ? 'Teslimat süreniz ne kadar?' 
                  : 'How long is your delivery time?',
                answer: language === 'TR' 
                  ? 'Standart ürünler için 3-5 iş günü, özel tasarım ürünler için 10-15 iş günü teslimat süresi bulunmaktadır.'
                  : 'Delivery time is 3-5 business days for standard products and 10-15 business days for custom design products.'
              },
              {
                question: language === 'TR' 
                  ? 'Logo baskısı yapabiliyor musunuz?' 
                  : 'Can you print logos?',
                answer: language === 'TR' 
                  ? 'Evet, tüm ürünlerimize logo baskısı ve nakış imkanı sunmaktayız. Farklı baskı teknikleri mevcuttur.'
                  : 'Yes, we offer logo printing and embroidery on all our products. Different printing techniques are available.'
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
