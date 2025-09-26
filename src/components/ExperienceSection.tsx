// src/components/ExperienceSection.tsx

// ZMIANA: Import nowych ikon
import { Sparkles, Award, UtensilsCrossed, Heart } from 'lucide-react';

const ExperienceSection = () => {
  // ZMIANA: Nowe, dopasowane cechy
  const features = [
    {
      icon: <UtensilsCrossed className="w-12 h-12 text-szafir" />,
      title: "Wyśmienita Kuchnia",
      description: "Serwujemy to, co najlepsze w polskiej kuchni, bazując na świeżych, lokalnych produktach, aby zachwycić podniebienia Państwa gości."
    },
    {
      icon: <Award className="w-12 h-12 text-szafir" />,
      title: "Perfekcyjna Obsługa",
      description: "Nasz profesjonalny i doświadczony zespół kelnerski dba o każdy detal, gwarantując płynny przebieg uroczystości i komfort wszystkich gości."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-szafir" />,
      title: "Eleganckie Wnętrza",
      description: "Nowoczesne, klimatyzowane i wszechstronne sale, które możemy w pełni dostosować do Państwa wizji idealnego przyjęcia."
    },
    {
      icon: <Heart className="w-12 h-12 text-szafir" />,
      title: "Piękna Lokalizacja",
      description: "Położenie w urokliwej miejscowości Bystra nadaje każdemu przyjęciu niepowtarzalnego klimatu i gwarantuje piękne wspomnienia."
    }
  ];

  return (
    // ZMIANA: ID sekcji i tło
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          {/* ZMIANA: Teksty i kolor */}
          <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6 font-bold">
            Każdy szczegół ma <span className="text-szafir">znaczenie</span>
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
            W Szafir Bystra nie tylko organizujemy przyjęcia – tworzymy niezapomniane doświadczenia, które stają się najcenniejszymi wspomnieniami.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              // ZMIANA: Kolor obramowania
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-szafir/30"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="font-sans text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;