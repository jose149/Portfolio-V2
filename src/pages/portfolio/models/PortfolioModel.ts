import { Profile } from '@/modules/banner/BannerViewModel';
import { type Section } from './PortfolioViewModel';
import { PROFILE, sections } from './data/data';
import { ITechnology, getMainTechnologiesFromData } from './data/technologies';

export function getPortfolioSections(): Section[] {
  return sections;
}

export function getOwnerLogoPath(): string {
  return '/assets/images/logos/logo.png';
}

export function getProfile(): Profile {
  return PROFILE;
}

export function getMainTechnologies(): ITechnology[] {
  return getMainTechnologiesFromData();
}

export function getBannerImageSrc(): string {
  return '/assets/images/Profile/perfil1.webp';
}
