import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  '/images/project-1.jpg',
  '/images/project-2.jpg',
  '/images/project-3.jpg',
];

// Fallback images z Unsplash
const fallbackImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
];

export const ImageCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<boolean[]>([false, false, false]);
  
  const totalSlides = carouselImages.length;

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  return (
    <section className="px-6 md:px-12 mb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              Kameralna skala zabudowy
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nasza propozycja to kameralna, spokojnie usytuowana zabudowa mieszkaniowa 
              w formie szeregowców. Każdy dom ma ogródek, taras oraz miejsce parkingowe 
              w ramach działki. W sumie będzie 15 domów, na działce o powierzchni 1,5 ha.
            </p>
            
            <div className="flex space-x-4">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-black transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-black transition-all"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Slide indicator */}
            <div className="flex space-x-2 mt-4">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1 w-8 rounded transition-all ${
                    i === activeSlide ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[0, 1].map((index) => (
              <img
                key={index}
                src={imageErrors[index] ? fallbackImages[index] : carouselImages[index]}
                alt={`Projekt ${index + 1}`}
                className="w-full h-48 object-cover"
                onError={() => handleImageError(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};