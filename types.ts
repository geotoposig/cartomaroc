
// Import React to access React.ReactNode type
import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets?: string[];
}

export interface Project {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}