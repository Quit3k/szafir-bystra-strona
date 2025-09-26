// src/components/HeroSection.tsx

import { AlertTriangle } from 'lucide-react'; 
import heroImage from '../assets/szafir.png';

const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="bg-white min-h-screen flex items-center overflow-x-hidden pt-24 lg:pt-0">
      <div className="w-full mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-4 xl:gap-8 2xl:gap-16 items-center">
          
          <div className="relative transform lg:translate-x-8 block order-1 lg:order-2 w-full px-4 lg:px-0 lg:w-[70%]">
            <img
              src={heroImage}
              alt="Elegancka sala balowa Szafir Bystra przygotowana na wesele"
              className="w-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="hidden lg:flex absolute -bottom-8 -left-8 bg-white p-4 xl:p-6 rounded-xl shadow-lg z-10 items-center space-x-4">
              <div className="w-10 h-10 xl:w-12 xl:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 xl:w-6 xl:h-6 text-white" />
              </div>
              <div>
                <div className="font-sans text-base xl:text-lg font-bold text-gray-900 leading-tight">
                  Możliwość wynajęcia z własnym cateringiem!
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="text-center lg:text-left px-4 sm:px-6 lg:pl-8 lg:max-w-md xl:max-w-xl 2xl:max-w-2xl transform lg:-translate-x-8">
              
              <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-[2.5rem] xl:text-[3.2rem] 2xl:text-clamp-6xl text-gray-900 leading-tight">
                Twoje Przyjęcie
              </h1>

              <p className="mt-2 lg:mt-3 font-sans text-xl md:text-2xl lg:text-[1.25rem] xl:text-[1.6rem] 2xl:text-clamp-3xl text-szafir font-bold">
                w malowniczej scenerii Beskidów.
              </p>
              
              <p className="hidden lg:block mt-6 font-sans text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed">
                Odkryj nasze nowoczesne, eleganckie sale, doskonałą polską kuchnię i profesjonalną obsługę, które razem stworzą niezapomnianą atmosferę Twojej uroczystości.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToOffer}
                  className="bg-szafir hover:bg-szafir-light text-white font-sans font-semibold px-6 py-3 xl:px-8 xl:py-4 rounded-full text-base xl:text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  Zobacz Ofertę
                </button>
                <button
                  onClick={scrollToContact}
                  className="border-2 border-szafir text-szafir hover:bg-szafir hover:text-white font-sans font-semibold px-6 py-3 xl:px-8 xl:py-4 rounded-full text-base xl:text-lg transition-all duration-300"
                >
                  <span>Zarezerwuj Termin</span>
                </button>
              </div>
              
              <div className="hidden lg:grid grid-cols-3 gap-6 pt-6 mt-10 border-t border-gray-200">
                <div className="text-center">
                  <div className="font-sans text-2xl xl:text-3xl 2xl:text-4xl text-szafir font-bold">280</div>
                  <div className="font-sans text-sm text-gray-600">Miejsc dla Gości</div>
                </div>
                <div className="text-center">
                  <div className="font-sans text-2xl xl:text-3xl 2xl:text-4xl text-szafir font-bold">2</div>
                  <div className="font-sans text-sm text-gray-600">Nowoczesne Sale</div>
                </div>
                <div className="text-center">
                  <div className="font-sans text-2xl xl:text-3xl 2xl:text-4xl text-szafir font-bold">25</div>
                  <div className="font-sans text-sm text-gray-600">Miejsc Noclegowych</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;