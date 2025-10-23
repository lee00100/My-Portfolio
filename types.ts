import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  repoUrl: string;
}

export interface Skill {
  name: string;
  icon: React.ReactElement;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string;
}