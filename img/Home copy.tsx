import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

function Home() {
  type Tab = 'sale' | 'completed' | 'planned';

  type ProjectBase = {
    id: string;
    image: string;
    alt: string;
    statuses: Tab[];
    badge: string;
  };

  type Project =
    | (ProjectBase & { ctaType: 'link'; ctaHref: string })
    | (ProjectBase & { ctaType: 'button' });

  const tabConfig: { id: Tab; label: string }[] = [
    { id: 'sale', label: 'W SPRZEDAŻY' },
    { id: 'completed', label: 'ZREALIZOWANE' },
    { id: 'planned', label: 'PLANOWANE' },
  ];

  const projects: Project[] = [
    {
      id: 'project-1',
      image: '/img/project-1.png',
      alt: 'Nowoczesne segmenty osiedla JP Home - widok z góry',
      statuses: ['sale', 'completed'] as Tab[],
      badge: 'W SPRZEDAŻY',
      ctaType: 'link' as const,
      ctaHref: '/projekt-kameralna',
    },
    {
      id: 'project-2',
      image: '/img/project-2.png',
      alt: 'Rząd domów szeregowych z białą elewacją i drewnianymi akcentami',
      statuses: ['sale', 'planned'] as Tab[],
      badge: 'W SPRZEDAŻY',
      ctaType: 'button' as const,
    },
    {
      id: 'project-3',
      image: '/img/project-3.png',
      alt: 'Dwukondygnacyjne domy z ogrodami w inwestycji JP Home',
      statuses: ['sale', 'planned'] as Tab[],
      badge: 'W SPRZEDAŻY',
      ctaType: 'button' as const,
    },
  ];

  const [activeTab, setActiveTab] = useState<Tab>('sale');
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimeoutRef = useRef<number | null>(null);

  const handleTabChange = (tab: Tab) => {
    if (tab === activeTab) return;

    if (animationTimeoutRef.current) {
      window.clearTimeout(animationTimeoutRef.current);
    }

    setIsAnimating(true);
    setActiveTab(tab);

    animationTimeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
      animationTimeoutRef.current = null;
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const visibleProjects = projects.filter((project) => {
    if (activeTab === 'sale') return true;
    return project.statuses.includes(activeTab);
  });

  const animationClasses = isAnimating
    ? 'opacity-0 translate-y-4'
    : 'opacity-100 translate-y-0';

  const investmentButtonClasses =
    'border border-gray-300 px-8 py-3 text-sm uppercase tracking-wide transition-colors duration-200 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2';

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const navbarOffset = 80;
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarOffset;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between bg-white/95 px-6 shadow-sm backdrop-blur md:px-12">
        <Link to="/" className="flex items-center">
          <img src="/img/logo.svg" alt="JP Home - logo" className="h-10 w-auto" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button
            type="button"
            className="text-sm text-gray-800 transition-colors duration-200 hover:text-red-600"
            onClick={() => scrollToSection('about')}
          >
            O nas
          </button>
          <button
            type="button"
            className="text-sm text-gray-800 transition-colors duration-200 hover:text-red-600"
            onClick={() => scrollToSection('investments')}
          >
            Inwestycje
          </button>
          <button
            type="button"
            className="text-sm text-gray-800 transition-colors duration-200 hover:text-red-600"
            onClick={() => scrollToSection('contact')}
          >
            Kontakt
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
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
      <section id="about" className="px-6 md:px-12 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-title font-light text-center mb-16">O nas</h2>
          
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
              
              <button className="bg-black text-white px-8 py-3 text-sm uppercase tracking-wide transition-colors hover:bg-red-600">
                SKONTAKTUJ SIĘ Z NAMI
              </button>
            </div>
            
            <div className="h-full flex items-center justify-center object-cover">
              <img
                src="/img/about-img.png"
                alt="Zespół JP Home pracujący nad dokumentacją projektową"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investments Section */}
      <section id="investments" className="px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-title font-light text-center mb-6">Inwestycje</h2>

          {/* Investment Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-8 border-b">
              {tabConfig.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabChange(tab.id)}
                    className={`pb-3 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'border-b-2 border-red-600 text-red-600'
                        : 'border-b-2 border-transparent text-gray-500 hover:text-red-600'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Investment Grid */}
          <div
            className={`flex flex-col items-center gap-8 transition-all duration-300 ease-out md:flex-row md:flex-wrap md:justify-center ${animationClasses}`}
          >
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer flex w-full max-w-md flex-col items-center gap-4 text-center md:w-80"
              >
                <div className="w-full h-72 md:h-80 mb-2 relative overflow-hidden rounded-lg shadow-sm">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 text-xs font-sans tracking-wide uppercase">
                    {project.badge}
                  </div>
                </div>

                {project.ctaType === 'link' ? (
                  <Link to={project.ctaHref} className={investmentButtonClasses}>
                    ZOBACZ WIĘCEJ
                  </Link>
                ) : (
                  <button type="button" className={investmentButtonClasses}>
                    ZOBACZ WIĘCEJ
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-12 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-title font-light text-center mb-12">Kontakt</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-title font-medium mb-4">Dział projektowy i sprzedaży</h3>
                <p className="text-gray-600 mb-2">Philipp Patryja</p>
                <p className="text-gray-600 mb-2">p.patryja@jp-home.pl</p>
                <p className="text-gray-600">(+48) 607 973 100</p>
              </div>
              
              <div>
                <h3 className="text-xl font-title font-medium mb-4">Dział budowy i techniczny</h3>
                <p className="text-gray-600 mb-2">Krzysztof Janisz</p>
                <p className="text-gray-600 mb-2">j.janisz@jp-home.pl</p>
                <p className="text-gray-600">(+48) 506 127 943</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-title font-medium mb-6">Skontaktuj się z nami</h3>
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
                  className="bg-black text-white px-8 py-3 text-sm uppercase tracking-wide transition-colors hover:bg-red-600"
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
