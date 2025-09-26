// src/components/ContactSection.tsx
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === 'accepted') {
      setShowMap(true);
    }
  }, []);

  const handleRequestConsent = () => {
    localStorage.removeItem('cookie_consent');
    window.dispatchEvent(new CustomEvent('show_cookie_banner'));
  };

  const phoneNumber = "573 161 822";
  const email = "szafirbystra@gmail.com";
  const address = "Bystra 430, 38-300 Gorlice";

  return (
    <section id="kontakt" className="pt-16 pb-24 md:pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6 font-bold">
            Twoje wymarzone <span className="text-szafir">przyjęcie</span>
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Masz pytania lub chcesz zarezerwować termin? Jesteśmy do Twojej dyspozycji. 
            Porozmawiajmy o tym, jak uczynić Twój dzień niezapomnianym.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">
          <div className="flex flex-col space-y-6 lg:space-y-0 lg:justify-between">
            
            {/* ZMIANA: Znacznik <a> zamieniony na <div> */}
            <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded-2xl group hover:bg-szafir/10 transition-colors duration-300 border border-gray-200">
              <div className="bg-szafir/20 p-4 rounded-xl group-hover:bg-szafir transition-colors duration-300">
                <Phone className="w-8 h-8 text-szafir group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="font-sans text-gray-900 font-semibold text-xl">Zadzwoń do nas</p>
                <p className="font-sans text-gray-600 text-lg">{phoneNumber}</p>
              </div>
            </div>
            
            {/* ZMIANA: Znacznik <a> zamieniony na <div> */}
            <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded-2xl group hover:bg-szafir/10 transition-colors duration-300 border border-gray-200">
              <div className="bg-szafir/20 p-4 rounded-xl group-hover:bg-szafir transition-colors duration-300">
                <Mail className="w-8 h-8 text-szafir group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="font-sans text-gray-900 font-semibold text-xl">Napisz e-mail</p>
                <p className="font-sans text-gray-600 text-lg">{email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="bg-szafir/20 p-4 rounded-xl">
                <MapPin className="w-8 h-8 text-szafir" />
              </div>
              <div>
                <p className="font-sans text-gray-900 font-semibold text-xl">Odwiedź nas</p>
                <p className="font-sans text-gray-600 text-lg">{address}</p>
              </div>
            </div>
          </div>
          
          <div className="w-full h-96 lg:h-full min-h-[450px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 flex items-center justify-center bg-gray-100">
            {showMap ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.472251357639!2d21.20696987691685!3d49.6896244406198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473db93a45953eab%3A0x8035787824d55716!2sBystra%20430%2C%2038-300%20Bystra!5e0!3m2!1spl!2spl!4v1727090518880!5m2!1spl!2spl&t=k"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <div className="text-center text-gray-500 px-4">
                <h3 className="font-semibold text-lg mb-2">Mapa dojazdu jest ukryta</h3>
                <p className="text-sm mb-4">Aby ją zobaczyć, potrzebujemy Twojej zgody na pliki cookies.</p>
                <button 
                  onClick={handleRequestConsent}
                  className="bg-szafir hover:bg-szafir-light text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors"
                >
                  Zarządzaj zgodą
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;