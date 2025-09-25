export const Hero = () => {
    return (
      <section className="px-6 md:px-12 py-20 md:py-32 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
                Prosto.<br />
                Funkcjonalnie.<br />
                Dla Ciebie.
              </h1>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              {/* Zamień '/images/hero-logo.png' na swoją ścieżkę */}
              <img 
                src="/images/hero-logo.png" 
                alt="Osiedle logo"
                className="w-32 h-32 md:w-48 md:h-48 object-contain"
                onError={(e) => {
                  // Fallback jeśli obrazek nie załaduje się
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="w-32 h-32 bg-gray-100 flex items-center justify-center">
                      <div class="grid grid-cols-3 gap-1">
                        ${Array.from({ length: 9 }).map(() => 
                          '<div class="w-3 h-3 border border-gray-400"></div>'
                        ).join('')}
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  };