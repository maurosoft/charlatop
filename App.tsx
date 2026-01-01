
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { MultichannelShowcase } from './components/MultichannelShowcase';
import { AutomationHeartbeat } from './components/AutomationHeartbeat';
import { ProductTour } from './components/ProductTour';
import { AISection } from './components/AISection';
import { PromptWizard } from './components/PromptWizard';
import { Pricing } from './components/Pricing';
import { Tokenomics } from './components/Tokenomics';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CharlaAssistant } from './components/CharlaAssistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-purple-500 selection:text-white">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
      </div>

      <Header scrolled={scrolled} />
      
      <main>
        <Hero />
        <Features />
        <MultichannelShowcase />
        <AutomationHeartbeat />
        <ProductTour />
        <AISection />
        <PromptWizard />
        <Pricing />
        <Tokenomics />
        <FAQ />
      </main>

      <Footer />
      
      {/* Floating AI Assistant */}
      <CharlaAssistant />
    </div>
  );
};

export default App;
