
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import AboutSection from './components/AboutSection';
import ProjectsSlider from './components/ProjectsSlider';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Banner Announcement */}
        <div className="bg-white py-4 text-center border-b border-gray-100">
          <p className="text-crimson-text font-medium flex items-center justify-center gap-2">
            Prêt pour la CAN 2025 ? 🔥 🏟️ Découvrez tous les stades et sites touristiques avec notre carte interactive
          </p>
        </div>

        <section id="structure" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center mb-12">
            <h3 className="text-crimson-text uppercase font-semibold text-sm tracking-widest">Carto Maroc</h3>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Structure du site :</h2>
          </div>
          <ServicesGrid />
        </section>

        <AboutSection />
        
        <section id="projects" className="py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 mb-8 flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Nos Project</h2>
            </div>
          </div>
          <ProjectsSlider />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
