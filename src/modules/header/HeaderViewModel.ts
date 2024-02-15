import { Section } from '@/pages/portfolio/models/PortfolioViewModel';

export interface HeaderConfig {
  logo: string;
  sections: Section[];
}

export type NavigationBarItem = Section;
