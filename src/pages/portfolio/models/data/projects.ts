import { MainProject, SubProject } from '@/modules/projects/projectsViewModel';

export const mainProjects: MainProject[] = [
  {
    heading: 'TripPlanner',
    image: '/assets/images/Projects/TripPlanner.jpg',
    logos: [
      'Vue',
      'TypeScript',
      'Vitest',
      'Cypress',
      'StoryBook',
      'GraphQL',
      'Pinia',
    ],
    link: 'https://www.sembo.co.uk/travel/plan?pax=rpp',
    description:
      'As a Sembo Trip Planner key member, I contributed to develop an innovative travel tool that allows users to effortlessly crate full travel experiences integrating accommodation, transportation, and activities. Enhancing the travel experience, making it more enjoyable and accessible for everyone.',
  },
];

export const subProjects: SubProject[] = [
  {
    heading: 'Todo List',
    image: '/assets/images/Miniprojects/TodoList.webp',
    link: 'https://github.com/jose149/ToDoList',
  },
  {
    heading: 'Organization table',
    image: '/assets/images/Miniprojects/UsersList.webp',
    link: 'https://github.com/jose149/OrganizationTable',
  },
];
