export const MainImage = () => {
    return (
      <section className="px-6 md:px-12 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <img 
              src="/images/main-building.jpg"
              alt="Osiedle Pszczelarska - wizualizacja"
              className="w-full h-64 md:h-96 object-cover"
              onError={(e) => {
                // Fallback - placeholder z Unsplash
                e.currentTarget.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80';
              }}
            />
            
            {/* Overlay info box */}
            <div className="absolute top-4 right-4 bg-white p-6 shadow-lg max-w-xs">
              <h3 className="font-semibold text-lg mb-3">Kameralna skala zabudowy</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nasza propozycja to kameralna, spokojnie usytuowana zabudowa mieszkaniowa 
                w formie szeregowców. Każdy dom ma ogródek, taras oraz miejsce parkingowe.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };