export interface ProjectsConfig {
  projects: Project[];
}

export interface Project {
  name: string;
  image: string;
  link: string;
  description?: string;
  organisationLogo?: string;
}
