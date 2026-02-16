import React from 'react';
import { stats } from '../data';
import { Icon } from './Icon';

export const Stats: React.FC = () => {
  return (
    <section className="w-full bg-[#101622] text-white py-12 px-6 lg:px-40" id="impact">
      <div className="max-w-[960px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-700/50">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-2 p-4">
              <Icon name={stat.icon} className="text-primary text-4xl mb-2" />
              <p className="text-4xl font-bold tracking-tight text-white">{stat.value}</p>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};