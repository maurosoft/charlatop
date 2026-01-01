
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const plans = [
  {
    name: "Free Forever",
    price: "0",
    period: "/mese",
    description: "Il punto di partenza per esplorare l'automazione IA.",
    features: [
      "1 Agente IA (Chatbot)",
      "100 Messaggi inclusi",
      "1 Widget Sito Web",
      "Base di Conoscenza IA",
      "Canale: Web Chat",
      "Supporto Community"
    ],
    cta: "Inizia Gratis",
    popular: false,
    color: "from-gray-500 to-gray-700"
  },
  {
    name: "Starter",
    subtitle: "Focus sui Social",
    price: "9",
    period: "/agente/mese",
    description: "Perfetto per chi vuole automatizzare i canali Meta.",
    features: [
      "Tutto nel piano Free più:",
      "1 Agente IA Incluso",
      "1.000 Messaggi al mese",
      "Siti Web Illimitati",
      "Instagram Direct & FB Messenger",
      "Visual Flow Builder No-Code",
      "Sincronizzazione Lead CRM"
    ],
    cta: "Prova Starter",
    popular: false,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Essentials",
    subtitle: "Business Ready",
    price: "25",
    period: "/mese",
    description: "La scelta definitiva per scalare su WhatsApp.",
    features: [
      "Tutto nel piano Starter più:",
      "5 Agenti IA Inclusi",
      "5.000 Messaggi al mese",
      "Siti Web Illimitati",
      "WhatsApp Cloud API Ufficiale",
      "Rimozione Branding Charla",
      "Team Management (3 posti)",
      "Supporto Prioritario"
    ],
    cta: "Scegli Essentials",
    popular: true,
    color: "from-purple-600 to-indigo-600"
  },
  {
    name: "Plus",
    subtitle: "Soluzione Enterprise",
    price: "59",
    period: "/mese",
    description: "Potenza estrema per agenzie e grandi aziende.",
    features: [
      "Tutto nel piano Essentials più:",
      "10 Agenti IA Inclusi",
      "20.000 Messaggi al mese",
      "Siti Web Illimitati",
      "Accesso API & Webhooks",
      "Soluzioni White Label",
      "Account Manager Dedicato",
      "Integrazioni Personalizzate"
    ],
    cta: "Passa a Plus",
    popular: false,
    color: "from-orange-500 to-red-500"
  }
];

export const Pricing: React.FC = () => {
  const affiliateUrl = "https://charla.com?fpr=nonnoweb";

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#020617] scroll-mt-20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/5 blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Piani di <span className="gradient-text">Abbonamento</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Scegli la configurazione più adatta alle tue esigenze. Prezzi in USD. Fatturazione Meta separata per WhatsApp.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 100} direction="up" className="flex flex-col h-full">
              <div className={`relative flex flex-col h-full rounded-[2.5rem] p-8 transition-all duration-500 hover:scale-[1.02] border-2 group ${plan.popular ? 'bg-white/5 border-purple-500 shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)]' : 'bg-white/[0.02] border-white/5 hover:border-white/10 shadow-xl'}`}>
                
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-[11px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">
                    Consigliato
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  {plan.subtitle && <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">{plan.subtitle}</p>}
                  
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-white/50 mr-1">$</span>
                    <span className="text-6xl font-black text-white tracking-tighter">{plan.price}</span>
                    <span className="text-gray-500 text-sm ml-2 font-medium">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed min-h-[40px]">{plan.description}</p>
                </div>

                <div className="flex-grow">
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full mb-8"></div>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm text-gray-300 leading-snug">
                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-br ${plan.color} shadow-sm`}>
                          <i className="fas fa-check text-[10px] text-white"></i>
                        </div>
                        <span className={feature.includes("Tutto nel") ? "font-semibold text-white/90" : ""}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={affiliateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-2xl text-center font-bold text-base transition-all duration-300 transform active:scale-95 flex items-center justify-center space-x-2 ${plan.popular ? 'bg-white text-black hover:bg-gray-200 shadow-xl' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}
                >
                  <span>{plan.cta}</span>
                  <i className="fas fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"></i>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Important Disclaimer */}
        <ScrollReveal delay={400} className="text-center mt-12 mb-16 px-4">
          <div className="max-w-3xl mx-auto p-6 border border-white/5 rounded-2xl bg-white/[0.01]">
            <p className="text-gray-500 text-xs italic leading-loose text-center">
              <i className="fas fa-circle-info mr-2 text-purple-500/50"></i>
              <strong>Dettagli Costi:</strong> I prezzi sono in <strong>USD</strong>. Charla.Top gestisce l'automazione. I costi per le conversazioni WhatsApp (API Cloud) sono addebitati <strong>direttamente da Meta</strong> sulla tua Business Manager. Per gli invii massivi proattivi, considera l'integrazione con <a href="https://uozap.it" target="_blank" className="underline text-gray-400">UoZap.it</a>.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="glass-card rounded-[2rem] p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold mb-2">Soluzioni Su Misura?</h4>
              <p className="text-gray-400">Contattaci per volumi elevati, piani multibrand e assistenza dedicata promoweb.me.</p>
            </div>
            <a href="mailto:info@promoweb.me" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold transition-all whitespace-nowrap">
              Invia Email
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
