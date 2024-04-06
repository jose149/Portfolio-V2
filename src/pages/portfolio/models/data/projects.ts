import { Project } from '@/modules/projects/projectsViewModel';
import {
  backEndDeliveryTechnologies,
  backEndDiscoveryTechnologies,
  frontEndDeliveryTechnologies,
  frontEndDevOpsTechnologies,
  frontEndDiscoveryTechnologies,
} from './technologies';

export const mainProjects: Project[] = [
  {
    name: 'Trip Planner',
    image: '/assets/images/Projects/TripOverview.webp',
    link: 'https://www.sembo.co.uk/travel/plan?pax=rpp',
    description:
      'As an engineer in Sembo I took the opportunity to contribute and take ownership of the following taks:',
    features: [
      'Improve the router logic to serialise and deserialise parameters',
      'Develop from mock-ups to render the view of products like hotels, activities and transports',
      'Implement view components logic such as filters to be really easy to use and to add new ones',
      'Unit-test old and new features using Vitest working with TDD methodology and e2e test the critical path using cypress',
      'Create reusable components using StoryBook',
      'Set up user metrics using Google Analytics and Google Tag Manager and configuring hotjar to also watch records',
      'Build and take ownership of some integrations with external (Google Maps API) and internal APIs using Observables',
      'Suggest product ideas which reflected in a 38% of reduced costs for Google Maps API usage implementing Singleton',
      'Refactor code improving some logic usability by implementing an Adapter',
      'Develop endpoints for the meta companies redirection and for receiving some product availability',
    ],
    organisationLogo: '/assets/images/Projects/SemboLogo.webp',
    technologies: [
      ...frontEndDeliveryTechnologies,
      ...frontEndDiscoveryTechnologies,
      ...frontEndDevOpsTechnologies,
      ...backEndDeliveryTechnologies,
      ...backEndDiscoveryTechnologies,
    ],
  },
];

export const subProjects: Project[] = [
  {
    name: 'Users List',
    image: '/assets/images/Projects/UsersList.webp',
    repositoryUrl: 'https://github.com/jose149/OrganizationTable',
    description: 'Users List',
    features: [],
    technologies: [...frontEndDeliveryTechnologies],
  },
  {
    name: 'Vue Component Extractor',
    image: '/assets/images/Projects/TodoList.webp',
    repositoryUrl: 'https://github.com/jose149/ToDoList',
    description: 'Todo list',
    features: [],
    technologies: [...frontEndDeliveryTechnologies],
  },
];
