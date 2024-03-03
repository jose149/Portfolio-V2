import type { SvgIconType } from '@/libraries/storybook/svgIcon/SvgIconModel';
/* eslint-disable */

export type FrontEndDeliveryTechnologiesType =
  | 'CSS 3'
  | 'Html 5'
  | 'JavaScript'
  | 'Vue 3'
  | 'React'
  | 'RxJs'
  | 'TypeScript 5'
  | 'Vite'
  | 'Cypress'
  | 'Sass'
  | 'Jest'
  | 'StoryBook'
  | 'Pinia';
export type FrontEndDiscoveryTechnologiesType =
  | 'Figma'
  | 'Google Analytics 4'
  | 'Google Tag Manager'
  | 'Hotjar'
  | 'Statsig';
export type FrontEndOpsTechnologyType = 'Bitbucket' | 'Netlify' | 'Jenkins';
export type BackEndDeliveryTechnologyType =
  | '.Net'
  | 'C#'
  | 'Python'
  | 'GraphQL';
export type BackEndDiscoveryTechnologyType = 'Grafana' | 'Elastic Search';

export type FronEndTechnologyType =
  | FrontEndDeliveryTechnologiesType
  | FrontEndDiscoveryTechnologiesType
  | FrontEndOpsTechnologyType;
export type BackEndTechnologyType =
  | BackEndDeliveryTechnologyType
  | BackEndDiscoveryTechnologyType;

export type TechnologyType = FronEndTechnologyType | BackEndTechnologyType;

export interface Technology {
  name: TechnologyType;
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
  technologies: Technology[];
}

export const frontEndDeliveryTechnologies: Technology[] = [
  {
    name: 'CSS 3',
    iconName: 'CSS',
  },
  {
    name: 'Html 5',
    iconName: 'Html',
  },
  {
    name: 'JavaScript',
    iconName: 'Javascript',
  },
  {
    name: 'Vue 3',
    iconName: 'Vue',
  },
  {
    name: 'React',
    iconName: 'React',
  },
  {
    name: 'TypeScript 5',
    iconName: 'TypeScript',
  },
  {
    name: 'Vite',
    iconName: 'Vitest',
  },
  {
    name: 'Pinia',
    iconName: 'Pinia',
  },
  {
    name: 'Sass',
    iconName: 'Sass',
  },
  {
    name: 'Jest',
    iconName: 'Jest',
  },
  {
    name: 'Cypress',
    iconName: 'Cypress',
  },
  {
    name: 'StoryBook',
    iconName: 'StoryBook',
  },
  {
    name: 'RxJs',
    iconName: 'RxJs',
  },
  {
    name: 'GraphQL',
    iconName: 'GraphQL',
  },
];

export const frontEndDiscoveryTechnologies: Technology[] = [
  {
    name: 'Figma',
    iconName: 'Figma',
  },
  {
    name: 'Google Analytics 4',
    iconName: 'GoogleAnalytics',
  },
  {
    name: 'Google Tag Manager',
    iconName: 'GoogleTagManager',
  },
  {
    name: 'Hotjar',
    iconName: 'Hotjar',
  },
  {
    name: 'Statsig',
    iconName: 'Statsig',
  },
];

export const frontEndDevOpsTechnologies: Technology[] = [
  {
    name: 'Bitbucket',
    iconName: 'Bitbucket',
  },
  {
    name: 'Netlify',
    iconName: 'Netlify',
  },
  {
    name: 'Jenkins',
    iconName: 'Jenkins',
  },
];

export const backEndDeliveryTechnologies: Technology[] = [
  {
    name: '.Net',
    iconName: 'DotNet',
  },
  {
    name: 'C#',
    iconName: 'CSharp',
  },
  {
    name: 'GraphQL',
    iconName: 'GraphQL',
  },
  {
    name: 'Python',
    iconName: 'Python',
  },
];

export const backEndDiscoveryTechnologies: Technology[] = [
  {
    name: 'Grafana',
    iconName: 'Grafana',
  },
  {
    name: 'Elastic Search',
    iconName: 'ElasticSearch',
  },
];

export function getTechnologies(): Technology[] {
  return [
    ...frontEndDeliveryTechnologies,
    ...frontEndDiscoveryTechnologies,
    ...frontEndDevOpsTechnologies,
    ...backEndDeliveryTechnologies,
    ...backEndDiscoveryTechnologies,
  ];
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
    ],
  },
  {
    type: TechnologyModuleType.Others,
    technologies: frontEndDevOpsTechnologies,
  },
];
