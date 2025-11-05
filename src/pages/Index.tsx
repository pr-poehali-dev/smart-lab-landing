import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import TrustSection from '@/components/TrustSection';
import ReportExample from '@/components/ReportExample';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const eyeOffset = {
    x: (mousePosition.x - window.innerWidth / 2) / 50,
    y: (mousePosition.y - window.innerHeight / 2) / 50,
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/SmartLab_AiBot?start=link_EF2qyCuUNV', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header onTelegramClick={handleTelegramClick} />
      <HeroSection onTelegramClick={handleTelegramClick} eyeOffset={eyeOffset} />
      <HowItWorks />
      <TrustSection />
      <ReportExample />
      <Testimonials />
      <Pricing onTelegramClick={handleTelegramClick} />
      <FAQ />
      <FinalCTA onTelegramClick={handleTelegramClick} />
      <Footer />
    </div>
  );
};

export default Index;
