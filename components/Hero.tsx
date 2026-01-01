
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  const affiliateUrl = "https://charla.com?fpr=nonnoweb";
  const baseUrl = "https://charla.top/";

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span>Automatizza la tua crescita con l'IA</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
              Il Tuo Business <span className="gradient-text">Su Ogni Canale</span> con l'IA
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={500}>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl">
              Charla.Top è la piattaforma definitiva per creare chatbot intelligenti. Connettiti con i tuoi clienti su WhatsApp, Instagram, Facebook e Web in un unico posto.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={700}>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
              <a href={affiliateUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 inline-block">
                Inizia Gratis
              </a>
              <a href={`${baseUrl}#features`} className="glass-card hover:bg-white/10 px-8 py-4 rounded-full text-lg font-bold transition-all inline-block">
                Guarda il Tour
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={900} className="w-full">
            <div className="mt-20 relative w-full max-w-5xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur opacity-20"></div>
              <div className="relative glass-card rounded-3xl p-4 md:p-8 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                  alt="Charla.Top Dashboard Chatbot" 
                  className="rounded-xl w-full object-cover"
                />
                <div className="absolute bottom-12 left-12 glass-card p-4 rounded-2xl hidden md:block max-w-xs transform -rotate-2">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="fab fa-whatsapp text-white text-xs"></i>
                    </div>
                    <p className="text-sm font-bold">WhatsApp Automation</p>
                  </div>
                  <p className="text-xs text-gray-400 italic">"Ho risposto a 150 richieste clienti e generato 12 nuovi lead oggi!"</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
