// src/components/Footer.tsx

import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom'; // Importujemy Link do routingu

const Footer = () => {

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Strona Główna', sectionId: 'hero' },
    { label: 'Oferta', sectionId: 'oferta' },
    { label: 'Galeria', sectionId: 'galeria' },
    { label: 'Opinie', sectionId: 'opinie' },
  ];

  return (
    <footer className="bg-gray-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          
          <div className="space-y-4 text-center md:text-left">
            {/* ZMIANA: Dodany <button> do logo, aby przewijało do góry */}
            <button onClick={() => scrollToSection('hero')} className="inline-block">
              <h3 className="font-serif text-3xl font-bold text-white">
                Szafir<span className="text-szafir">Bystra</span>
              </h3>
            </button>
            <p className="font-sans text-lg text-szafir opacity-80 italic">
              Miejsce, gdzie zaczynają się wspomnienia.
            </p>
            <p className="font-sans text-sm text-white opacity-60 leading-relaxed">
              Nowoczesny obiekt w malowniczej scenerii, stworzony z pasją do celebracji najważniejszych chwil w życiu.
            </p>
          </div>
          
          <div className="space-y-4 text-center">
            <h4 className="font-sans text-xl font-semibold text-white">Nawigacja</h4>
            <nav className="space-y-2">
              {navLinks.map(link => (
                <button 
                  key={link.sectionId} 
                  onClick={() => scrollToSection(link.sectionId)} 
                  className="block w-full font-sans text-white opacity-80 hover:text-szafir hover:opacity-100 transition-all duration-300">
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="space-y-4 text-center">
            <h4 className="font-sans text-xl font-semibold text-white">Informacje Kontaktowe</h4>
            <div className="space-y-3 flex flex-col items-center">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-szafir flex-shrink-0" />
                <p className="font-sans text-sm text-white opacity-80">
                  Bystra 430, <br /> 38-300 Gorlice
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-szafir flex-shrink-0" />
                <a href="tel:573161822" className="font-sans text-sm text-white opacity-80 hover:text-szafir transition-colors duration-300">
                  573 161 822
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-szafir flex-shrink-0" />
                <a href="mailto:kontakt@szafirbystra.pl" className="font-sans text-sm text-white opacity-80 hover:text-szafir transition-colors duration-300">
                  kontakt@szafirbystra.pl
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-szafir/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-sans text-sm text-white opacity-60 text-center md:text-left">
            © 2025 Szafir Bystra. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6">
            {/* ZMIANA: Link do polityki prywatności i usunięty Regulamin */}
            <Link to="/polityka-prywatnosci" className="font-sans text-sm text-white opacity-60 hover:text-szafir hover:opacity-100 transition-all duration-300">
              Polityka Prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;