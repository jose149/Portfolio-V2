import { Profile } from '@/modules/banner/BannerViewModel';
import { type Section } from './PortfolioViewModel';
import { PROFILE, sections } from './data/data';
import {
  Technology,
  ITechnologyModule,
  technologyModules,
  getTechnologies,
  TechnologyType,
} from './data/technologies';
import { mainProjects, subProjects } from './data/projects';
import { Project } from '@/modules/projects/projectsViewModel';

export function getPortfolioSections(): Section[] {
  return sections;
}

export function getOwnerLogoPath(): string {
  return '/assets/images/logos/logo.webp';
}

export function getProfile(): Profile {
  return PROFILE;
}

export function setUpPortfolioModel(): void {
  const technologies = getTechnologies();
  getTechnologiesDictionary(technologies);
}

function getTechnologiesDictionary(
  technologies: Technology[]
): Record<TechnologyType, Technology> {
  const technologiesDicctionary: Record<string, Technology> = {};

  technologies.forEach((technology) => {
    technologiesDicctionary[technology.name] = technology;
  });

  return technologiesDicctionary;
}

export function getBannerImageSrc(): string {
  return '/assets/images/Profile/perfil1.webp';
}

export function getTechnologyModules(): ITechnologyModule[] {
  return technologyModules;
}

export function getMainProjects(): Project[] {
  return mainProjects;
}

export function getSubProjects(): Project[] {
  return subProjects;
}
