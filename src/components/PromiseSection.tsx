// src/components/PromiseSection.tsx

import { ArrowRight } from 'lucide-react';
import image1 from '../assets/szafir7.png';
import image2 from '../assets/szafir8.png';

const PromiseSection = () => {
  
  const steps = [
    {
      number: "01",
      title: "Kontakt i Rezerwacja Terminu",
      description: "Zadzwoń lub napisz do nas, aby sprawdzić dostępność sali w Twoim wymarzonym terminie. Odpowiemy na wszystkie pytania i dokonamy wstępnej rezerwacji."
    },
    {
      number: "02",
      title: "Degustacja i Ustalenie Menu",
      description: "Zaprosimy Cię na degustację naszych dań. Dopracujemy razem każdy szczegół menu, aranżację sali i harmonogram, aby ten dzień był dokładnie taki, jak sobie wymarzyłeś."
    },
    {
      number: "03",
      title: "Perfekcyjna Realizacja",
      description: "W dniu przyjęcia po prostu ciesz się chwilą z najbliższymi. Nasz doświadczony zespół zadba o wszystko – od wyśmienitej kuchni po profesjonalną obsługę."
    }
  ];

  const scrollToGallery = () => {
    document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // ZMIANA: Zamiast py-24, używamy responsywnego paddingu z niemal zerowym odstępem na górze
    <section id="oferta" className="pt-4 pb-24 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:pl-4 lg:pr-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6">
            Organizacja przyjęcia <span className="text-szafir">krok po kroku</span>
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Twój wymarzony dzień w trzech prostych krokach.
          </p>
        </div>
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative w-full order-2 lg:order-1">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-szafir/30"></div>
            
            <div className="space-y-16 pl-0">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-5">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center bg-white relative">
                      <span className="font-serif text-5xl text-szafir">{step.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-gray-900 mb-3">{step.title}</h3>
                    <p className="font-sans text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full flex flex-col items-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm h-80">
              <img 
                src={image1} 
                alt="Pięknie udekorowany stół w sali Szafir" 
                className="absolute top-0 left-0 w-4/5 h-auto object-cover rounded-2xl shadow-xl transform -rotate-6 hover:rotate-0 hover:scale-105 transition-transform duration-300"
              />
              <img 
                src={image2} 
                alt="Para młoda podczas pierwszego tańca w Szafir Bystra" 
                className="absolute top-1/2 right-0 w-4/5 h-auto object-cover rounded-2xl shadow-xl z-10 transform rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <button 
                onClick={scrollToGallery}
                className="hidden lg:flex font-serif text-xl text-gray-800 hover:text-szafir transition-colors duration-300 group mt-12 mb-6 items-center space-x-2"
            >
              <span>Zobacz nasze realizacje</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            <button
              onClick={scrollToContact}
              className="hidden lg:block bg-szafir hover:bg-szafir-light text-white font-sans font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Zarezerwuj Termin
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-center lg:hidden">
            <button
              onClick={scrollToContact}
              className="bg-szafir hover:bg-szafir-light text-white font-sans font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Zarezerwuj Termin
            </button>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;