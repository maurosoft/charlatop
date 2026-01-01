
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ScrollReveal } from './ScrollReveal';

export const PromptWizard: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [tone, setTone] = useState('Professionale');
  const [goal, setGoal] = useState('Vendite');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const generatePrompt = async () => {
    if (!userInput.trim()) return;
    
    setIsGenerating(true);
    setGeneratedPrompt('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Crea un System Prompt professionale e tecnico per un chatbot Charla.Top. 
                  
                  DATI BUSINESS: 
                  Descrizione: ${userInput}
                  Tono desiderato: ${tone}
                  Obiettivo principale: ${goal}
                  
                  STRUTTURA RICHIESTA PER IL PROMPT (Ottimizzato per Charla):
                  1. Persona: Definisci chi è l'agente IA.
                  2. Knowledge Base: Istruisci l'IA ad attingere ESCLUSIVAMENTE dalla Knowledge Base di Charla e dai dati scrapati dal sito web fornito nella dashboard.
                  3. Vincoli Canale: Ottimizza le risposte per WhatsApp e Instagram (brevi, uso di emoji, paragrafi chiari).
                  4. Lead Gen: Se l'utente mostra interesse, chiedi nome ed email/numero per popolare i 'Custom Fields' di Charla.
                  5. Escalation: Spiega quando suggerire il 'Human Takeover' (intervento umano).
                  
                  RESTITUISCI SOLO IL TESTO DEL PROMPT DA COPIARE.`,
        config: {
          systemInstruction: `Sei l'esperto tecnico senior di Charla.Top. Conosci a fondo la documentazione (API Cloud WhatsApp, Knowledge Base, Webhooks, Zapier integration). 
          Il tuo compito è scrivere la "System Instruction" perfetta che l'utente incollerà nella sezione "Settings > Chatbot" di Charla. 
          Assicurati che il prompt generato istruisca l'IA a:
          - Non inventare fatti non presenti nella KB.
          - Usare i dati dei Visitor Attributes per personalizzare la chat.
          - Gestire le limitazioni dei canali Meta (niente link troppo lunghi, formattazione leggibile).
          - Essere proattivo nella raccolta lead per le automazioni via Zapier.`,
          temperature: 0.8,
        }
      });

      setGeneratedPrompt(response.text || "Errore nella generazione. Riprova.");
    } catch (error) {
      console.error("AI Error:", error);
      setGeneratedPrompt("Si è verificato un errore. Verifica la connessione o riprova più tardi.");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <section id="prompt-wizard" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6">
        <ScrollReveal className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold mb-6">
            <i className="fas fa-microchip animate-pulse"></i>
            <span>Powered by Gemini 3 Flash & Charla SDK</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Configuratore <span className="gradient-text">IA Istantaneo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Abbiamo studiato l'intera documentazione tecnica di Charla per te. Inserisci i dettagli del tuo business e genera la logica del tuo agente in 3 secondi.
          </p>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 items-stretch">
          
          {/* Form Side */}
          <ScrollReveal direction="right" className="lg:col-span-2 glass-card p-8 rounded-[3rem] border-white/10 flex flex-col shadow-2xl">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <i className="fas fa-sliders text-purple-500"></i>
              Parametri Bot
            </h3>
            
            <div className="space-y-6 flex-grow">
              <div>
                <label className="block text-xs font-black text-gray-500 mb-3 uppercase tracking-[0.2em]">Descrizione Business</label>
                <textarea 
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Es: Ristorante Gourmet a Milano. Voglio che il bot prenda prenotazioni e risponda alle allergie alimentari..."
                  className="w-full h-40 bg-white/5 border border-white/10 rounded-3xl p-5 text-white focus:border-purple-500 transition-all resize-none outline-none focus:ring-4 focus:ring-purple-500/10 placeholder:text-gray-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-xs font-black text-gray-500 mb-3 uppercase tracking-[0.2em]">Personalità</label>
                  <select 
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-white outline-none focus:border-purple-500 cursor-pointer appearance-none hover:bg-white/10 transition-colors"
                  >
                    <option className="bg-[#030712]">Professionale</option>
                    <option className="bg-[#030712]">Amichevole</option>
                    <option className="bg-[#030712]">Persuasivo</option>
                    <option className="bg-[#030712]">Tecnico</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-500 mb-3 uppercase tracking-[0.2em]">Focus</label>
                  <select 
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-white outline-none focus:border-purple-500 cursor-pointer appearance-none hover:bg-white/10 transition-colors"
                  >
                    <option className="bg-[#030712]">Vendite</option>
                    <option className="bg-[#030712]">Supporto H24</option>
                    <option className="bg-[#030712]">Lead Gen</option>
                    <option className="bg-[#030712]">Prenotazioni</option>
                  </select>
                </div>
              </div>

              <button 
                onClick={generatePrompt}
                disabled={isGenerating || !userInput}
                className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center space-x-3 overflow-hidden group relative ${isGenerating || !userInput ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-2xl hover:shadow-purple-500/40 active:scale-95'}`}
              >
                {isGenerating ? (
                  <>
                    <i className="fas fa-brain animate-bounce"></i>
                    <span>Analisi Documentazione...</span>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <i className="fas fa-sparkles relative z-10"></i>
                    <span className="relative z-10">Crea Logica Bot</span>
                  </>
                )}
              </button>
            </div>
          </ScrollReveal>

          {/* Terminal/Result Side */}
          <ScrollReveal direction="left" className="lg:col-span-3 relative flex flex-col">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl opacity-50"></div>
            <div className="relative h-full glass-card p-1 rounded-[3rem] border-white/10 flex flex-col bg-black/60 shadow-2xl">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-white/5 rounded-t-[2.9rem]">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <span className="ml-4 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Prompt System Output</span>
                </div>
                {generatedPrompt && (
                  <button 
                    onClick={copyToClipboard}
                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center space-x-2 transition-all ${copySuccess ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500 hover:text-white'}`}
                  >
                    <i className={`fas ${copySuccess ? 'fa-check-double' : 'fa-copy'}`}></i>
                    <span>{copySuccess ? 'Copiato!' : 'Copia Prompt'}</span>
                  </button>
                )}
              </div>

              {/* Terminal Body */}
              <div className="flex-grow p-8 font-mono text-sm leading-relaxed text-gray-400 overflow-y-auto max-h-[500px] scrollbar-hide">
                {!generatedPrompt && !isGenerating && (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30">
                    <i className="fas fa-code text-6xl mb-2"></i>
                    <p className="max-w-xs">Configura il tuo business a sinistra per vedere la logica IA generata qui.</p>
                  </div>
                )}
                
                {isGenerating && (
                  <div className="space-y-4 animate-pulse">
                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                    <div className="h-4 bg-white/10 rounded w-1/2"></div>
                    <div className="h-4 bg-white/10 rounded w-5/6"></div>
                    <div className="h-4 bg-white/10 rounded w-2/3"></div>
                    <div className="h-4 bg-white/10 rounded w-4/5"></div>
                  </div>
                )}

                {generatedPrompt && (
                  <div className="animate-fadeIn text-gray-300 whitespace-pre-wrap selection:bg-purple-500/30">
                    {generatedPrompt}
                  </div>
                )}
              </div>
              
              <div className="px-8 py-5 border-t border-white/5 bg-black/40 rounded-b-[2.9rem] flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Model: Gemini 3 Flash</span>
                  </div>
                  <div className="hidden sm:flex items-center space-x-1.5">
                    <i className="fas fa-shield-halved text-[10px] text-purple-500"></i>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Secure SDK</span>
                  </div>
                </div>
                <div className="text-[10px] text-gray-600 italic">
                  Pronto per Dashboard Charla.Top
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Instructions */}
        <ScrollReveal delay={300} className="mt-12 text-center">
          <p className="text-gray-500 text-sm italic">
            <i className="fas fa-info-circle mr-2 text-purple-500/50"></i>
            Una volta generato, copia il testo e incollalo in <strong>Settings &gt; Chatbot &gt; System Instructions</strong> della tua dashboard Charla.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
