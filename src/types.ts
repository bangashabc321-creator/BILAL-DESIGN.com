export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Poster' | 'Web';
  image: string;
  description: string;
  goal: string;
  result: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  benefit: string;
  icon: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}
