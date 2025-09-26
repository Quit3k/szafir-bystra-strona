// src/components/GallerySection.tsx

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// ZMIANA: Import nowych zdjęć
import image11 from '../assets/szafir11.png';
import image12 from '../assets/szafir12.png';
import image13 from '../assets/szafir13.png';
import image14 from '../assets/szafir14.png';
import image15 from '../assets/szafir15.png';
import image16 from '../assets/szafir16.png';
import image17 from '../assets/szafir17.png';
import image18 from '../assets/szafir18.png';
import image19 from '../assets/szafir19.png';


// ZMIANA: Uproszczona struktura danych, tylko obrazek i alt tag
const galleryItems = [
  { image: image11, alt: 'Sala balowa Szafir Bystra' },
  { image: image12, alt: 'Dekoracja stołu weselnego' },
  { image: image13, alt: 'Taniec pary młodej' },
  { image: image14, alt: 'Widok na salę z antresoli' },
  { image: image15, alt: 'Eleganckie nakrycia dla gości' },
  { image: image16, alt: 'Bufet z przekąskami' },
  { image: image17, alt: 'Ogród przy sali weselnej' },
  { image: image18, alt: 'Detal dekoracji kwiatowej' },
  { image: image19, alt: 'Wieczorne oświetlenie sali' },
];

const INITIAL_VISIBLE_IMAGES = 6;

const GallerySection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_IMAGES);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    if (window.innerWidth < 768) return; 
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const goToPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  const handleLoadMore = () => setVisibleCount(galleryItems.length);

  const imagesToShow = galleryItems.slice(0, visibleCount);

  return (
    <>
      {/* ZMIANA: ID sekcji */}
      <section id="galeria" className="py-24 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            {/* ZMIANA: Teksty i kolor */}
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900">
              Nasze <span className="text-szafir">Realizacje</span>
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Zobacz, jak marzenia o idealnym przyjęciu stają się rzeczywistością.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {imagesToShow.map((item, index) => (
              <div 
                key={index} 
                className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300"></div>
                </div>
                {/* ZMIANA: Usunięta sekcja z tytułem i opisem pod zdjęciem */}
              </div>
            ))}
          </div>
          
          {visibleCount < galleryItems.length && (
            <div className="text-center mt-12">
              {/* ZMIANA: Kolor przycisku */}
              <button onClick={handleLoadMore} className="bg-szafir hover:bg-szafir-light text-white font-sans font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                Pokaż więcej zdjęć
              </button>
            </div>
          )}
        </div>
      </section>

      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm" onClick={closeLightbox}>
          {/* ZMIANA: Kolor przycisku */}
          <button className="absolute top-6 right-6 text-white hover:text-szafir transition-colors z-50" onClick={closeLightbox}>
            <X size={40} />
          </button>
          
          {/* ZMIANA: Kolor strzałek */}
          <button className="absolute left-4 md:left-8 text-white hover:text-szafir transition-colors z-50 p-2" onClick={goToPrev}>
            <ChevronLeft size={48} />
          </button>

          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryItems[selectedImageIndex].image} 
              alt={`Powiększenie: ${galleryItems[selectedImageIndex].alt}`} 
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          <button className="absolute right-4 md:right-8 text-white hover:text-szafir transition-colors z-50 p-2" onClick={goToNext}>
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </>
  );
};

export default GallerySection;