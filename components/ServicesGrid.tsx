
import React from 'react';
import { SERVICES_DATA } from '../constants';

const ServicesGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {SERVICES_DATA.map((service, index) => (
        <div 
          key={index} 
          className="bg-[#6B21A8] hover:bg-[#5B1A8E] text-white p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden flex flex-col min-h-[220px]"
        >
          <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
            {service.icon}
          </div>
          
          <h3 className="text-xl font-bold mb-4">{service.title}</h3>
          
          {service.description && (
            <p className="text-sm opacity-80 leading-relaxed">{service.description}</p>
          )}
          
          {service.bullets && (
            <ul className="text-sm space-y-1 opacity-80 list-disc list-inside">
              {service.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}

          <div className="mt-auto pt-6 flex justify-end">
             <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
             </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
