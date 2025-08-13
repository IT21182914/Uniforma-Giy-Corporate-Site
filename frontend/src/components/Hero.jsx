import { ArrowRight, Play } from "lucide-react";
import Button from "./Button";
import WhatsAppButton from "./WhatsAppButton";
import translations from "../data/translations.json";

const Hero = ({
  language = "TR",
  backgroundImage = "/api/placeholder/1920/1080",
  overlay = true,
}) => {
  const t = translations[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center center",
        }}
      />

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-orange-900/60" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            {language === "TR" ? "25+ Yıl Deneyim" : "25+ Years Experience"}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t.hero.headline}
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtext}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button variant="primary" size="lg" className="group">
              {t.hero.primaryCta}
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
              />
            </Button>

            <Button variant="white" size="lg" className="group">
              <Play
                size={20}
                className="mr-2 group-hover:scale-110 transition-transform duration-200"
              />
              {t.hero.secondaryCta}
            </Button>
          </div>

          {/* WhatsApp CTA */}
          <div className="inline-flex items-center">
            <WhatsAppButton
              variant="button"
              text={
                language === "TR"
                  ? "WhatsApp ile İletişim"
                  : "Contact via WhatsApp"
              }
              className="shadow-lg hover:shadow-xl"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            {
              value: "25+",
              label: language === "TR" ? "Yıl Deneyim" : "Years Experience",
            },
            {
              value: "10K+",
              label: language === "TR" ? "Mutlu Müşteri" : "Happy Customers",
            },
            {
              value: "50+",
              label: language === "TR" ? "Ürün Çeşidi" : "Product Varieties",
            },
            {
              value: "99%",
              label:
                language === "TR"
                  ? "Müşteri Memnuniyeti"
                  : "Customer Satisfaction",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
