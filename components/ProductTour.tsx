
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const ProductTour: React.FC = () => {
  return (
    <section id="product-tour" className="py-24 bg-black/30 scroll-mt-20">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Scopri come funziona <span className="gradient-text">Charla.Top</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Dalla costruzione dei flussi alla gestione delle vendite: una panoramica completa della piattaforma di automazione più potente per il tuo business.
          </p>
        </ScrollReveal>

        {/* Feature 1: Visual Builder */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <ScrollReveal direction="right" className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              Facilità d'uso
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Crea Chatbot Senza Scrivere Codice</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Il nostro <strong>Visual Flow Builder</strong> ti permette di disegnare l'esperienza utente trascinando i blocchi. Aggiungi bottoni, immagini, ritardi di digitazione e logiche condizionali con estrema semplicità.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-2xl">
                <i className="fas fa-magic text-blue-400 mb-2"></i>
                <p className="text-sm font-bold">Drag & Drop</p>
              </div>
              <div className="glass-card p-4 rounded-2xl">
                <i className="fas fa-bolt text-yellow-400 mb-2"></i>
                <p className="text-sm font-bold">Instant Preview</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" className="lg:w-1/2">
            <div className="relative p-2 glass-card rounded-[2rem] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000" 
                alt="Charla.Top Flow Builder" 
                className="rounded-[1.5rem] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-600 p-4 rounded-2xl shadow-xl hidden sm:block">
                <p className="text-xs font-bold">No-Code AI</p>
                <div className="flex space-x-1 mt-2">
                  <div className="w-8 h-1 bg-white/30 rounded"></div>
                  <div className="w-8 h-1 bg-white/30 rounded"></div>
                  <div className="w-8 h-1 bg-white rounded"></div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Feature 2: Shared Inbox */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32">
          <ScrollReveal direction="left" className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              Gestione Centralizzata
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Inbox Condivisa Omnicanale</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Smetti di saltare da un'app all'altra. Rispondi ai messaggi di <strong>WhatsApp, Instagram e Facebook</strong> da un'unica schermata. Gestisci i ticket, assegna conversazioni ai collaboratori e tieni traccia di ogni cliente.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <i className="fas fa-check-circle text-emerald-500"></i>
                <span>Etichette personalizzate per i lead</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <i className="fas fa-check-circle text-emerald-500"></i>
                <span>Note interne per il team</span>
              </li>
            </ul>
          </ScrollReveal>
          <ScrollReveal direction="right" className="lg:w-1/2">
            <div className="relative p-2 glass-card rounded-[2rem] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Charla.Top Shared Inbox" 
                className="rounded-[1.5rem] w-full"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-emerald-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </ScrollReveal>
        </div>

        {/* Feature 3: Marketing Integration */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <ScrollReveal direction="right" className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
              Strategia di Marketing
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Focus su Automazione e Chat</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Charla.Top eccelle nella gestione intelligente delle conversazioni e nell'automazione h24. Per le tue esigenze di <strong>invio massivo su WhatsApp</strong>, ti consigliamo di integrare sistemi specializzati come <a href="https://uozap.it" target="_blank" rel="noopener noreferrer" className="text-orange-400 font-bold hover:underline">UoZap.it</a>. Combina la potenza della nostra IA con la capillarità dei broadcast per una strategia vincente.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">98%</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Open Rate</p>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">Partner</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-tighter">UoZap.it</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" className="lg:w-1/2">
            <div className="relative p-2 glass-card rounded-[2rem] shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000" 
                alt="Marketing Automation Charla.Top" 
                className="rounded-[1.5rem] w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <p className="text-white font-bold text-xl">Potenza di Conversione</p>
                <p className="text-white/60 text-sm">Automazione con Charla, Invii con UoZap.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
