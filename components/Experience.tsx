import React from 'react';
import { experience } from '../data';
import { Icon } from './Icon';

export const Experience: React.FC = () => {
  return (
    <section className="px-6 py-16 lg:px-40 bg-[#f8f9fc]" id="experience">
      <div className="max-w-[960px] mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-text-main text-3xl font-bold leading-tight tracking-[-0.02em]">
            Professional Experience
          </h2>
          <span className="text-sm font-medium text-text-muted hidden md:block">
            Interactive Timeline
          </span>
        </div>
        
        <div className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-x-4 md:gap-x-8">
          {experience.map((job) => (
            <React.Fragment key={job.id}>
              {/* Timeline Column */}
              <div className="flex flex-col items-center h-full">
                <div className="flex items-center justify-center size-12 rounded-full bg-white border border-[#e7ebf3] shadow-sm z-10">
                  <Icon name={job.icon} className="text-primary text-xl" />
                </div>
                {/* Connecting Line (except for last item visual logic handled by parent grid layout, but let's make sure lines connect) */}
                <div className="w-[2px] bg-[#e7ebf3] h-full"></div>
              </div>

              {/* Content Column */}
              <div className="pb-12 group">
                <div className="bg-white p-6 rounded-xl border border-[#e7ebf3] shadow-sm group-hover:border-primary/30 group-hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-text-main text-xl font-bold">{job.company}</h3>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded w-fit">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-3">{job.role}</p>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, idx) => {
                      const isPrimary = idx === 0; // Visual style matching logic: first tag is primary
                      return (
                        <span
                          key={idx}
                          className={`text-xs font-semibold px-2 py-1 rounded border ${
                            isPrimary
                              ? 'text-primary bg-primary/5 border-primary/10'
                              : 'text-gray-600 bg-gray-50 border-gray-200'
                          }`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};