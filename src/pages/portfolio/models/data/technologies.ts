import type { SvgIconType } from '@/libraries/storybook/svgIcon/SvgIconModel';

/* eslint-disable */
enum TechnologyModule {
  FrontEndDelivery = 'Front End Delivery',
  FrontEndDiscovery = 'Front End Discovery',
  FrontEndOperations = 'Front End Operations',
  BackEndDelivery = 'Back End Delivery',
  BackEndDiscovery = 'Back End Discovery',
  BackEndOperations = 'Back End Operations',
}

export interface ITechnology {
  name: string;
  module: TechnologyModule;
  iconName: SvgIconType;
}

export enum TechnologyModuleType {
  FrontEndDelivery = 'Front end delivery',
  FrontEndDiscovery = 'Front end discovery',
  BackEnd = 'Back end',
  Others = 'Others',
}

export interface ITechnologyModule {
  type: TechnologyModuleType;
  technologies: ITechnology[];
}

export const frontEndDeliveryTechnologies: ITechnology[] = [
  {
    name: 'Vue 3',
    module: TechnologyModule.FrontEndDelivery,
    iconName: 'Vue',
  },
  {
    name: 'TypeScript 5',
    module: TechnologyModule.FrontEndDelivery,
    iconName: 'TypeScript',
  },
  {
    name: 'Vite',
    module: TechnologyModule.FrontEndDelivery,
    iconName: 'Vitest',
  },
  {
    name: 'Cypress',
    module: TechnologyModule.FrontEndDelivery,
    iconName: 'Cypress',
  },
  {
    name: 'Sass',
    module: TechnologyModule.FrontEndDelivery,
    iconName: 'Sass',
  },
  {
    name: 'Jest',
    module: TechnologyModule.FrontEndDelivery,
    iconName: 'Jest',
  },
  {
    name: 'StoryBook',
    module: TechnologyModule.FrontEndDelivery,
    iconName: 'StoryBook',
  },
  {
    name: 'Pinia',
    module: TechnologyModule.FrontEndDelivery,
    iconName: 'Pinia',
  },
];

const frontEndDiscoveryTechnologies: ITechnology[] = [
  {
    name: 'Figma',
    module: TechnologyModule.FrontEndDiscovery,
    iconName: 'Figma',
  },
  {
    name: 'Google Analytics 4',
    module: TechnologyModule.FrontEndDiscovery,
    iconName: 'GoogleAnalytics',
  },
  {
    name: 'Google Tag Manager',
    module: TechnologyModule.FrontEndDiscovery,
    iconName: 'GoogleTagManager',
  },
  // {name:'LucidChart', module: TechnologyModule.FrontEndDiscovery, iconName:'LC'},
  // {name:'Miro', module: TechnologyModule.FrontEndDiscovery, iconName:'Miro'},
  {
    name: 'Hotjar',
    module: TechnologyModule.FrontEndDiscovery,
    iconName: 'Hotjar',
  },
];

const frontEndDevOpsTechnologies: ITechnology[] = [
  {
    name: 'Bitbucket',
    module: TechnologyModule.FrontEndOperations,
    iconName: 'Bitbucket',
  },
  {
    name: 'Netlify',
    module: TechnologyModule.FrontEndOperations,
    iconName: 'Netlify',
  },
  {
    name: 'Jenkins',
    module: TechnologyModule.FrontEndOperations,
    iconName: 'Jenkins',
  },
];

const backEndDeliveryTechnologies: ITechnology[] = [
  {
    name: '.Net',
    module: TechnologyModule.BackEndDelivery,
    iconName: 'DotNet',
  },
  { name: 'C#', module: TechnologyModule.BackEndDelivery, iconName: 'CSharp' },
  {
    name: 'GraphQL',
    module: TechnologyModule.BackEndDelivery,
    iconName: 'GraphQL',
  },
];

const backEndDiscoveryTechnologies: ITechnology[] = [
  {
    name: 'Grafana',
    module: TechnologyModule.BackEndDiscovery,
    iconName: 'Grafana',
  },
  {
    name: 'Kibana',
    module: TechnologyModule.BackEndDiscovery,
    iconName: 'Kibana',
  },
  {
    name: 'Elastic Search',
    module: TechnologyModule.BackEndDiscovery,
    iconName: 'ElasticSearch',
  },
];

const backEndDevOpsTechnologies: ITechnology[] = [
  {
    name: 'Docker',
    module: TechnologyModule.BackEndOperations,
    iconName: 'Docker',
  },
  {
    name: 'Kubernetes',
    module: TechnologyModule.BackEndOperations,
    iconName: 'Kubernetes',
  },
  {
    name: 'Octopus',
    module: TechnologyModule.BackEndOperations,
    iconName: 'Octopus',
  },
];

const allTechnologies = [
  ...frontEndDeliveryTechnologies,
  ...frontEndDiscoveryTechnologies,
];

export function getMainTechnologiesFromData(): ITechnology[] {
  return allTechnologies;
}

export const technologyModules: ITechnologyModule[] = [
  {
    type: TechnologyModuleType.FrontEndDelivery,
    technologies: frontEndDeliveryTechnologies,
  },
  {
    type: TechnologyModuleType.FrontEndDiscovery,
    technologies: frontEndDiscoveryTechnologies,
  },
  {
    type: TechnologyModuleType.BackEnd,
    technologies: [
      ...backEndDeliveryTechnologies,
      ...backEndDiscoveryTechnologies,
      ...backEndDevOpsTechnologies,
    ],
  },
  {
    type: TechnologyModuleType.Others,
    technologies: frontEndDevOpsTechnologies,
  },
];
