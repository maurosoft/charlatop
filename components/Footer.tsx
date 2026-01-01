
import React from 'react';

export const Footer: React.FC = () => {
  const baseUrl = "https://charla.top/";
  const affiliateUrl = "https://charla.com?fpr=nonnoweb";

  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-comment-dots text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold tracking-tight">Charla<span className="text-purple-500">.Top</span></span>
            </div>
            <p className="text-gray-500 max-sm mb-6">
              La rivoluzione dell'automazione conversazionale. Automatizza il tuo business con i chatbot IA più avanzati sul mercato.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/promowebservizi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-blue-500 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/agenzia_promoweb/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-pink-500 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://miolink.eu/NonnoZap" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-green-500 transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://m.me/promowebservizi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-blue-400 transition-colors">
                <i className="fab fa-facebook-messenger"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Prodotto</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href={`${baseUrl}#product-tour`} className="hover:text-white transition-colors">Tour Prodotto</a></li>
              <li><a href={`${baseUrl}#pricing`} className="hover:text-white transition-colors">Prezzi</a></li>
              <li><a href={`${baseUrl}#token`} className="hover:text-white transition-colors">Canali</a></li>
              <li><a href={affiliateUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Stato API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Supporto</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="https://promoweb.me/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="https://promoweb.me/termini-di-servizio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Termini di Servizio</a></li>
              <li><a href="mailto:info@promoweb.me" className="hover:text-white transition-colors">Contatti</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Charla.Top. Tutti i diritti riservati.
          </div>
          
          <div className="glass-card px-6 py-4 rounded-2xl flex flex-col md:flex-row items-center gap-4 text-xs">
            <span className="font-bold text-gray-400">CREDITS:</span>
            <a href="https://promoweb.me" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 font-medium transition-colors">promoweb.me</a>
            <span className="hidden md:block text-gray-700">|</span>
            <span className="text-gray-500">0776.1805710</span>
            <span className="hidden md:block text-gray-700">|</span>
            <a href="mailto:info@promoweb.me" className="hover:text-purple-400 transition-colors">info@promoweb.me</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
