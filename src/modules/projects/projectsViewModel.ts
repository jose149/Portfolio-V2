export interface ProjectsConfig {
  mainProjects: MainProject[];
  subProjects: SubProject[];
}

export interface Project {
  heading: string;
  logos: string[];
  image: string;
  Link: string;
  description?: string;
}

export interface MainProject {
  heading: string;
  logos: string[];
  image: string;
  link: string;
  description: string;
}

export interface SubProject {
  heading: string;
  image: string;
  link: string;
}
