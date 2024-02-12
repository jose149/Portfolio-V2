export interface TechnologyModule {
  name: string;
  figures: Figure[];
  startCollapsed: boolean;
}

export interface Figure {
  caption: string;
  iconName: string;
}

export interface TechnologiesConfig {
  technologyModules: TechnologyModule[];
}
