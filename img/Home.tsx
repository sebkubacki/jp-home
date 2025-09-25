  import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 md:px-12">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold text-sm">
            JP
          </div>
          <span className="text-xs text-gray-600 transform -rotate-90 origin-left ml-4">ARCHITEKTURA</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/o-nas" className="text-sm text-gray-800 hover:text-black">O nas</Link>
          <Link to="/inwestycje" className="text-sm text-gray-800 hover:text-black">Inwestycje</Link>
          <Link to="/kontakt" className="text-sm text-gray-800 hover:text-black">Kontakt</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="/img/hero-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Hero Video - Architectural work</span>
          </div>
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Hero Text Overlay */}
        <div className="absolute inset-0 flex items-center px-6 md:px-12 z-10">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-title font-light leading-tight mb-4">
              Gdzie marzenia<br />
              spotykają się<br />
              z profesjonalizmem
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-12 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-16">O nas</h2>
          
          {/* Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img src="/img/icon1.svg" alt="" />
              </div>
              <p className="text-sm text-gray-600">
                Świetna lokalizacja blisko<br />
                terenów zielonych
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <img src="/img/icon2.svg" alt="" />
              </div>
              <p className="text-sm text-gray-600">
                Łatwy dostęp<br />
                do centrum miasta
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <img src="/img/icon3.svg" alt="" />
              </div>
              <p className="text-sm text-gray-600">
                Dopracowany projekt<br />
                i wykonanie w terminie
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img src="/img/icon1.svg" alt="" />
              </div>
              <p className="text-sm text-gray-600">
                Profesjonalny<br />
                zespół
              </p>
            </div>
          </div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Nasza firma specjalizuje się w budowie kameralnych osiedli mieszkaniowych. Każdy nasz projekt charakteryzuje się nowoczesną architekturą z myślą o funkcjonalności i komforcie użytkowania. Wierzymy, że dom to coś więcej niż cztery ściany - to przestrzeń, w której rodzą się wspomnienia i buduje relacje.
              </p>
              
              <p className="text-gray-600 mb-8">
                Stawiamy na jakość, estetykę i funkcjonalność. Każdy z naszych osiedli projektujemy z myślą o harmonii z otoczeniem, zapewniając mieszkańcom prywatność, bezpieczeństwo i komfort. Wykorzystujemy sprawdzone technologie oraz materiały najwyższej klasy, aby nasze realizacje były trwałe i przyjazne dla środowiska. Dzięki doświadczeniu i pasji do szczegółów tworzymy miejsca, które stają się domem na lata.
              </p>
              
              <button className="bg-black text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors">
                SKONTAKTUJ SIĘ Z NAMI
              </button>
            </div>
            
            <div className="w-full h-80 flex items-center justify-center object-cover>">
              <img src="/img/icon1.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Investments Section */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-12">Inwestycje</h2>
          
          {/* Investment Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-8 border-b">
              <button className="pb-2 border-b-2 border-black text-sm font-medium">W SPRZEDAŻY</button>
              <button className="pb-2 text-sm text-gray-500 hover:text-black">ZREALIZOWANE</button>
              <button className="pb-2 text-sm text-gray-500 hover:text-black">PLANOWANE</button>
            </div>
          </div>

          {/* Investment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="w-full h-64 bg-gray-200 mb-4 relative overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center text-gray-500">Project Image 1</span>
                <div className="absolute top-4 left-4 w-8 h-8 bg-white bg-opacity-80 flex items-center justify-center">
                  <span className="text-xs">🏠</span>
                </div>
              </div>
              <Link 
                to="/projekt-kameralna"
                className="inline-block border border-gray-300 px-6 py-2 text-sm hover:bg-gray-50 transition-colors"
              >
                ZOBACZ WIĘCEJ
              </Link>
            </div>

            <div className="group cursor-pointer">
              <div className="w-full h-64 bg-gray-300 mb-4 relative overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center text-gray-500">Project Image 2</span>
                <div className="absolute top-4 left-4 w-8 h-8 bg-white bg-opacity-80 flex items-center justify-center">
                  <span className="text-xs">🏢</span>
                </div>
              </div>
              <button className="border border-gray-300 px-6 py-2 text-sm hover:bg-gray-50 transition-colors">
                ZOBACZ WIĘCEJ
              </button>
            </div>

            <div className="group cursor-pointer">
              <div className="w-full h-64 bg-gray-400 mb-4 relative overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center text-gray-500">Project Image 3</span>
                <div className="absolute top-4 left-4 w-8 h-8 bg-white bg-opacity-80 flex items-center justify-center">
                  <span className="text-xs">🏘️</span>
                </div>
              </div>
              <button className="border border-gray-300 px-6 py-2 text-sm hover:bg-gray-50 transition-colors">
                ZOBACZ WIĘCEJ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-12">Kontakt</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Dział projektowy i sprzedaży</h3>
                <p className="text-gray-600 mb-2">Philipp Patryja</p>
                <p className="text-gray-600 mb-2">p.patryja@jp-home.pl</p>
                <p className="text-gray-600">(+48) 607 973 100</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Dział budowy i techniczny</h3>
                <p className="text-gray-600 mb-2">Krzysztof Janisz</p>
                <p className="text-gray-600 mb-2">j.janisz@jp-home.pl</p>
                <p className="text-gray-600">(+48) 506 127 943</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-medium mb-6">Skontaktuj się z nami</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Imię i nazwisko"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:border-black"
                />
                <input
                  type="email"
                  placeholder="Adres e-mail"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:border-black"
                />
                <input
                  type="tel"
                  placeholder="Telefon"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:border-black"
                />
                <textarea
                  placeholder="Wiadomość"
                  rows={4}
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:border-black resize-none"
                ></textarea>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1"
                  />
                  <label htmlFor="privacy" className="text-xs text-gray-600">
                    Akceptuję Politykę Prywatności i wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych w procesie składania kontaktowego.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors"
                >
                  WYŚLIJ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 bg-white border-t">
        <div className="text-xs text-gray-500 max-w-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </footer>
    </div>
  );
}

export default Home;