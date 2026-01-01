
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const featureList = [
  {
    title: "Omnicanalità Vera",
    desc: "Un'unica dashboard per gestire tutte le tue conversazioni su WhatsApp, Facebook Messenger, Instagram Direct e sito web.",
    icon: "fa-comments",
    color: "bg-blue-500",
    tooltip: "Gestisci WhatsApp, Messenger e Instagram in un unico flusso centralizzato e sincronizzato per non perdere mai un lead."
  },
  {
    title: "Visual Flow Builder",
    desc: "Crea sequenze di messaggi complesse con un builder drag-and-drop intuitivo. Nessuna riga di codice necessaria.",
    icon: "fa-diagram-project",
    color: "bg-purple-500",
    tooltip: "Disegna visivamente percorsi di conversazione logici, risposte condizionali e automazioni CRM in pochi minuti."
  },
  {
    title: "Live Chat & Human Takeover",
    desc: "L'IA gestisce il primo contatto, ma puoi intervenire manualmente in qualsiasi momento per chiudere le vendite più importanti.",
    icon: "fa-headset",
    color: "bg-emerald-500",
    tooltip: "Ricevi avvisi intelligenti quando un cliente ha bisogno di assistenza umana, permettendoti di subentrare istantaneamente."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Potenzia il Tuo Servizio Clienti</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Scopri come Charla.Top trasforma le semplici chat in strumenti di vendita automatizzati e supporto h24.</p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featureList.map((f, i) => (
            <ScrollReveal key={i} delay={i * 200}>
              <div className="glass-card p-8 rounded-3xl hover:bg-white/5 transition-all group relative h-full flex flex-col">
                
                {/* Tooltip informativo posizionato in alto a destra */}
                <div className="absolute top-6 right-6 group/tooltip z-30">
                  <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center cursor-help hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                    <i className="fas fa-info text-[10px] text-gray-500 group-hover/tooltip:text-purple-400"></i>
                  </div>
                  
                  {/* Contenuto del Tooltip */}
                  <div className="absolute bottom-full right-0 mb-3 w-64 p-4 bg-[#0a0f1e] border border-purple-500/20 text-gray-300 text-xs rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] opacity-0 scale-90 translate-y-2 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 group-hover/tooltip:translate-y-0 transition-all duration-300 pointer-events-none">
                    <div className="font-bold text-white mb-1">Dettaglio Funzione</div>
                    <p className="leading-relaxed opacity-80">{f.tooltip}</p>
                    <div className="absolute top-full right-2 border-8 border-transparent border-t-[#0a0f1e]"></div>
                  </div>
                </div>

                <div className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <i className={`fas ${f.icon} text-2xl text-white`}></i>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed flex-grow">{f.desc}</p>
                
                <div className="mt-6 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-xs font-bold text-purple-500 uppercase tracking-widest flex items-center gap-2">
                    Scopri di più <i className="fas fa-chevron-right text-[8px]"></i>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
