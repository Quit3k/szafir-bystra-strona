// src/components/FAQSection.tsx

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Jakie rodzaje imprez można u Państwa zorganizować?",
      answer: "Specjalizujemy się w organizacji wesel, bankietów, konferencji i studniówek. Jesteśmy również idealnym miejscem na chrzciny, roczki, komunie oraz inne przyjęcia rodzinne. Nasze wszechstronne sale można dostosować do charakteru każdej uroczystości."
    },
    {
      question: "Czy jest możliwość skorzystania z własnego cateringu?",
      answer: "Tak, oczywiście. Chociaż słyniemy z wyśmienitej polskiej kuchni i lokalnych surowców, jesteśmy elastyczni. Umożliwiamy naszym klientom organizację imprezy z cateringiem zewnętrznym po wcześniejszym ustaleniu warunków."
    },
    {
      question: "Jaką liczbę gości mogą pomieścić sale?",
      answer: "Posiadamy dwie nowoczesne, klimatyzowane sale. Większa sala balowa może komfortowo pomieścić do 280 osób, natomiast mniejsza, bardziej kameralna, jest idealna na przyjęcia do 100 osób. Istnieje również możliwość ich połączenia."
    },
    {
      question: "Czy oferujecie Państwo miejsca noclegowe dla gości?",
      answer: "Tak, dysponujemy kameralnym hotelem z 25 miejscami noclegowymi. To wygodne rozwiązanie dla gości weselnych, szczególnie tych przyjeżdżających z daleka, którzy chcą odpocząć po udanej zabawie."
    },
    {
      question: "Jak wygląda kwestia parkingu?",
      answer: "Przy naszym obiekcie znajduje się duży, dwustrefowy parking, który bez problemu pomieści samochody wszystkich Państwa gości. Parking jest bezpłatny i monitorowany."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // ZMIANA: Zamiast py-24, używamy responsywnego paddingu
    <section id="info" className="pt-16 pb-24 md:pt-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6 font-bold">
            Pytania i <span className="text-szafir">Odpowiedzi</span>
          </h2>
          <p className="font-sans text-xl text-gray-600">
            Wszystko, co warto wiedzieć planując przyjęcie w Szafir Bystra.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="font-sans text-xl font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-szafir transition-transform duration-300" />
                  ) : (
                    <Plus className="w-6 h-6 text-szafir transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="font-sans text-gray-600 leading-relaxed border-t border-gray-200 pt-6 pb-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;