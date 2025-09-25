import { Button } from '../../ui/Button';

export const CustomSolutions = () => {
  return (
    <section className="px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full h-80 bg-gray-200 order-2 lg:order-1"></div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-light mb-6">
              Wykończenia dopasowane do Twoich potrzeb
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Oferujemy różne standardy wykończenia - od stanu deweloperskiego, po 
              gotowe do zamieszkania. Każdy dom może być dostosowany do indywidualnych 
              potrzeb i budżetu klienta.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Współpracujemy z renomowanymi dostawcami materiałów wykończeniowych. 
              Dzięki temu możemy zaoferować konkurencyjne ceny przy zachowaniu 
              najwyższej jakości.
            </p>
            
            <Button variant="primary">
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};