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
      'As a Sembo Trip Planner key member, I contributed to develop an innovative travel tool that allows users to effortlessly crate full travel experiences integrating accommodation, transportation, and activities. Enhancing the travel experience, making it more enjoyable and accessible for everyone.',
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
    technologies: [...frontEndDeliveryTechnologies],
  },
  {
    name: 'Todo List',
    image: '/assets/images/Projects/TodoList.webp',
    repositoryUrl: 'https://github.com/jose149/ToDoList',
    description: 'Todo list',
    technologies: [...frontEndDeliveryTechnologies],
  },
];
