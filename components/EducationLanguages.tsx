import React from 'react';
import { education, languages } from '../data';
import { Icon } from './Icon';

export const EducationLanguages: React.FC = () => {
  return (
    <section className="border-t border-[#e7ebf3] bg-white px-6 py-12 lg:px-40" id="education-languages">
      <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education & Certs */}
        <div>
          <h3 className="text-text-main text-lg font-bold mb-6 flex items-center gap-2">
            <Icon name="school" className="text-primary" />
            Education & Certifications
          </h3>
          <div className="flex flex-col gap-4">
            {education.map((edu) => (
              <div key={edu.id} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-text-main">{edu.degree}</p>
                  <p className="text-sm text-text-muted">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-text-main text-lg font-bold mb-6 flex items-center gap-2">
            <Icon name="translate" className="text-primary" />
            Languages
          </h3>
          <div className="space-y-4">
            {languages.map((lang) => (
              <div key={lang.id}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-text-main">{lang.language}</span>
                  <span className="text-xs font-medium text-primary">{lang.level}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${lang.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};