import type { SvgIconType } from "../storybook/svgIcon/SvgIconModel";

export enum TechnologyModule{
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
  isMostRelevant?: boolean;
}

export enum TechnologyModuleType{
  FrontEnd ='Front End',
  BackEnd ='Back End',
  UxUi ='UX/UI'
}

export interface ITechnologyModule {
  type:TechnologyModuleType;
  iconName:SvgIconType;
  technologies:ITechnology[];
  description: string;
}

export const frontEndDeliveryTechnologies: ITechnology[] = [
  {name:'Vue 3', module: TechnologyModule.FrontEndDelivery, iconName:'Vue', isMostRelevant:true},
  {name:'TypeScript 5', module: TechnologyModule.FrontEndDelivery, iconName:'TypeScript', isMostRelevant:true},
  {name:'Vitest', module: TechnologyModule.FrontEndDelivery, iconName:'Vitest', isMostRelevant:true},
  {name:'Cypress', module: TechnologyModule.FrontEndDelivery, iconName:'Cypress', isMostRelevant:true},
  {name:'Sass', module: TechnologyModule.FrontEndDelivery, iconName:'Sass', isMostRelevant:true},
  {name:'Jest', module: TechnologyModule.FrontEndDelivery, iconName:'Jest', isMostRelevant:true},
  {name:'StoryBook', module: TechnologyModule.FrontEndDelivery, iconName:'StoryBook'},
  {name:'Pinia', module: TechnologyModule.FrontEndDelivery, iconName:'Pinia'}
];

const frontEndDiscoveryTechnologies: ITechnology[] = [
  {name:'Figma', module: TechnologyModule.FrontEndDiscovery, iconName:'Figma', isMostRelevant:true},
  {name:'Google Analytics 4', module: TechnologyModule.FrontEndDiscovery, iconName:'GoogleAnalytics'},
  {name:'Google Tag Manager', module: TechnologyModule.FrontEndDiscovery, iconName:'GoogleTagManager'},
  // {name:'LucidChart', module: TechnologyModule.FrontEndDiscovery, iconName:'LC'},
  // {name:'Miro', module: TechnologyModule.FrontEndDiscovery, iconName:'Miro'},
  {name:'Hotjar', module: TechnologyModule.FrontEndDiscovery, iconName:'Hotjar'},
]

const frontEndDevOpsTechnologies: ITechnology[] = [
  {name:'Bitbucket', module: TechnologyModule.FrontEndOperations, iconName:'Bitbucket', isMostRelevant:true},
  {name:'Netlify', module: TechnologyModule.FrontEndOperations, iconName:'Netlify', isMostRelevant:true},
  {name:'Jenkins', module: TechnologyModule.FrontEndOperations, iconName:'Jenkins', isMostRelevant:true},
]

const backEndDeliveryTechnologies: ITechnology[] = [
  {name:'.Net', module: TechnologyModule.BackEndDelivery, iconName:'DotNet'},
  {name:'C#', module: TechnologyModule.BackEndDelivery, iconName:'CSharp'},
  {name:'GraphQL', module: TechnologyModule.BackEndDelivery, iconName:'GraphQL', isMostRelevant:true},
];

const backEndDiscoveryTechnologies: ITechnology[] = [
  {name:'Grafana', module: TechnologyModule.BackEndDiscovery, iconName:'Grafana', isMostRelevant:true},
  {name:'Kibana', module: TechnologyModule.BackEndDiscovery, iconName:'Kibana'},
  {name:'Elastic Search', module: TechnologyModule.BackEndDiscovery, iconName:'ElasticSearch'},
]

const backEndDevOpsTechnologies: ITechnology[] = [
  {name:'Docker', module: TechnologyModule.BackEndOperations, iconName:'Docker', isMostRelevant:true},
  {name:'Kubernetes', module: TechnologyModule.BackEndOperations, iconName:'Kubernetes'},
  {name:'Octopus', module: TechnologyModule.BackEndOperations, iconName:'Octopus'},
]

const allTechnologies = [
  ...frontEndDeliveryTechnologies, 
  ...frontEndDiscoveryTechnologies,
  ...frontEndDevOpsTechnologies,
  ...backEndDeliveryTechnologies,
  ...backEndDiscoveryTechnologies,
  ...backEndDevOpsTechnologies
]

export function getMainTechnologies():ITechnology[]{
  return allTechnologies.filter((technology) => technology.isMostRelevant)
}

export const technologyModules: ITechnologyModule[] =[
  {
    type: TechnologyModuleType.FrontEnd,  
    iconName:'Screen', 
    technologies:[...frontEndDeliveryTechnologies, ...frontEndDevOpsTechnologies], 
    description: 'Technologies used for deliver the front end side'
  },
  {
    type: TechnologyModuleType.BackEnd,
    iconName:'Server',
    technologies:[...backEndDeliveryTechnologies, ...backEndDiscoveryTechnologies, ...backEndDevOpsTechnologies],
    description: 'Technologies used for deliver the back end side'
  },
  {
    type: TechnologyModuleType.UxUi,
    iconName:'Design',
    technologies: frontEndDiscoveryTechnologies ,
    description: 'Technologies used for discover the front end side'
  },
]