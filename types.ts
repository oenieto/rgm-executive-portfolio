export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  icon: string;
  stats?: { label: string; value: string };
}

export interface CompetencyItem {
  id: string;
  title: string;
  icon: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
}

export interface LanguageItem {
  id: string;
  language: string;
  level: string;
  proficiency: number; // 0-100
}