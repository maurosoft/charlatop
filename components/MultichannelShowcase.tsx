
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const MultichannelShowcase: React.FC = () => {
  const socialIcons = [
    { icon: 'fa-whatsapp', color: 'bg-[#25D366]', shadow: 'shadow-green-500/40', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-12' },
    { icon: 'fa-instagram', color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', shadow: 'shadow-pink-500/40', pos: 'top-1/4 left-0 -translate-x-12' },
    { icon: 'fa-facebook-messenger', color: 'bg-gradient-to-br from-[#00B2FF] to-[#006AFF]', shadow: 'shadow-blue-500/40', pos: 'top-1/4 right-0 translate-x-12' },
    { icon: 'fa-envelope', color: 'bg-[#EA4335]', shadow: 'shadow-red-500/40', pos: 'bottom-1/4 left-0 -translate-x-12' },
    { icon: 'fa-facebook', color: 'bg-[#1877F2]', shadow: 'shadow-blue-600/40', pos: 'bottom-1/4 right-0 translate-x-12' },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black/50 to-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Visual Side (The Orbit) */}
          <ScrollReveal direction="right" className="lg:w-1/2 flex justify-center order-2 lg:order-1">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Central Logo */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-32 h-32 md:w-44 md:h-44 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(147,51,234,0.5)] animate-pulse-gentle">
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-[#ff3d00] rounded-full flex items-center justify-center overflow-hidden">
                    <i className="fas fa-comment-dots text-white text-4xl md:text-6xl"></i>
                  </div>
                </div>
              </div>

              {/* Orbital Path (SVG Circle) */}
              <div className="absolute inset-0 border-2 border-dashed border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>

              {/* Floating Social Icons */}
              {socialIcons.map((social, idx) => (
                <div 
                  key={idx} 
                  className={`absolute ${social.pos} z-30 transition-all duration-500 hover:scale-125`}
                  style={{ animation: `pulse-gentle ${2 + idx * 0.5}s infinite ease-in-out` }}
                >
                  <div className={`w-12 h-12 md:w-16 md:h-16 ${social.color} ${social.shadow} shadow-2xl rounded-2xl flex items-center justify-center text-white text-xl md:text-2xl`}>
                    <i className={`fab ${social.icon}`}></i>
                  </div>
                </div>
              ))}

              {/* Background Glow */}
              <div className="absolute inset-0 bg-purple-500/10 blur-[100px] rounded-full scale-150"></div>
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <ScrollReveal direction="left" className="lg:w-1/2 order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
              Comunicazione Multicanale
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Tutti i tuoi canali preferiti, <br />
              <span className="gradient-text">un'unica soluzione.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Charla.Top centralizza la comunicazione della tua azienda. Non importa se i tuoi clienti usano <strong>WhatsApp, Instagram o Facebook Messenger</strong>: i nostri Agenti IA rispondono ovunque con lo stesso tono di voce e la stessa efficacia, salvando ogni interazione nella tua dashboard centralizzata.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-sync text-blue-500"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Sincronizzazione Real-time</h4>
                  <p className="text-sm text-gray-500">I messaggi arrivano istantaneamente su ogni dispositivo collegato.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-user-friends text-green-500"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Team Collaboration</h4>
                  <p className="text-sm text-gray-500">Assegna le conversazioni ai membri del team in base al canale.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
