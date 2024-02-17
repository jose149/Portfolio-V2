export interface Section {
  id: string;
  name: string;
  url: string;
  iconName: string;
  visibilityRatio: number;
  active?: boolean;
}

export interface PortfolioConfig {
  sections: Section[];
}
