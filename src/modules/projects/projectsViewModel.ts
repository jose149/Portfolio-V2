import { Technology } from '@/pages/portfolio/models/data/technologies';

export interface ProjectsConfig {
  mainProjects: Project[];
  subProjects: Project[];
  buttonPosition: Position;
}

export interface Project {
  name: string;
  image: string;
  link: string;
  technologies: Technology[];
  repositoryUrl?: string;
  description?: string;
  organisationLogo?: string;
}

export enum Position {
  Top = 'top',
  Bottom = 'bottom',
}
