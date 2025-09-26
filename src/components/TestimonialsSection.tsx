// src/components/TestimonialsSection.tsx

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<number | null>(null);

  const testimonials = [
    { id: 1, quote: "Od pierwszego spotkania czuliśmy, że jesteśmy w dobrych rękach. Pani menadżer doradziła nam na każdym etapie, a możliwość zorganizowania własnego cateringu była dla nas kluczowa. Elastyczność i profesjonalizm!", names: "Joanna i Maciej", date: "17 czerwca 2023" },
    { id: 2, quote: "To miejsce jest magiczne! Malownicza okolica, przepiękna, nowoczesna sala i jedzenie, które goście wspominają do dziś. Dziękujemy całej ekipie Szafir Bystra za stworzenie naszego wymarzonego wesela.", names: "Karolina i Szymon", date: "12 sierpnia 2023" },
    { id: 3, quote: "Szukaliśmy miejsca, które pomieści naszą dużą rodzinę i zapewni nocleg. Szafir był strzałem w dziesiątkę. Komfortowe pokoje, ogromny parking i przepyszne śniadanie następnego dnia. Polecamy!", names: "Ewelina i Grzegorz", date: "18 maja 2024" },
    { id: 4, quote: "Obsługa na najwyższym, światowym poziomie. Kelnerzy byli dyskretni, uprzejmi i doskonale zorganizowani. Wszystko przebiegło bez najmniejszego problemu. Czuliśmy się jak w pięciogwiazdkowym hotelu.", names: "Dominika i Michał", date: "20 lipca 2024" },
    { id: 5, quote: "Perfekcja w każdym calu. Od dekoracji sali, przez oświetlenie, aż po smak tortu weselnego. W Szafir Bystra naprawdę dbają o detale, które tworzą niezapomnianą atmosferę. Dziękujemy!", names: "Natalia i Bartłomiej", date: "31 sierpnia 2024" },
    { id: 6, quote: "Nasze wesele było dokładnie takie, jak sobie wymarzyliśmy. Piękne, eleganckie i bezstresowe. To najlepsze miejsce na organizację przyjęcia w regionie. Wrócimy tu na pewno przy okazji chrztu!", names: "Alicja i Daniel", date: "28 września 2024" }
  ];

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isDesktop) return;
    const handleScroll = () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = window.setTimeout(() => {
        const cardWidth = container.children[0].clientWidth;
        const gap = 32;
        const newIndex = Math.round(container.scrollLeft / (cardWidth + gap));
        setCurrentIndex(newIndex);
      }, 100);
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  const scrollToTestimonial = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (card) {
        container.scrollTo({
            left: card.offsetLeft - container.offsetLeft,
            behavior: 'smooth'
        });
    }
    setCurrentIndex(index);
  };
  
  const lastValidIndex = isDesktop ? testimonials.length - 3 : testimonials.length - 1;

  const nextTestimonial = () => {
    const newIndex = currentIndex >= lastValidIndex ? 0 : currentIndex + 1;
    scrollToTestimonial(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex = currentIndex === 0 ? lastValidIndex : currentIndex - 1;
    scrollToTestimonial(newIndex);
  };
  
  const numDots = isDesktop ? testimonials.length - 2 : testimonials.length;

  return (
    // ZMIANA: Zamiast py-24, używamy responsywnego paddingu
    <section id="opinie" className="pt-16 pb-24 md:pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6 font-bold">
            Historie Naszych <span className="text-szafir">Gości</span>
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Prawdziwe wspomnienia, które mówią same za siebie. Zobacz, dlaczego nam zaufano.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex space-x-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar p-4 -m-4"
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="flex-shrink-0 w-[90%] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] snap-center bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col p-8"
                >
                  <div className="flex flex-col flex-grow">
                    <Quote className="w-10 h-10 text-szafir mb-4" />
                    <blockquote className="font-sans text-gray-700 leading-relaxed mb-6 flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    <footer className="text-right">
                      <cite className="font-sans text-xl font-semibold text-gray-800 not-italic">
                        — {testimonial.names}
                      </cite>
                      <p className="font-sans text-sm text-gray-500 mt-1">
                        {testimonial.date}
                      </p>
                    </footer>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="hidden lg:block absolute left-[-1rem] top-1/2 -translate-y-1/2 bg-white hover:bg-szafir text-szafir hover:text-white rounded-full p-3 transition-all duration-300 shadow-lg border border-szafir z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="hidden lg:block absolute right-[-1rem] top-1/2 -translate-y-1/2 bg-white hover:bg-szafir text-szafir hover:text-white rounded-full p-3 transition-all duration-300 shadow-lg border border-szafir z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-12 space-x-3">
          {[...Array(numDots)].map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-szafir' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;