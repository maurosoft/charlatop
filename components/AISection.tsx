
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const AISection: React.FC = () => {
  return (
    <section id="ai" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <ScrollReveal direction="right" className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Automazione Intelligente Senza Limiti</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Charla.Top non è una semplice chat. È un sistema esperto che qualifica i lead, prenota appuntamenti e risponde ai dubbi dei clienti usando l'intelligenza artificiale più avanzata.
            </p>
            
            <ul className="space-y-4">
              {[
                "Risposte istantanee alle domande frequenti (FAQ)",
                "Qualificazione automatica dei contatti",
                "Gestione flussi conversazionali e sequenze temporizzate",
                "Integrazione con Google Sheets, Zapier e Webhooks"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-[10px] text-purple-400"></i>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <a href="https://charla.com?fpr=nonnoweb" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center space-x-2 text-purple-400 font-bold hover:text-purple-300 transition-colors">
              <span>Crea il tuo primo chatbot ora</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </ScrollReveal>

          <ScrollReveal direction="left" className="lg:w-1/2 relative">
            <div className="relative glass-card p-2 rounded-[2.5rem] overflow-hidden">
              <div className="bg-gray-900 rounded-[2rem] p-6">
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-[10px] font-bold text-blue-400 uppercase">Visitatore</span>
                      </div>
                      <p className="text-sm">Ciao, vendete anche software per hotel?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-purple-600 p-3 rounded-2xl rounded-tr-none max-w-[80%]">
                      <div className="flex items-center space-x-2 mb-1 text-right justify-end">
                        <span className="text-[10px] font-bold text-white/80 uppercase">Charla AI</span>
                      </div>
                      <p className="text-sm">Certamente! Abbiamo una soluzione specifica. Vuoi prenotare una demo gratuita o preferisci scaricare la brochure?</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                      <p className="text-sm">Vorrei prenotare una demo per martedì mattina.</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-purple-600 p-3 rounded-2xl rounded-tr-none max-w-[80%]">
                      <p className="text-sm">Perfetto! Ho fissato la demo per martedì alle 10:00. Ho appena inviato i dettagli alla tua email.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/10 blur-[100px] -z-10"></div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
