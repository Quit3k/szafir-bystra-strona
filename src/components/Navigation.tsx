// src/components/Navigation.tsx

import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
// ZMIANA: Importujemy narzędzia do nawigacji
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  
  // ZMIANA: Dodajemy hooki do śledzenia lokalizacji i do nawigacji
  const location = useLocation();
  const navigate = useNavigate();

  const phoneNumber = "573 161 822";
  const telLink = `tel:${phoneNumber.replace(/\s/g, '')}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ZMIANA: Ulepszona funkcja scrollToSection
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    // Sprawdzamy, czy jesteśmy na stronie głównej
    if (location.pathname === '/') {
      // Jeśli tak, po prostu przewijamy
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Jeśli nie, nawigujemy do strony głównej z "hashem" sekcji
      // To zmieni URL na np. /#oferta
      navigate(`/#${sectionId}`);
    }
  };

  // ZMIANA: Ten efekt obsługuje przewinięcie PO powrocie na stronę główną
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Używamy małego opóźnienia, aby dać stronie czas na wyrenderowanie sekcji
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);


  const handleCallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth >= 768) {
      e.preventDefault();
      setIsPhoneVisible(!isPhoneVisible);
    }
  };

  const navLinks = [
    { label: 'Strona Główna', sectionId: 'hero' },
    { label: 'Oferta', sectionId: 'oferta' },
    { label: 'Galeria', sectionId: 'galeria' },
    { label: 'Opinie', sectionId: 'opinie' },
    { label: 'Info', sectionId: 'info' },
    { label: 'Kontakt', sectionId: 'kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0">
            <h1 className="font-serif text-2xl text-gray-900 font-bold cursor-pointer" onClick={() => scrollToSection('hero')}>
              Szafir<span className="text-szafir">Bystra</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => scrollToSection(link.sectionId)}
                className="font-sans text-gray-800 hover:text-szafir transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={telLink}
              onClick={handleCallClick}
              className="hidden md:flex bg-szafir hover:bg-szafir-light text-white font-sans font-semibold px-6 py-3 rounded-full transition-all duration-300 items-center justify-center space-x-2 hover:shadow-lg"
              style={{ minWidth: '175px' }}
            >
              <Phone className="w-4 h-4" />
              <span>{isPhoneVisible ? phoneNumber : 'Zadzwoń'}</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-800 hover:text-szafir transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                 <button 
                    key={link.sectionId}
                    onClick={() => scrollToSection(link.sectionId)} 
                    className="block w-full text-center px-3 py-2 font-sans text-gray-800 hover:text-szafir hover:bg-gray-50 rounded-md transition-colors duration-300"
                  >
                  {link.label}
                </button>
              ))}
              <div className="border-t border-gray-100 my-2"></div>
              <a
                href={telLink}
                className="flex items-center justify-center space-x-2 w-full text-center px-3 py-3 font-sans font-semibold text-szafir bg-szafir/10 hover:bg-szafir/20 rounded-md transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Zadzwoń: {phoneNumber}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;