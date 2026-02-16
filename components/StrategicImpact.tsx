
import React from 'react';
import { Icon } from './Icon';

interface ImpactMetric {
  id: string;
  value: string;
  label: string;
  icon: string;
}

interface Achievement {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  metrics: string[];
}

const metrics: ImpactMetric[] = [
  { id: '1', value: '$200M+', label: 'Annual Revenue (Ericsson)', icon: 'payments' },
  { id: '2', value: '130%', label: 'YoY Growth (Nokia)', icon: 'trending_up' },
  { id: '3', value: '20+', label: 'Years Experience', icon: 'schedule' },
  { id: '4', value: '30+', label: 'Countries Managed', icon: 'public' },
];

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Global Sales Director – LATAM & Eastern Europe',
    company: 'ERICSSON',
    period: 'Nov 2021 – March 2025',
    description: 'Senior regional commercial executive with multi-country accountability for infrastructure and digital services growth across Latin America and Eastern Europe.',
    metrics: [
      'Defined and executed regional go-to-market strategy across LATAM and Eastern Europe.',
      'Directed regional commercial strategy with accountability over $200M+ annual bookings.',
      'Led complex infrastructure modernization programs for Tier-1 carriers and multinational enterprises.',
      'Managed geographically distributed commercial organizations (20+ direct reports; 80+ extended matrix).',
    ],
  },
  {
    id: '2',
    title: 'Head of Sales – Software & Cloud Solutions',
    company: 'NOKIA',
    period: 'Feb 2018 – Apr 2020',
    description: 'Regional commercial leader responsible for territory recovery and transition toward software-driven infrastructure sales across LATAM & Southern US.',
    metrics: [
      'Delivered $40M+ in new business with 130% YoY growth.',
      'Rebuilt underperforming territories into predictable revenue engines.',
      'Elevated executive engagement model with CIOs and CTOs.',
      'Transitioned sales strategy from hardware-centric to platform-led transformation.',
    ],
  },
  {
    id: '3',
    title: 'Vice President of Sales – Strategic Accounts',
    company: 'ERICSSON',
    period: 'Sep 2013 – Nov 2017',
    description: 'Executive commercial owner of Ericsson\'s most strategic Tier-1 carrier accounts across Mexico and Central America.',
    metrics: [
      'End-to-end commercial responsibility for strategic accounts generating $150M+ in cumulative bookings.',
      'Led high-stakes commercial recovery strategies, protecting $100M+ in at-risk contracts.',
      'Sustained ~70% market share in key accounts.',
      'Structured and negotiated multi-year infrastructure modernization agreements.',
    ],
  },
   {
    id: '4',
    title: 'Regional Sales Director IT, Core and Cloud',
    company: 'HUAWEI TECHNOLOGIES',
    period: 'Jun 2011 – Aug 2013',
    description: 'Regional expansion leader focused on accelerated infrastructure growth in competitive markets.',
    metrics: [
      'Generated $100M+ revenue across core network, BSS/OSS, and cloud infrastructure.',
      'Built and led 20+ person regional sales and presales organization.',
      'Negotiated large-scale carrier infrastructure and transformation contracts.',
    ],
  },
];

export const StrategicImpact: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-40 bg-white" id="impact">
      <div className="max-w-[960px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center">
           <h2 className="text-[#0d121b] text-3xl font-bold leading-tight tracking-[-0.015em] lg:text-4xl">
            Strategic Impact & Leadership
          </h2>
          <p className="text-[#4e6484] text-lg font-normal leading-relaxed max-w-3xl mx-auto">
            Driving multi-untry revenue growth, commercial strategy, and large-scale infrastructure expansion.
          </p>
        </div>

        {/* High-Level Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div key={metric.id} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background-light border border-[#e7ebf3] hover:shadow-lg transition-shadow">
              <div className="text-primary">
                <Icon name={metric.icon} className="text-4xl" />
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-[#0d121b] text-2xl font-bold">{metric.value}</span>
                <span className="text-[#4e6484] text-sm font-medium">{metric.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Achievements */}
        <div className="flex flex-col gap-8">
          {achievements.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl border border-[#e7ebf3] bg-white hover:border-primary/20 hover:shadow-md transition-all">
              <div className="flex flex-col gap-2 md:w-1/3">
                <h3 className="text-[#0d121b] text-xl font-bold leading-tight">{item.company}</h3>
                <span className="text-primary font-medium text-sm">{item.period}</span>
                <div className="h-1 w-12 bg-primary/20 rounded-full mt-2"></div>
              </div>
              
              <div className="flex flex-col gap-4 md:w-2/3">
                <h4 className="text-[#0d121b] text-lg font-bold">{item.title}</h4>
                <p className="text-[#4e6484] text-base leading-relaxed">
                  {item.description}
                </p>
                <ul className="flex flex-col gap-2 mt-2">
                  {item.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#4e6484] text-sm">
                      <span className="mt-1 text-primary">
                        <Icon name="check_circle" className="text-base" />
                      </span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
