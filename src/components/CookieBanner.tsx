// src/components/CookieBanner.tsx

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ShieldCheck } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const handleShowBanner = () => setIsVisible(true);
    window.addEventListener('show_cookie_banner', handleShowBanner);
    return () => window.removeEventListener('show_cookie_banner', handleShowBanner);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
    if (window.location.pathname === '/') {
      window.location.reload();
    }
  };
  
  const handleCloseTemporarily = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    // ZMIANA: Zmniejszona siła blura i przezroczystość tła
    <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-50 flex items-end md:items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg relative transform animate-[fadeInUp_0.5s_ease-out_forwards]">
        
        <button 
          onClick={handleCloseTemporarily} 
          className="absolute top-3 right-3 p-1 text-gray-400 hover:text-gray-800 transition-colors"
          aria-label="Zamknij"
        >
          <X size={24} />
        </button>

        <div className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-szafir/10 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-szafir" />
            </div>
          </div>
          <h2 className="text-2xl font-bold font-serif text-gray-900 mb-2">Dbamy o Twoją prywatność</h2>
          <p className="text-gray-600 mb-6">
            Używamy plików cookies, aby zapewnić prawidłowe działanie strony, a w szczególności interaktywnej mapy dojazdu. Wybierz, czy zgadzasz się na ich użycie.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              to="/polityka-prywatnosci"
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-5 py-3 rounded-lg transition-colors text-center"
            >
              Dowiedz się więcej
            </Link>
            <button 
              onClick={handleAccept}
              className="w-full bg-szafir hover:bg-szafir-light text-white font-semibold px-5 py-3 rounded-lg transition-colors"
            >
              Akceptuję
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;