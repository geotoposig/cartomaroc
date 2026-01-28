
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#BE123C] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-2xl font-bold text-[#6B21A8]">Carto<span className="text-[#BE123C]">Maroc</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-[#BE123C] transition-colors">Accueil</a>
          <a href="#cartes" className="hover:text-[#BE123C] transition-colors">Cartes</a>
          <a href="#services" className="hover:text-[#BE123C] transition-colors">Services</a>
          <a href="#donnees" className="hover:text-[#BE123C] transition-colors">Données</a>
          <a href="#webgis" className="hover:text-[#BE123C] transition-colors">WebGis</a>
          <a href="#portfolio" className="hover:text-[#BE123C] transition-colors">Portfolio</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 text-gray-500">
            <i className="fab fa-facebook-f hover:text-[#BE123C] cursor-pointer"></i>
            <i className="fab fa-whatsapp hover:text-[#BE123C] cursor-pointer"></i>
            <i className="fab fa-linkedin-in hover:text-[#BE123C] cursor-pointer"></i>
            <i className="fab fa-twitter hover:text-[#BE123C] cursor-pointer"></i>
          </div>
          <button className="bg-[#BE123C] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#9F1239] transition-all">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
