import { useOutletContext } from "react-router-dom";
import { Users, Target, Eye, Award, Calendar, MapPin } from "lucide-react";
import Section from "../components/Section";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Stats from "../components/Stats";
import { classNames } from "../lib/classNames";
import translations from "../data/translations.json";
import statsData from "../data/stats.json";

const About = () => {
  const { language } = useOutletContext();
  const t = translations[language];

  const timeline = {
    TR: [
      {
        year: "1998",
        title: "Kuruluş",
        description: "İstanbul'da küçük bir atölyede başladığımız serüvenimiz.",
      },
      {
        year: "2005",
        title: "Büyüme",
        description: "Üretim kapasitesini artırarak bölgesel lider olduk.",
      },
      {
        year: "2010",
        title: "Sertifikasyon",
        description: "ISO 9001 ve CE sertifikalarını aldık.",
      },
      {
        year: "2015",
        title: "İhracat",
        description: "Avrupa pazarına açılım gerçekleştirdik.",
      },
      {
        year: "2020",
        title: "Teknoloji",
        description: "Dijital dönüşüm sürecini tamamladık.",
      },
      {
        year: "2024",
        title: "Liderlik",
        description: "Türkiye'nin en büyük iş kıyafeti üreticisi olduk.",
      },
    ],
    EN: [
      {
        year: "1998",
        title: "Foundation",
        description: "Our journey began in a small workshop in Istanbul.",
      },
      {
        year: "2005",
        title: "Growth",
        description:
          "We became a regional leader by increasing production capacity.",
      },
      {
        year: "2010",
        title: "Certification",
        description: "We obtained ISO 9001 and CE certificates.",
      },
      {
        year: "2015",
        title: "Export",
        description: "We expanded to the European market.",
      },
      {
        year: "2020",
        title: "Technology",
        description: "We completed the digital transformation process.",
      },
      {
        year: "2024",
        title: "Leadership",
        description: "We became Turkey's largest work clothing manufacturer.",
      },
    ],
  };

  const team = {
    TR: [
      {
        id: 1,
        name: "Mehmet Yılmaz",
        position: "Genel Müdür",
        bio: "25 yıllık sektör deneyimi ile şirketi başarıya taşıyan lider.",
        image: "/api/placeholder/300/300",
      },
      {
        id: 2,
        name: "Ayşe Demir",
        position: "Üretim Müdürü",
        bio: "Kalite kontrolü ve üretim süreçlerinin uzmanı.",
        image: "/api/placeholder/300/300",
      },
      {
        id: 3,
        name: "Ali Kaya",
        position: "Satış Müdürü",
        bio: "Müşteri ilişkileri ve iş geliştirme konularında uzman.",
        image: "/api/placeholder/300/300",
      },
      {
        id: 4,
        name: "Fatma Özkan",
        position: "Tasarım Müdürü",
        bio: "Yaratıcı tasarım çözümleri ve inovasyon lideri.",
        image: "/api/placeholder/300/300",
      },
    ],
    EN: [
      {
        id: 1,
        name: "Mehmet Yılmaz",
        position: "General Manager",
        bio: "Leader who brought the company to success with 25 years of industry experience.",
        image: "/api/placeholder/300/300",
      },
      {
        id: 2,
        name: "Ayşe Demir",
        position: "Production Manager",
        bio: "Expert in quality control and production processes.",
        image: "/api/placeholder/300/300",
      },
      {
        id: 3,
        name: "Ali Kaya",
        position: "Sales Manager",
        bio: "Expert in customer relations and business development.",
        image: "/api/placeholder/300/300",
      },
      {
        id: 4,
        name: "Fatma Özkan",
        position: "Design Manager",
        bio: "Creative design solutions and innovation leader.",
        image: "/api/placeholder/300/300",
      },
    ],
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
            {language === "TR" ? "Hakkımızda" : "About Us"}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.about.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>
      </Section>

      {/* Company Story */}
      <Section padding="default">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === "TR" ? "Bizim Hikayemiz" : "Our Story"}
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t.about.story}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {language === "TR"
                ? "Bugün, modern üretim tesislerimiz ve deneyimli ekibimizle Türkiye'nin her yerine kaliteli iş kıyafetleri ulaştırıyor, müşterilerimizin güvenliği ve memnuniyeti için çalışmaya devam ediyoruz."
                : "Today, with our modern production facilities and experienced team, we deliver quality work clothes to all over Turkey and continue to work for the safety and satisfaction of our customers."}
            </p>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="gray" padding="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <Card className="text-center h-full">
            <Target size={48} className="mx-auto text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t.about.mission}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t.about.missionText}
            </p>
          </Card>

          {/* Vision */}
          <Card className="text-center h-full">
            <Eye size={48} className="mx-auto text-orange-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t.about.vision}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t.about.visionText}
            </p>
          </Card>
        </div>
      </Section>

      {/* Company Stats */}
      <Section padding="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === "TR" ? "Başarılarımız" : "Our Achievements"}
          </h2>
        </div>
        <Stats stats={statsData.stats} language={language} variant="cards" />
      </Section>

      {/* Timeline */}
      <Section background="blue" padding="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === "TR" ? "Tarihçemiz" : "Our History"}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {language === "TR"
              ? "26 yıllık yolculuğumuzda önemli kilometre taşları."
              : "Important milestones in our 26-year journey."}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-300 hidden md:block" />

          <div className="space-y-8">
            {timeline[language].map((item, index) => (
              <div
                key={item.year}
                className={classNames(
                  "flex items-center",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Content */}
                <div
                  className={classNames(
                    "flex-1 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20",
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  )}
                >
                  <div className="flex items-center mb-3">
                    <Calendar size={20} className="text-blue-300 mr-2" />
                    <span className="text-2xl font-bold text-white">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-8 h-8 bg-orange-500 rounded-full items-center justify-center z-10">
                  <Award size={16} className="text-white" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section padding="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === "TR" ? "Ekibimiz" : "Our Team"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "TR"
              ? "Deneyimli ve uzman ekibimizle size en iyi hizmeti sunmaya devam ediyoruz."
              : "We continue to provide you with the best service with our experienced and expert team."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team[language].map((member) => (
            <Card
              key={member.id}
              className="text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <Badge variant="primary" size="sm" className="mb-3">
                {member.position}
              </Badge>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section background="orange" padding="default">
        <div className="text-center text-white">
          <MapPin size={48} className="mx-auto mb-6 text-orange-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === "TR"
              ? "Bizimle İletişime Geçin"
              : "Get In Touch With Us"}
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            {language === "TR"
              ? "Sorularınız için her zaman buradayız. Size nasıl yardımcı olabileceğimizi öğrenmek için iletişime geçin."
              : "We are always here for your questions. Contact us to learn how we can help you."}
          </p>
        </div>
      </Section>
    </>
  );
};

export default About;
