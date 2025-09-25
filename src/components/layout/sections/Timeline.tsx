import { timelineData } from '../../data/timeline';

const statusLabels = {
  completed: 'ZREALIZOWANE',
  'in-progress': 'W TRAKCIE',
  planned: 'PLANOWO'
};

const statusStyles = {
  completed: 'bg-black text-white',
  'in-progress': 'bg-yellow-400 text-black',
  planned: 'bg-gray-200 text-gray-700'
};

export const Timeline = () => {
  return (
    <section className="px-6 md:px-12 py-16 bg-gray-50" id="harmonogram">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
          Harmonogram budowy
        </h2>
        
        <div className="space-y-8">
          {timelineData.map((stage, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start pb-8 border-b border-gray-200 last:border-0"
            >
              {/* Stage Number */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {stage.title}
                </h3>
              </div>
              
              {/* Stage Details */}
              <div>
                <p className="font-medium mb-3">{stage.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {stage.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Status and Period */}
              <div className="text-left md:text-right">
                <span className={`inline-block px-4 py-1 text-xs font-bold uppercase tracking-wide mb-2 ${statusStyles[stage.status]}`}>
                  {statusLabels[stage.status]}
                </span>
                <p className="text-sm font-medium text-gray-700">{stage.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};