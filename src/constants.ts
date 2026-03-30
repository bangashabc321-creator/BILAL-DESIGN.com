import { PortfolioItem, Testimonial, Service, ProcessStep } from './types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Cyberpunk Event Poster',
    category: 'Poster',
    image: 'https://picsum.photos/seed/poster1/800/1200',
    description: 'A high-impact visual for a major tech conference.',
    goal: 'Create a visual that stands out in a crowded urban environment.',
    result: 'Increased ticket sales by 40% compared to previous year.',
  },
  {
    id: '2',
    title: 'Luxury Watch E-commerce',
    category: 'Web',
    image: 'https://picsum.photos/seed/web1/1200/800',
    description: 'A premium shopping experience for a high-end watch brand.',
    goal: 'Reduce bounce rate and increase average order value.',
    result: 'Conversion rate increased by 25% within the first month.',
  },
  {
    id: '3',
    title: 'Minimalist Film Festival',
    category: 'Poster',
    image: 'https://picsum.photos/seed/poster2/800/1200',
    description: 'Elegant poster series for an international film festival.',
    goal: 'Convey sophistication and artistic depth.',
    result: 'Featured in 5 major design publications.',
  },
  {
    id: '4',
    title: 'SaaS Dashboard Design',
    category: 'Web',
    image: 'https://picsum.photos/seed/web2/1200/800',
    description: 'Intuitive interface for a complex data analytics platform.',
    goal: 'Simplify complex data visualization for non-technical users.',
    result: 'User onboarding time reduced by 50%.',
  },
  {
    id: '5',
    title: 'Urban Fashion Lookbook',
    category: 'Poster',
    image: 'https://picsum.photos/seed/poster3/800/1200',
    description: 'Gritty, high-energy posters for a street fashion brand.',
    goal: 'Capture the attention of Gen Z audience.',
    result: 'Social media engagement grew by 300% during the campaign.',
  },
  {
    id: '6',
    title: 'Modern Architecture Portfolio',
    category: 'Web',
    image: 'https://picsum.photos/seed/web3/1200/800',
    description: 'Minimalist website showcasing award-winning architectural projects.',
    goal: 'Let the imagery speak for itself while maintaining fast load times.',
    result: 'Google Lighthouse score of 98/100.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO at TechFlow',
    content: 'Bilal transformed our brand identity. His posters didn\'t just look good; they actually drove sales. A true professional who understands business goals.',
    avatar: 'https://picsum.photos/seed/user1/100/100',
  },
  {
    id: '2',
    name: 'Mark Thompson',
    role: 'Marketing Director, LuxeTime',
    content: 'The website Bilal designed for us is a masterpiece. Our conversion rates have never been higher. He is our go-to designer for all high-stakes projects.',
    avatar: 'https://picsum.photos/seed/user2/100/100',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Founder of UrbanEdge',
    content: 'Working with Bilal was seamless. He took our vague ideas and turned them into a visual language that resonates perfectly with our audience.',
    avatar: 'https://picsum.photos/seed/user3/100/100',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'poster',
    title: 'High-Impact Poster Design',
    description: 'Visuals that stop the scroll and command attention in any environment.',
    benefit: 'Increase event attendance and brand recall with designs that stick.',
    icon: 'Layout',
  },
  {
    id: 'web',
    title: 'Conversion-Focused Web Design',
    description: 'Premium websites built to turn visitors into loyal customers.',
    benefit: 'Lower bounce rates and higher ROI through strategic UX/UI design.',
    icon: 'Globe',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business goals, target audience, and market positioning.',
  },
  {
    id: 2,
    title: 'Concept & Design',
    description: 'I create high-fidelity concepts that align with your brand vision and conversion goals.',
  },
  {
    id: 3,
    title: 'Refinement',
    description: 'We iterate based on your feedback to ensure every detail is perfect.',
  },
  {
    id: 4,
    title: 'Final Delivery',
    description: 'You receive production-ready assets or a fully functional website ready to launch.',
  },
];
