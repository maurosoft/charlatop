
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Tokenomics: React.FC = () => {
  const integrations = [
    { 
      label: "WhatsApp", 
      icon: "fa-whatsapp", 
      color: "text-green-500", 
      url: "https://miolink.eu/NonnoZap" 
    },
    { 
      label: "Messenger", 
      icon: "fa-facebook-messenger", 
      color: "text-blue-500", 
      url: "https://m.me/promowebservizi" 
    },
    { 
      label: "Instagram", 
      icon: "fa-instagram", 
      color: "text-pink-500", 
      url: "https://www.instagram.com/agenzia_promoweb/" 
    },
    { 
      label: "Facebook", 
      icon: "fa-facebook", 
      color: "text-blue-600", 
      url: "https://www.facebook.com/promowebservizi/" 
    },
    { 
      label: "Zapier", 
      icon: "fa-bolt", 
      color: "text-orange-500", 
      url: "https://promoweb.me" 
    }
  ];

  return (
    <section id="token" className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-6">
        <ScrollReveal className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Integrazioni Potenti</h2>
          <p className="text-gray-400">Charla.Top si collega a tutti i canali che usi ogni giorno per vendere e comunicare.</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {integrations.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} direction="none">
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 h-full flex flex-col items-center justify-center group hover:bg-white/5 border border-white/5 hover:border-white/10"
              >
                <i className={`fab ${item.icon} text-4xl ${item.color} mb-3 group-hover:scale-110 transition-transform`}></i>
                <p className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{item.label}</p>
                <p className="text-[10px] text-gray-600 mt-2 break-all opacity-0 group-hover:opacity-100 transition-opacity truncate w-full">
                  {item.url.replace('https://', '').replace('www.', '')}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400} className="mt-16">
          <div className="glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-4">Pronto a trasformare la tua comunicazione?</h3>
              <p className="text-gray-400 mb-6">Unisciti a migliaia di aziende che stanno già usando Charla.Top per scalare le loro vendite h24.</p>
              <div className="flex items-center space-x-6">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-black" alt="user" />
                    ))}
                 </div>
                 <p className="text-sm text-gray-300 font-medium">+10k Business Attivi</p>
              </div>
            </div>
            
            <a 
              href="https://charla.com?fpr=nonnoweb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="md:w-1/3 w-full block group"
            >
              <div className="p-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-purple-500/25">
                <p className="text-white/80 text-xs font-bold uppercase mb-2 flex justify-between items-center">
                  PROVA GRATUITA
                  <i className="fas fa-rocket text-[10px]"></i>
                </p>
                <p className="text-4xl font-black mb-4">CHARLA START</p>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-full animate-pulse"></div>
                </div>
                <p className="text-right text-[10px] mt-2 font-medium underline">Inizia ora gratis • Nessuna carta richiesta</p>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
