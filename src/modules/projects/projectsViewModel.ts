export interface ProjectsConfig {
  mainProjects: Project[];
  subProjects: Project[];
  buttonPosition: Position;
}

export interface Project {
  name: string;
  image: string;
  link: string;
  repositoryUrl?: string;
  description?: string;
  organisationLogo?: string;
}

export enum Position {
  Top = 'top',
  Bottom = 'bottom',
}
