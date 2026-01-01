
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const CharlaAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Ciao! Sono Charla, l’assistente di servizio. Sono qui per farti scoprire come questo straordinario sistema può rivoluzionare il tuo lavoro. Tu cosa ne sai di chatbot? Ne hai mai usato uno per la tua attività?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...messages.map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }]
          })),
          { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: {
          systemInstruction: `Ti chiami Charla e sei l'assistente di servizio ufficiale di Charla.Top. 
          IL TUO STILE:
          - Sii umano, caldo e sintetico. Evita elenchi lunghi. Rispondi con massimo 2-3 frasi brevi.
          - Non essere un robot che sputa dati. Sii un consulente che dialoga.
          - Chiedi spesso all'utente: cosa si aspetta da un chatbot? Che problemi vuole risolvere?
          
          COSA SAI FARE:
          - Conosci perfettamente Charla: installazione (script/iframe), integrazioni (WhatsApp Cloud API, Instagram, Messenger), Knowledge Base (documenti/sito web), Lead Generation (Custom Fields) e Human Takeover.
          - Sai dare istruzioni dettagliate passo-passo ma solo se l'utente te le chiede specificamente.
          - Suggerisci sempre la soluzione migliore in base al tipo di attività dell'utente.
          
          IL TUO OBIETTIVO:
          - Instaurare un dialogo. Se l'utente ti chiede "come funziona", rispondi in modo semplice e chiedigli subito: "Tu per cosa vorresti usarlo? Vendite o supporto?".
          - Farti raccontare la loro attività per personalizzare il suggerimento.`,
          temperature: 0.8,
        }
      });

      const aiResponse = response.text || "Scusami, mi sono distratto un attimo. Cosa dicevamo?";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error("Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Ops! Il mio modulo di conversazione ha avuto un sussulto. Riproviamo?" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] glass-card rounded-[2rem] border-white/10 shadow-2xl flex flex-col overflow-hidden animate-fadeIn animate-duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                <i className="fas fa-magic text-white animate-pulse"></i>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm tracking-tight">Charla | Servizio Assistenza</h4>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/70 text-[10px] font-black uppercase tracking-widest">Disponibile ora</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors p-2">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4 scrollbar-hide bg-[#030712]/40">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-purple-600 text-white rounded-tr-none' 
                  : 'bg-white/5 text-gray-200 border border-white/10 rounded-tl-none backdrop-blur-md'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10 flex space-x-1 items-center">
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/5 bg-black/40">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Scrivi un messaggio a Charla..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 px-6 pr-12 text-sm text-white focus:border-purple-500 outline-none transition-all placeholder:text-gray-600"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs hover:bg-purple-500 transition-colors disabled:opacity-50 disabled:bg-gray-800"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <p className="text-[8px] text-gray-600 mt-3 text-center uppercase tracking-[0.2em] font-black">
              Parla con l'esperto Charla.Top
            </p>
          </div>
        </div>
      )}

      {/* Bubble Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 shadow-[0_10px_40px_rgba(147,51,234,0.4)] flex items-center justify-center text-white text-2xl transition-all transform hover:scale-110 active:scale-95 group relative ${isOpen ? 'rotate-90' : ''}`}
      >
        <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20 group-hover:opacity-40"></div>
        {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-comment-dots"></i>}
        
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-[#030712] rounded-full"></div>
        )}
      </button>
    </div>
  );
};
