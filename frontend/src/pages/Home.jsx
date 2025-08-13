import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Features, { ValueProps } from "../components/Features";
import ProductGrid from "../components/ProductGrid";
import Stats from "../components/Stats";
import { TestimonialGrid } from "../components/Testimonial";
import CTA from "../components/CTA";
import Badge from "../components/Badge";
import Button from "../components/Button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import translations from "../data/translations.json";
import productsData from "../data/products.json";
import statsData from "../data/stats.json";

const Home = () => {
  const { language } = useOutletContext();
  const t = translations[language];

  // Get featured products for homepage
  const featuredProducts = productsData.products.filter(
    (product) => product.featured
  );

  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero language={language} />

      {/* Industry Badges Section */}
      <Section background="light" padding="default">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            {language === "TR" ? "Sektör Lideri" : "Industry Leader"}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              {
                label: language === "TR" ? "ISO 9001" : "ISO 9001",
                color: "primary",
              },
              {
                label: language === "TR" ? "CE Sertifikalı" : "CE Certified",
                color: "secondary",
              },
              {
                label: language === "TR" ? "EN Standartları" : "EN Standards",
                color: "success",
              },
              {
                label: language === "TR" ? "OEKO-TEX" : "OEKO-TEX",
                color: "primary",
              },
            ].map((badge, index) => (
              <Badge key={index} variant={badge.color} size="lg">
                {badge.label}
              </Badge>
            ))}
          </div>
        </div>
      </Section>

      {/* Value Props Section */}
      <Section padding="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === "TR"
              ? "Neden Bizi Tercih Etmelisiniz?"
              : "Why Choose Us?"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "TR"
              ? "Kalite, güvenlik ve müşteri memnuniyeti odaklı hizmet anlayışımız ile sektörün lideri konumundayız."
              : "We are the industry leader with our service approach focused on quality, safety and customer satisfaction."}
          </p>
        </div>
        <ValueProps language={language} />
      </Section>

      {/* Featured Products Section */}
      <Section background="gray" padding="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === "TR" ? "Öne Çıkan Ürünlerimiz" : "Featured Products"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {language === "TR"
              ? "En popüler ve kaliteli iş kıyafetlerimizi keşfedin."
              : "Discover our most popular and quality work clothes."}
          </p>
        </div>

        <ProductGrid
          products={featuredProducts}
          language={language}
          showFilters={false}
          showSearch={false}
          gridCols={3}
          className="mb-8"
        />

        <div className="text-center">
          <Button
            as={Link}
            to="/products"
            variant="primary"
            size="lg"
            className="group"
          >
            {t.common.viewAll}
            <ArrowRight
              size={20}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
            />
          </Button>
        </div>
      </Section>

      {/* Company Stats Section */}
      <Section padding="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === "TR" ? "Rakamlarla Biz" : "Our Numbers"}
          </h2>
        </div>
        <Stats stats={statsData.stats} language={language} variant="cards" />
      </Section>

      {/* Features Section */}
      <Section background="blue" padding="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === "TR"
              ? "Hizmet Özelliklerimiz"
              : "Our Service Features"}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {language === "TR"
              ? "Müşterilerimize sunduğumuz değer katmaya odaklı hizmetlerimiz."
              : "Our services focused on adding value to our customers."}
          </p>
        </div>
        <Features language={language} variant="cards" />
      </Section>

      {/* Testimonials Section */}
      <Section padding="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === "TR" ? "Müşteri Yorumları" : "Customer Testimonials"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "TR"
              ? "Bizimle çalışan müşterilerimizin deneyimleri."
              : "Experiences of our customers who work with us."}
          </p>
        </div>
        <TestimonialGrid
          testimonials={statsData.testimonials}
          language={language}
          variant="card"
          columns={3}
        />
      </Section>

      {/* CTA Section */}
      <CTA
        language={language}
        variant="hero"
        backgroundImage="/api/placeholder/1920/600"
      />
    </div>
  );
};
export default Home;
