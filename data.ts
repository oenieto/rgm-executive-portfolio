import { ExperienceItem, CompetencyItem, StatItem, EducationItem, LanguageItem } from './types';

export const stats: StatItem[] = [
  { id: '1', value: '20+ Years', label: 'Experience', icon: 'history_edu' },
  { id: '2', value: '$500M+', label: 'Cumulative Revenue', icon: 'monetization_on' },
  { id: '3', value: '30+', label: 'Countries Led', icon: 'public' },
];

export const competencies: CompetencyItem[] = [
  { id: '1', title: 'GTM Strategy', icon: 'rocket_launch' },
  { id: '2', title: 'Telecom Infra', icon: 'cell_tower' },
  { id: '3', title: 'Executive Negotiation', icon: 'handshake' },
  { id: '4', title: 'AI & Digital Platforms', icon: 'psychology' },
  { id: '5', title: 'Cloud Solutions', icon: 'cloud' },
  { id: '6', title: 'Revenue Growth', icon: 'trending_up' },
  { id: '7', title: 'Team Leadership', icon: 'diversity_3' },
  { id: '8', title: 'Global Markets', icon: 'language' },
];

export const experience: ExperienceItem[] = [
  {
    id: '1',
    company: 'Ericsson',
    role: 'Strategic Sales Lead',
    period: '2018 - Present',
    description: 'Leading strategic sales initiatives across LATAM. Spearheaded the 5G rollout partnerships with major regional carriers.',
    tags: ['$200M+ Annual Bookings', '5G Adoption'],
    icon: 'wifi_tethering',
  },
  {
    id: '2',
    company: 'Nokia',
    role: 'Director of Operations',
    period: '2014 - 2018',
    description: 'Oversaw regional operations and supply chain logistics for network deployment projects. Optimized processes to significantly reduce overhead.',
    tags: ['15% Cost Reduction', 'Operational Excellence'],
    icon: 'settings_input_antenna',
  },
  {
    id: '3',
    company: 'Huawei',
    role: 'Regional VP',
    period: '2010 - 2014',
    description: 'Directed market expansion strategies in emerging markets. Built and managed a team of 150+ sales and technical professionals.',
    tags: ['Market Expansion', 'Team Leadership'],
    icon: 'router',
  },
  {
    id: '4',
    company: 'HP',
    role: 'Enterprise Account Manager',
    period: '2006 - 2010',
    description: 'Managed key enterprise accounts, delivering large-scale IT and cloud infrastructure solutions to Fortune 500 clients.',
    tags: ['Cloud Solutions', 'B2B Sales'],
    icon: 'laptop_mac',
  },
  {
    id: '5',
    company: 'Alcatel-Lucent',
    role: 'Senior Consultant',
    period: '2003 - 2006',
    description: 'Provided technical consultancy for network infrastructure design and optimization.',
    tags: ['Network Infrastructure'],
    icon: 'cable',
  },
];

export const education: EducationItem[] = [
  { id: '1', degree: 'Master of Business Administration (MBA)', institution: 'IE Business School' },
  { id: '2', degree: 'B.S. Telecommunications Engineering', institution: 'Tecnológico de Monterrey' },
  { id: '3', degree: 'PMP® Certification', institution: 'Project Management Institute' },
];

export const languages: LanguageItem[] = [
  { id: '1', language: 'English', level: 'Native / Bilingual', proficiency: 100 },
  { id: '2', language: 'Spanish', level: 'Native / Bilingual', proficiency: 100 },
  { id: '3', language: 'Portuguese', level: 'Professional Working', proficiency: 80 },
];