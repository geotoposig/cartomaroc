
import React from 'react';

export const COLORS = {
  primary: '#6B21A8', // Deep Purple
  secondary: '#BE123C', // Crimson
  accent: '#FDF2F8', // Light Pink
};

export const ICONS = {
  WebGIS: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  SIG: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A2 2 0 013 15.488V5.192a2 2 0 011.141-1.78l5.447-2.724a2 2 0 011.414 0l5.447 2.724A2 2 0 0117 5.192v10.296a2 2 0 01-1.141 1.78l-5.447 2.724a2 2 0 01-1.414 0z" />
    </svg>
  ),
  Portfolio: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  Partners: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Tourisme: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Aménagement: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Environnement: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Blog: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 4v4h4" />
    </svg>
  ),
};

export const SERVICES_DATA = [
  { icon: ICONS.WebGIS, title: "Outils WebGis", description: "Solutions interactives personnalisées pour les institutions" },
  { icon: ICONS.SIG, title: "Services SIG", bullets: ["Conception de bases de données spatiales", "Cartes"] },
  { icon: ICONS.Portfolio, title: "Portfolio", bullets: ["À propos de nous", "Nos Project", "Galerie"] },
  { icon: ICONS.Partners, title: "Partenaires", bullets: ["Nos Collaborations", "Devenir Partenaire"] },
  { icon: ICONS.Tourisme, title: "Tourisme", bullets: ["Cartes touristiques interactives", "Analyse des destinations"] },
  { icon: ICONS.Aménagement, title: "Aménagement", bullets: ["Cartes et plans urbains précis", "Analyse spatiale du territoire"] },
  { icon: ICONS.Environnement, title: "Environnement", bullets: ["Suivi des changements environnementaux", "Cartographie de la couverture du sol"] },
  { icon: ICONS.Blog, title: "Blog", description: "Suivez les dernières tendances de l'innovation géomatique" },
];

export const PROJECTS_DATA = [
  { id: 1, title: "Cartographie Urbaine Casablanca", category: "Aménagement", imageUrl: "https://picsum.photos/seed/map1/800/600" },
  { id: 2, title: "Analyse Agricole Souss-Massa", category: "Agriculture", imageUrl: "https://picsum.photos/seed/map2/800/600" },
  { id: 3, title: "Suivi Environnemental Rif", category: "Environnement", imageUrl: "https://picsum.photos/seed/map3/800/600" },
  { id: 4, title: "Planification Transport Rabat", category: "Transport", imageUrl: "https://picsum.photos/seed/map4/800/600" },
];
