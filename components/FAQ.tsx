
import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

const faqs = [
  {
    q: "Cos'è Charla.Top?",
    a: "Charla.Top è la piattaforma leader per la creazione di chatbot omnicanale. Ti permette di gestire in un unico posto le chat di WhatsApp, Instagram, Facebook e del tuo sito web, automatizzando le risposte e le vendite."
  },
  {
    q: "Devo saper programmare?",
    a: "Assolutamente no. Il nostro Visual Flow Builder è completamente no-code: puoi costruire flussi di conversazione complessi semplicemente trascinando e collegando blocchi visuali."
  },
  {
    q: "Funziona con WhatsApp Business?",
    a: "Sì, Charla.Top si integra con le API ufficiali di WhatsApp Business per automatizzare le risposte 24/7. Per gli invii massivi e le campagne broadcast proattive, consigliamo l'utilizzo complementare di UoZap.it."
  },
  {
    q: "Posso gestire le chat manualmente?",
    a: "Sì. Anche se il chatbot è attivo, puoi intervenire in tempo reale tramite la dashboard 'Live Chat' per parlare direttamente con i tuoi clienti quando necessario."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-4xl font-bold">Domande Frequenti</h2>
          </ScrollReveal>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 100} direction="up">
                <div className="glass-card rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-lg">{faq.q}</span>
                    <i className={`fas fa-chevron-down transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}></i>
                  </button>
                  {openIndex === i && (
                    <div className="p-6 pt-0 text-gray-400 border-t border-white/5 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
