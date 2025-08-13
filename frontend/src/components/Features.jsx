import { Shield, Award, Clock, Users, CheckCircle, Star } from "lucide-react";
import Card from "./Card";
import Badge from "./Badge";
import { classNames } from "../lib/classNames";

const Features = ({
  language = "TR",
  variant = "grid",
  className = "",
  features,
}) => {
  const defaultFeatures = {
    TR: [
      {
        id: 1,
        icon: Shield,
        title: "Güvenlik Standartları",
        description:
          "Tüm ürünlerimiz EN ve ISO standartlarına uygun olarak üretilir.",
        color: "blue",
      },
      {
        id: 2,
        icon: Award,
        title: "Premium Kalite",
        description: "Yüksek kaliteli malzemeler ve titiz işçilik ile üretim.",
        color: "orange",
      },
      {
        id: 3,
        icon: Clock,
        title: "Hızlı Teslimat",
        description: "Sipariş sonrası 3-5 iş günü içinde teslimat garantisi.",
        color: "green",
      },
      {
        id: 4,
        icon: Users,
        title: "Uzman Ekip",
        description: "25 yıllık deneyim ile sektörün en iyi uzmanları.",
        color: "purple",
      },
    ],
    EN: [
      {
        id: 1,
        icon: Shield,
        title: "Safety Standards",
        description:
          "All our products are manufactured in compliance with EN and ISO standards.",
        color: "blue",
      },
      {
        id: 2,
        icon: Award,
        title: "Premium Quality",
        description:
          "Production with high-quality materials and meticulous craftsmanship.",
        color: "orange",
      },
      {
        id: 3,
        icon: Clock,
        title: "Fast Delivery",
        description:
          "Guaranteed delivery within 3-5 business days after order.",
        color: "green",
      },
      {
        id: 4,
        icon: Users,
        title: "Expert Team",
        description: "The industry's best experts with 25 years of experience.",
        color: "purple",
      },
    ],
  };

  const featureList = features || defaultFeatures[language];

  const colorVariants = {
    blue: {
      icon: "text-blue-600 bg-blue-100",
      badge: "bg-blue-100 text-blue-800",
    },
    orange: {
      icon: "text-orange-600 bg-orange-100",
      badge: "bg-orange-100 text-orange-800",
    },
    green: {
      icon: "text-green-600 bg-green-100",
      badge: "bg-green-100 text-green-800",
    },
    purple: {
      icon: "text-purple-600 bg-purple-100",
      badge: "bg-purple-100 text-purple-800",
    },
  };

  const variants = {
    grid: {
      container: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
      item: "text-center p-6",
    },
    list: {
      container: "space-y-6",
      item: "flex items-start space-x-4 p-4",
    },
    cards: {
      container: "grid grid-cols-1 md:grid-cols-2 gap-6",
      item: "p-6",
    },
    minimal: {
      container: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
      item: "text-center",
    },
  };

  const currentVariant = variants[variant] || variants.grid;

  const renderFeature = (feature, index) => {
    const IconComponent = feature.icon;
    const colors = colorVariants[feature.color] || colorVariants.blue;

    if (variant === "list") {
      return (
        <div key={feature.id} className={currentVariant.item}>
          <div
            className={classNames(
              "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center",
              colors.icon
            )}
          >
            <IconComponent size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      );
    }

    return (
      <div
        key={feature.id}
        className={classNames(
          currentVariant.item,
          "group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        )}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div
          className={classNames(
            "w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",
            variant === "grid" || variant === "minimal" ? "mx-auto" : "",
            colors.icon
          )}
        >
          <IconComponent size={32} />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {feature.title}
        </h3>

        <p className="text-gray-600 leading-relaxed">{feature.description}</p>

        {feature.badge && (
          <div className="mt-4">
            <Badge variant="primary" size="sm">
              {feature.badge}
            </Badge>
          </div>
        )}
      </div>
    );
  };

  if (variant === "cards") {
    return (
      <div className={classNames(currentVariant.container, className)}>
        {featureList.map((feature, index) => (
          <Card key={feature.id} className="h-full">
            {renderFeature(feature, index)}
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className={classNames(currentVariant.container, className)}>
      {featureList.map((feature, index) => renderFeature(feature, index))}
    </div>
  );
};

// Value Props Component for specific use cases
export const ValueProps = ({ language = "TR", className = "" }) => {
  const valueProps = {
    TR: [
      {
        id: 1,
        icon: Shield,
        title: "Dayanıklılık",
        description: "Uzun ömürlü kullanım",
        color: "blue",
      },
      {
        id: 2,
        icon: CheckCircle,
        title: "Güvenlik",
        description: "Maksimum koruma",
        color: "green",
      },
      {
        id: 3,
        icon: Star,
        title: "Uyumluluk",
        description: "Standartlara uygun",
        color: "orange",
      },
      {
        id: 4,
        icon: Award,
        title: "Kalite",
        description: "Premium malzeme",
        color: "purple",
      },
    ],
    EN: [
      {
        id: 1,
        icon: Shield,
        title: "Durability",
        description: "Long-lasting use",
        color: "blue",
      },
      {
        id: 2,
        icon: CheckCircle,
        title: "Safety",
        description: "Maximum protection",
        color: "green",
      },
      {
        id: 3,
        icon: Star,
        title: "Compliance",
        description: "Standards compliant",
        color: "orange",
      },
      {
        id: 4,
        icon: Award,
        title: "Quality",
        description: "Premium materials",
        color: "purple",
      },
    ],
  };

  return (
    <Features
      language={language}
      variant="minimal"
      features={valueProps[language]}
      className={className}
    />
  );
};

export default Features;
