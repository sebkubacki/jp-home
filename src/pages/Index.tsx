import { useState } from 'react';
import { Link } from 'react-router-dom';

function Index() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [expandedStage, setExpandedStage] = useState<string | null>(null);

  const slides = [
    { id: 1, title: "Kameralna skala zabudowy" },
    { id: 2, title: "Slide 2" },
    { id: 3, title: "Slide 3" }
  ];

  const timelineStages = [
    {
      step: "I",
      phase: "Działania przygotowawcze",
      details: ["Projekt budowlany", "Pozwolenie na budowę", "Projekt wykonawczy"],
      status: "ZREALIZOWANE",
      period: "wrzesień 2024 - październik 2024",
    },
    {
      step: "II",
      phase: "Prace ziemne i fundamenty",
      details: ["Wykopy", "Fundamenty", "Instalacje podziemne"],
      status: "WKRÓTCE",
      period: "październik 2024 - grudzień 2024",
    },
    {
      step: "III",
      phase: "Stan surowy zamknięty",
      details: ["Ściany", "Strop", "Dach"],
      status: "WKRÓTCE",
      period: "grudzień 2024 - marzec 2025",
    },
    {
      step: "IV",
      phase: "Prace instalacyjne, tynki, podłogi",
      details: ["Instalacje", "Tynki", "Podłogi"],
      status: "WKRÓTCE",
      period: "marzec 2025 - czerwiec 2025",
    },
    {
      step: "V",
      phase: "Wykończenie",
      details: ["Malowanie", "Armatura", "Zagospodarowanie terenu"],
      status: "WKRÓTCE",
      period: "czerwiec 2025 - sierpień 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between bg-white/95 px-6 shadow-sm backdrop-blur md:px-12">
        <Link to="/" className="flex items-center">
          <img src="/img/logo.svg" alt="JP Home - logo" className="h-10 w-auto" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/o-nas" className="text-sm text-gray-800 transition-colors duration-200 hover:text-red-600">O nas</Link>
          <Link to="/inwestycje" className="text-sm text-gray-800 transition-colors duration-200 hover:text-red-600">Inwestycje</Link>
          <Link to="/kontakt" className="text-sm text-gray-800 transition-colors duration-200 hover:text-red-600">Kontakt</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-6 md:py-6 md:min-h-[calc((100vh-80px)/2)] md:flex md:items-center">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-around w-full">
          <div className="flex flex-col justify-center text-center lg:text-left max-w-xl">
            <h1 className="text-4xl md:text-6xl font-title font-semibold leading-tight text-black">
              Prosto.<br />
              Funkcjonalnie.<br />
              Dla Ciebie.
            </h1>
          </div>
          
          <div className="flex items-center justify-center lg:justify-end">
            <img
              src="/img/logo-os.png"
              alt="Osiedle Pszczelarska - logotyp inwestycji"
              className="h-36 md:h-48 lg:h-56 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Main Building Image Section */}
      <section className="relative mb-16 px-0 md:px-0 md:min-h-[calc((100vh-80px)/2)] md:flex md:items-center py-6">
        <div className="relative w-full">
          <img
            src="/img/background-house.png"
            alt="Wizualizacja osiedla Pszczelarska"
            className="w-full h-auto object-contain"
          />

          <div className="mt-6 md:mt-0 md:absolute md:inset-y-0 md:right-12 md:flex md:items-center">
            <div className="bg-transparent p-6 md:p-8 lg:p-10 text-left md:max-w-lg lg:max-w-xl">
              <h3 className="text-2xl font-title font-semibold text-black mb-4">Twój dom,
              Twoja przestrzeń</h3>
              <p className="text-gray-700 leading-relaxed">
              Każdy lokal posiada własny ogródek – idealne miejsce na relaks, spotkania z bliskimi czy chwilę wytchnienia po pracy. Układ wnętrz został zaprojektowany tak, aby maksymalnie wykorzystać przestrzeń: funkcjonalny, wygodny i łatwy do aranżacji według Twojego stylu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="px-8 md:px-16 lg:px-24 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center">
          <div className="w-full max-w-sm flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-title font-semibold">Kameralna skala zabudowy</h2>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Nasze osiedle to zamknięta, ogrodzona przestrzeń, w której poczujesz prywatność i spokój. Składa się z pięciu budynków dwulokalowych – w sumie tylko 10 domów, co daje kameralny charakter i komfort codziennego życia.
            </p>

            <button
              onClick={() => setActiveSlide(Math.min(slides.length - 1, activeSlide + 1))}
              className="self-end"
              aria-label="Zobacz kolejny slajd"
            >
              <img src="/img/arrow.png" alt="Przejdź dalej" className="h-6 w-auto" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <img
              src="/img/project-osiedle-1.png"
              alt="Osiedle Pszczelarska - wizualizacja elewacji frontowej"
              className="w-full h-52 md:h-64 lg:h-72 object-contain"
            />
            <img
              src="/img/project-osiedle-2.png"
              alt="Osiedle Pszczelarska - widok na zabudowę z ogrodami"
              className="w-full h-52 md:h-64 lg:h-72 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Construction Timeline */}
      <section className="mb-16">
        <div className="px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl font-title font-light text-center mb-12">Harmonogram budowy</h2>
        </div>
        <div className="space-y-6">
          {timelineStages.map((stage) => {
            const isExpanded = expandedStage === stage.step;

            return (
              <div
                key={stage.step}
                className="bg-gray-100 py-8 px-6 md:px-12 lg:px-24 transition-colors duration-200"
              >
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() =>
                    setExpandedStage((current) => (current === stage.step ? null : stage.step))
                  }
                  className="w-full text-left"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                    <div className="md:w-1/3">
                      <span className="text-xs uppercase tracking-[0.4em] text-gray-400">Etap</span>
                      <p className="text-2xl font-title font-semibold text-black mt-1">Etap {stage.step}</p>
                    </div>

                    <div className="flex-1 md:flex md:items-center md:justify-center">
                      <p className="text-sm md:text-base font-title font-medium text-gray-800 text-center">
                        {stage.phase}
                      </p>
                    </div>

                    <div className="md:text-right flex flex-col items-start md:items-end gap-1">
                      <span className="block text-xs uppercase tracking-[0.4em] text-gray-500">
                        Status
                      </span>
                      <span className="block text-xs uppercase tracking-[0.4em] text-gray-500">
                        {stage.status}
                      </span>
                    </div>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-out ${isExpanded ? 'max-h-64 mt-6' : 'max-h-0'}`}
                >
                  <ul className="space-y-2 text-sm text-gray-600">
                    {stage.details.map((detail, index) => (
                      <li key={index} className="leading-relaxed">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mt-4">{stage.period}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Floor Plans */}
      <section className="px-6 md:px-12 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-title font-light text-center mb-12">Rzut mieszkań</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ground Floor */}
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-title font-medium mb-4">Powierzchnia użytkowa - parter</h3>
                <ul className="text-sm space-y-1">
                  <li>• Wiatrołap - 3,5 m²</li>
                  <li>• Hol + schody - 8,7 m²</li>
                  <li>• Salon + kuchnia - 35,1 m²</li>
                  <li>• WC - 1,8 m²</li>
                  <li>• Kotłownia - 5,2 m²</li>
                  <li>• Garaż - 18,0 m²</li>
                  <li>• Taras - 15,0 m²</li>
                </ul>
              </div>
              <div className="w-full h-80 bg-gray-100 border-2 border-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Rzut parteru</span>
              </div>
            </div>

            {/* First Floor */}
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-title font-medium mb-4">Powierzchnia użytkowa - piętro</h3>
                <ul className="text-sm space-y-1">
                  <li>• Hol - 6,8 m²</li>
                  <li>• Sypialnia - 14,3 m²</li>
                  <li>• Pokój - 11,2 m²</li>
                  <li>• Pokój - 9,8 m²</li>
                  <li>• Łazienka - 6,2 m²</li>
                  <li>• Garderoba - 3,1 m²</li>
                </ul>
                <p className="text-sm font-medium mt-4">Razem: 95,60 m²</p>
              </div>
              <div className="w-full h-80 bg-gray-100 border-2 border-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Rzut piętra</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="px-6 md:px-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full h-80 bg-gray-200"></div>
          
          <div>
            <h2 className="text-2xl font-title font-light mb-6">Wykończenia dopasowane do Twoich potrzeb</h2>
            <p className="text-gray-600 mb-6">
              Oferujemy różne standardy wykończenia - od stanu deweloperskiego, po gotowe do zamieszkania. Każdy dom może być dostosowany do indywidualnych potrzeb i budżetu klienta.
            </p>
            <p className="text-gray-600 mb-8">
              Współpracujemy z renomowanymi dostawcami materiałów wykończeniowych. Dzięki temu możemy zaoferować konkurencyjne ceny przy zachowaniu najwyższej jakości.
            </p>
            
            <button className="bg-black text-white px-8 py-3 text-sm uppercase tracking-wide transition-colors hover:bg-red-600">
              SKONTAKTUJ SIĘ Z NAMI
            </button>
          </div>
        </div>
      </section>

      {/* 3D Visualization */}
      <section className="px-6 md:px-12 mb-16">
        <div className="w-full h-96 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
          <span className="text-white text-lg">Wizualizacja 3D</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 bg-gray-50">
        <div className="text-xs text-gray-500 max-w-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </footer>
    </div>
  );
}

export default Index;
