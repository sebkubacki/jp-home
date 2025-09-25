import { groundFloor, firstFloor } from '../../../data/floorPlans';
import { FloorPlan } from '../../../types';

const FloorPlanCard = ({ plan }: { plan: FloorPlan }) => (
  <div>
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-4">{plan.title}</h3>
      <ul className="text-sm space-y-1">
        {plan.rooms.map((room, i) => (
          <li key={i} className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <span>{room.name} - {room.area} m²</span>
          </li>
        ))}
      </ul>
      {plan.totalArea && (
        <p className="text-sm font-semibold mt-4">
          Razem: {plan.totalArea} m²
        </p>
      )}
    </div>
    <div className="w-full h-80 bg-gray-100 border-2 border-gray-300 flex items-center justify-center">
      <span className="text-gray-500">Rzut {plan.title.includes('parter') ? 'parteru' : 'piętra'}</span>
    </div>
  </div>
);

export const FloorPlans = () => {
  return (
    <section className="px-6 md:px-12 py-16" id="rzut-mieszkan">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
          Rzut mieszkań
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FloorPlanCard plan={groundFloor} />
          <FloorPlanCard plan={firstFloor} />
        </div>
      </div>
    </section>
  );
};