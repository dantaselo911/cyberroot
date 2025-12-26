
export type Level = 'Iniciante' | 'Intermediário' | 'Avançado';

export interface Course {
  id: string;
  name: string;
  level: Level;
  duration: string;
  shortDesc: string;
  fullDesc: string;
  curriculum: string[];
  tools: string[];
  targetAudience: string;
  requirements: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
