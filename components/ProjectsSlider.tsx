
import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS_DATA } from '../constants';

const ProjectsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  };

  return (
    <div className="relative group">
      {/* Navigation Controls (Top Right positioning inspired by the UI) */}
      <div className="absolute -top-16 right-4 flex gap-2 z-20">
        <button 
          onClick={handlePrev}
          className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={handleNext}
          className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out px-4 gap-6"
          style={{ transform: `translateX(-${currentIndex * 350}px)` }}
        >
          {PROJECTS_DATA.concat(PROJECTS_DATA).map((project, index) => (
            <div 
              key={`${project.id}-${index}`}
              className="min-w-[320px] md:min-w-[450px] aspect-[4/3] rounded-3xl overflow-hidden shadow-lg relative group/card"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 opacity-0 group-hover/card:opacity-100 transition-opacity">
                <span className="text-crimson-text text-sm font-semibold uppercase tracking-wider mb-2">{project.category}</span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
              
              {/* Optional Branding Overlay on central image similar to screenshot */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover/card:opacity-40 transition-opacity">
                 <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <span className="text-white font-bold text-3xl">M</span>
                 </div>
              </div>

              {/* Slider Progress Indicator (Arrows at bottom left of individual card as shown in UI) */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <div className="w-10 h-10 bg-purple-900/60 backdrop-blur-md text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlider;
