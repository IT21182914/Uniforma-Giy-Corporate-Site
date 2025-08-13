import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const MainLayout = () => {
  const [language, setLanguage] = useState('TR');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    // Could also store in localStorage or context
    localStorage.setItem('preferred-language', newLanguage);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        language={language} 
        onLanguageChange={handleLanguageChange}
      />
      
      <main className="flex-1">
        <Outlet context={{ language, setLanguage: handleLanguageChange }} />
      </main>
      
      <Footer language={language} />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default MainLayout;
