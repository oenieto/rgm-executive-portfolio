import React from 'react';
import { competencies } from '../data';
import { Icon } from './Icon';

export const Competencies: React.FC = () => {
  return (
    <section className="px-6 py-16 lg:px-40 bg-white">
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-text-main text-3xl font-bold leading-tight tracking-[-0.02em] mb-10 text-center">
          Core Competencies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {competencies.map((comp) => (
            <div
              key={comp.id}
              className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-background-light border border-transparent hover:border-primary/20 hover:shadow-lg transition-all cursor-default"
            >
              <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon name={comp.icon} className="text-3xl" />
              </div>
              <p className="text-text-main font-semibold text-center">{comp.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};