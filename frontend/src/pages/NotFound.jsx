import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Button from "../components/Button";
import Section from "../components/Section";

const NotFound = () => {
  return (
    <Section
      padding="xl"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            as={Link}
            to="/"
            variant="primary"
            size="lg"
            className="group"
          >
            <Home size={20} className="mr-2" />
            Ana Sayfaya Dön
          </Button>

          <Button
            onClick={() => window.history.back()}
            variant="outline"
            size="lg"
            className="group"
          >
            <ArrowLeft
              size={20}
              className="mr-2 group-hover:-translate-x-1 transition-transform duration-200"
            />
            Geri Dön
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default NotFound;
