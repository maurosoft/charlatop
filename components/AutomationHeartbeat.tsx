
import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';

export const AutomationHeartbeat: React.FC = () => {
  const [stats, setStats] = useState({
    messages: 124580,
    leads: 8932,
    conversion: 24.5
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        messages: prev.messages + Math.floor(Math.random() * 3),
        leads: prev.leads + (Math.random() > 0.8 ? 1 : 0),
        conversion: +(prev.conversion + (Math.random() * 0.01 - 0.005)).toFixed(2)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
        transformOrigin: 'top'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">L'IA in Azione</h2>
          <p className="text-gray-400">Guarda come Charla.Top trasforma ogni conversazione in una opportunità.</p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          {/* Input Side */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="glass-card p-6 rounded-2xl flex items-center space-x-4 border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <i className="fab fa-whatsapp text-blue-500 text-xl"></i>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">In Arrivo</p>
                <p className="font-bold">Richiesta Preventivo</p>
              </div>
              <div className="ml-auto animate-pulse w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <div className="glass-card p-6 rounded-2xl flex items-center space-x-4 border-l-4 border-pink-500 opacity-60">
              <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                <i className="fab fa-instagram text-pink-500 text-xl"></i>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">In Arrivo</p>
                <p className="font-bold">Info Orari Apertura</p>
              </div>
            </div>
          </div>

          {/* Central Core */}
          <div className="relative flex justify-center order-1 lg:order-2 scale-110">
            <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full animate-pulse"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-purple-500/30 flex items-center justify-center p-4">
              <div className="absolute inset-0 border-t-2 border-purple-500 rounded-full animate-spin"></div>
              <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(147,51,234,0.4)]">
                <i className="fas fa-brain text-white text-4xl md:text-6xl mb-2 animate-bounce"></i>
                <span className="text-[10px] font-black tracking-[0.3em] text-white/70 uppercase">Charla Core IA</span>
              </div>
              
              {/* Traveling Particles (SVG) */}
              <svg className="absolute inset-[-100px] w-[calc(100%+200px)] h-[calc(100%+200px)] pointer-events-none opacity-40">
                <circle cx="50%" cy="50%" r="45%" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 8" className="animate-[spin_20s_linear_infinite]" />
              </svg>
            </div>
          </div>

          {/* Output Side */}
          <div className="space-y-6 order-3">
            <div className="glass-card p-8 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <i className="fas fa-chart-line text-6xl text-emerald-500"></i>
              </div>
              <p className="text-sm text-emerald-400 font-bold mb-1">Lead Generati</p>
              <h4 className="text-4xl font-black text-white tabular-nums">{stats.leads.toLocaleString()}</h4>
              <div className="mt-4 flex items-center text-xs text-emerald-500">
                <i className="fas fa-arrow-up mr-1"></i>
                <span>+12% questa settimana</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-2xl">
                <p className="text-[10px] text-gray-500 font-bold uppercase">Messaggi IA</p>
                <p className="text-xl font-bold tabular-nums">{stats.messages.toLocaleString()}</p>
              </div>
              <div className="glass-card p-4 rounded-2xl">
                <p className="text-[10px] text-gray-500 font-bold uppercase">Conversione</p>
                <p className="text-xl font-bold tabular-nums">{stats.conversion}%</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
