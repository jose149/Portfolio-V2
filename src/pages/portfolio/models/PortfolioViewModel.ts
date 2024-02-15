export interface Section {
  id: string;
  name: string;
  url: string;
  iconName: string;
  active?: boolean;
}

export interface PortfolioConfig {
  sections: Section[];
}
