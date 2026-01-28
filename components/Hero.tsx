
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <span className="text-crimson-text font-medium text-sm border-l-2 border-crimson-text pl-3">Notre Ambition</span>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#111827] mt-4 mb-6 leading-tight">
            Cartographie intelligente pour un <span className="text-[#BE123C]">Maroc</span> connecté
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed">
            Données géospatiales précises et cartographie intelligente pour soutenir la recherche, la planification et les projets durables.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#6B21A8] text-white px-8 py-3 rounded-full font-bold hover:bg-[#4C1D95] transition-all shadow-lg">
              Explorez les Cartes
            </button>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://picsum.photos/seed/morocco-map/1200/800" 
              alt="Intelligent Cartography" 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50 -z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 -z-0"></div>
        </div>
      </div>
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 800" className="h-full w-full">
           <path d="M100 0 Q 300 400 100 800" stroke="#6B21A8" fill="transparent" strokeWidth="20" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
