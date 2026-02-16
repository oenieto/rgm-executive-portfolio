
import React from 'react';
import { Hero } from './Hero';
import { Stats } from './Stats';
import { StrategicImpact } from './StrategicImpact';
import { Competencies } from './Competencies';
import { Experience } from './Experience';
import { EducationLanguages } from './EducationLanguages';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <StrategicImpact />
      <Competencies />
      <Experience />
      <EducationLanguages />
    </>
  );
};
