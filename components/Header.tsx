
import React from 'react';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const affiliateUrl = "https://charla.com?fpr=nonnoweb";
  const baseUrl = "https://charla.top/";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-card' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className={`w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center transition-all duration-500 ${scrolled ? 'animate-pulse-gentle shadow-lg shadow-purple-500/20' : ''}`}>
            <i className="fas fa-comment-dots text-white text-xl"></i>
          </div>
          <span className="text-2xl font-bold tracking-tight">Charla<span className="text-purple-500">.Top</span></span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <a href={`${baseUrl}#product-tour`} className="hover:text-white transition-colors">Tour Prodotto</a>
          <a href={`${baseUrl}#ai`} className="hover:text-white transition-colors">Agenti IA</a>
          <a href={`${baseUrl}#pricing`} className="hover:text-white transition-colors">Prezzi</a>
          <a href={`${baseUrl}#token`} className="hover:text-white transition-colors">Integrazioni</a>
          <a href={`${baseUrl}#faq`} className="hover:text-white transition-colors">Domande</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a 
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-sm font-semibold hover:text-purple-400 transition-colors"
          >
            Accedi
          </a>
          <a 
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 glow-effect inline-block"
          >
            Inizia Ora
          </a>
        </div>
      </div>
    </header>
  );
};
