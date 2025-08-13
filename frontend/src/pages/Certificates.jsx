import { useOutletContext } from 'react-router-dom';
import { Award, Shield, CheckCircle, Download, ExternalLink } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';

const Certificates = () => {
  const { language } = useOutletContext();

  const certificates = {
    TR: [
      {
        id: 1,
        title: 'ISO 9001:2015 Kalite Yönetim Sistemi',
        description: 'Kalite yönetim sistemimizin uluslararası standartlara uygunluğunu belgeleyen sertifika.',
        issuer: 'TÜV Türk',
        validUntil: '2025-12-31',
        category: 'Kalite',
        image: '/api/placeholder/400/300',
        downloadUrl: '#'
      },
      {
        id: 2,
        title: 'CE İşareti Uygunluk Belgesi',
        description: 'Ürünlerimizin Avrupa Birliği güvenlik standartlarına uygunluğunu belgeleyen sertifika.',
        issuer: 'Avrupa Uygunluk Değerlendirme',
        validUntil: '2025-06-30',
        category: 'Güvenlik',
        image: '/api/placeholder/400/300',
        downloadUrl: '#'
      },
      {
        id: 3,
        title: 'EN ISO 20471 Yüksek Görünürlük',
        description: 'Yüksek görünürlük özellikli iş kıyafetlerimizin standartlara uygunluk belgesi.',
        issuer: 'BTTM Test Merkezi',
        validUntil: '2025-09-15',
        category: 'Güvenlik',
        image: '/api/placeholder/400/300',
        downloadUrl: '#'
      },
      {
        id: 4,
        title: 'OEKO-TEX Standard 100',
        description: 'Tekstil ürünlerimizin insan sağlığına zararlı madde içermediğini belgeleyen sertifika.',
        issuer: 'OEKO-TEX Enstitüsü',
        validUntil: '2025-04-30',
        category: 'Çevre',
        image: '/api/placeholder/400/300',
        downloadUrl: '#'
      },
      {
        id: 5,
        title: 'TSE Hizmet Yeterlilik Belgesi',
        description: 'Türk Standartları Enstitüsü tarafından verilen hizmet yeterlilik belgesi.',
        issuer: 'Türk Standartları Enstitüsü',
        validUntil: '2025-11-20',
        category: 'Kalite',
        image: '/api/placeholder/400/300',
        downloadUrl: '#'
      },
      {
        id: 6,
        title: 'İSG Risk Değerlendirme Belgesi',
        description: 'İş sağlığı ve güvenliği risk değerlendirmesi yeterlilik belgesi.',
        issuer: 'İSG Uzmanlar Derneği',
        validUntil: '2025-08-10',
        category: 'Güvenlik',
        image: '/api/placeholder/400/300',
        downloadUrl: '#'
      }
    ],
    EN: [
      {
        id: 1,
        title: 'ISO 9001:2015 Quality Management System',
        description: 'Certificate documenting compliance of our quality management system with international standards.',
        issuer: 'TÜV Türk',
        validUntil: '2025-12-31',
        category: 'Quality',
        image: '/api/placeholder/400/300',
        downloadUrl: '#'
      },
      {
        id: 2,
        title: 'CE Marking Conformity Certificate',
        description: 'Certificate documenting compliance of our products with European Union safety standards.',
        issuer: 'European Conformity Assessment',
        validUntil: '2025-06-30',
        category: 'Safety',
        image: '/api/placeholder/400/300',
        downloadUrl: '#'
      },
      {
        id: 3,
        title: 'EN ISO 20471 High Visibility',
        description: 'Certificate of compliance with standards for our high visibility work clothes.',
        issuer: 'BTTM Test Center',
        validUntil: '2025-09-15',
        category: 'Safety',
        image: '/api/placeholder/400/300',
        downloadUrl: '#'
      },
      {
        id: 4,
        title: 'OEKO-TEX Standard 100',
        description: 'Certificate documenting that our textile products do not contain substances harmful to human health.',
        issuer: 'OEKO-TEX Institute',
        validUntil: '2025-04-30',
        category: 'Environment',
        image: '/api/placeholder/400/300',
        downloadUrl: '#'
      },
      {
        id: 5,
        title: 'TSE Service Competency Certificate',
        description: 'Service competency certificate issued by Turkish Standards Institute.',
        issuer: 'Turkish Standards Institute',
        validUntil: '2025-11-20',
        category: 'Quality',
        image: '/api/placeholder/400/300',
        downloadUrl: '#'
      },
      {
        id: 6,
        title: 'OHS Risk Assessment Certificate',
        description: 'Occupational health and safety risk assessment competency certificate.',
        issuer: 'OHS Experts Association',
        validUntil: '2025-08-10',
        category: 'Safety',
        image: '/api/placeholder/400/300',
        downloadUrl: '#'
      }
    ]
  };

  const categoryColors = {
    'Kalite': 'primary',
    'Quality': 'primary',
    'Güvenlik': 'secondary',
    'Safety': 'secondary',
    'Çevre': 'success',
    'Environment': 'success'
  };

  const stats = {
    TR: [
      { value: '6+', label: 'Aktif Sertifika' },
      { value: '100%', label: 'Uyumluluk Oranı' },
      { value: '25+', label: 'Yıl Deneyim' },
      { value: '10K+', label: 'Sertifikalı Ürün' }
    ],
    EN: [
      { value: '6+', label: 'Active Certificates' },
      { value: '100%', label: 'Compliance Rate' },
      { value: '25+', label: 'Years Experience' },
      { value: '10K+', label: 'Certified Products' }
    ]
  };

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
            {language === 'TR' ? 'Sertifikalarımız' : 'Our Certificates'}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === 'TR' ? 'Kalite ve Güvenlik Belgelerimiz' : 'Our Quality and Safety Certificates'}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            {language === 'TR' 
              ? 'Uluslararası standartlara uygun üretim ve hizmet kalitesinin belgeleri'
              : 'Documents of production and service quality in accordance with international standards'
            }
          </p>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="gray" padding="sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats[language].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Certificates Grid */}
      <Section padding="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'TR' ? 'Sertifikalar ve Belgeler' : 'Certificates and Documents'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'TR' 
              ? 'Kalite, güvenlik ve çevre standartlarına uygunluğumuzu belgeleyen sertifikalarımız'
              : 'Our certificates documenting compliance with quality, safety and environmental standards'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates[language].map((certificate) => (
            <Card key={certificate.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Certificate Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="white" size="sm">
                    {certificate.category}
                  </Badge>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="mb-4">
                <Badge 
                  variant={categoryColors[certificate.category] || 'default'} 
                  size="sm" 
                  className="mb-3"
                >
                  {certificate.category}
                </Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {certificate.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {certificate.description}
                </p>
              </div>

              {/* Certificate Details */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Award size={16} className="mr-2" />
                  <span>{certificate.issuer}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle size={16} className="mr-2" />
                  <span>
                    {language === 'TR' ? 'Geçerli: ' : 'Valid until: '}
                    {new Date(certificate.validUntil).toLocaleDateString(language === 'TR' ? 'tr-TR' : 'en-US')}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 group/btn"
                  onClick={() => window.open(certificate.downloadUrl, '_blank')}
                >
                  <Download size={16} className="mr-2 group-hover/btn:animate-bounce" />
                  {language === 'TR' ? 'İndir' : 'Download'}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="flex-1 group/btn"
                  onClick={() => window.open(certificate.image, '_blank')}
                >
                  <ExternalLink size={16} className="mr-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  {language === 'TR' ? 'Görüntüle' : 'View'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Compliance Section */}
      <Section background="blue" padding="default">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'TR' ? 'Uyum Standartları' : 'Compliance Standards'}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            {language === 'TR' 
              ? 'Ürün ve hizmetlerimizde uyduğumuz uluslararası standartlar'
              : 'International standards we comply with in our products and services'
            }
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                standard: 'ISO 9001',
                title: language === 'TR' ? 'Kalite Yönetimi' : 'Quality Management',
                description: language === 'TR' ? 'Kalite yönetim sistemi' : 'Quality management system'
              },
              {
                standard: 'EN Standards',
                title: language === 'TR' ? 'Avrupa Norm' : 'European Standards',
                description: language === 'TR' ? 'Avrupa güvenlik normları' : 'European safety standards'
              },
              {
                standard: 'CE Marking',
                title: language === 'TR' ? 'AB Uygunluğu' : 'EU Compliance',
                description: language === 'TR' ? 'Avrupa Birliği uygunluğu' : 'European Union compliance'
              },
              {
                standard: 'OEKO-TEX',
                title: language === 'TR' ? 'Tekstil Güvenliği' : 'Textile Safety',
                description: language === 'TR' ? 'Tekstil güvenlik standardı' : 'Textile safety standard'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.standard}</h3>
                <h4 className="text-base font-medium text-blue-200 mb-2">{item.title}</h4>
                <p className="text-sm text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section padding="default">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {language === 'TR' ? 'Sertifika Doğrulaması' : 'Certificate Verification'}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {language === 'TR' 
              ? 'Sertifikalarımızın geçerliliğini doğrulamak veya daha fazla bilgi almak için bizimle iletişime geçin.'
              : 'Contact us to verify the validity of our certificates or to get more information.'
            }
          </p>
          <Button 
            variant="primary" 
            size="lg"
            className="group"
            onClick={() => window.location.href = '/contact'}
          >
            <Mail size={20} className="mr-2" />
            {language === 'TR' ? 'İletişime Geçin' : 'Contact Us'}
            <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Certificates;
