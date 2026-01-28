
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-crimson-text uppercase font-semibold text-sm tracking-widest">A propos de nous</h3>
        <p className="text-gray-500 text-sm mt-1">Entreprise Carto Maroc</p>

        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative">
          {/* Star Rating */}
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map(star => (
              <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed text-sm text-justify mb-8 italic">
            "Je suis ingénieur en Systèmes d'Information Géographique, passionné par l'analyse spatiale, 
            la cartographie intelligente et le développement d'applications web géospatiales. 
            Avec une solide expérience en programmation géographique et en conception de cartes 
            interactives, je combine la technologie et la géographie pour créer des solutions innovantes 
            au service du territoire et du développement durable."
          </p>

          <div className="flex items-center justify-center gap-4 border-t border-gray-100 pt-6">
            <img 
              src="https://picsum.photos/seed/ayoub/100/100" 
              alt="DAOUAIRI AYOUB" 
              className="w-12 h-12 rounded-full border-2 border-[#BE123C]"
            />
            <div className="text-left">
              <h4 className="font-bold text-gray-900">DAOUAIRI AYOUB</h4>
              <p className="text-xs text-[#BE123C] font-medium">SIGiste & Développeur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
