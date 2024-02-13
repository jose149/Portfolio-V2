import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { type Section } from '../models/PortfolioViewModel';
import {
  getBannerImageSrc,
  getMainProjects,
  getMainTechnologies,
  getOwnerLogoPath,
  getPortfolioSections,
  getProfile,
  getSubProjects,
  getTechnologyModules,
} from '../models/PortfolioModel';
import {
  HeaderConfig,
  NavigationBarLink,
} from '@/modules/header/HeaderViewModel';
import { BannerConfig } from '@/modules/banner';
import { TechnologiesConfig } from '@/modules/technologies/technologiesViewModel';
import { shouldShowTechnologyModule } from './PortfolioStoreLogic';
import { ProjectsConfig } from '@/modules/projects/projectsViewModel';

export const usePortfolioStore = defineStore('PortfolioStore', () => {
  const SMALL_DEVICE_THRESHOLD = 800;

  // State
  const sections = ref<Section[]>(getPortfolioSections());
  const ownerLogoPath = ref<string>(getOwnerLogoPath());

  const isSmallDevice = ref<boolean>(
    window.innerWidth < SMALL_DEVICE_THRESHOLD
  );

  // Actions
  function getNavigationBarLinks(): NavigationBarLink[] {
    return sections.value.map((section) => ({
      id: section.id,
      name: section.name,
      src: section.url,
      iconName: section.iconName,
      isHighlighted: section.isHighlighted,
    }));
  }

  function getOwnerLogoImageSource(): string {
    return new URL(ownerLogoPath.value, import.meta.url).href;
  }

  function getBannerCarrousselLogos(): string[] {
    return getMainTechnologies()
      .map((technology) => technology.iconName)
      .filter((icon) => !!icon);
  }

  function getBannerImage(): string {
    return getBannerImageSrc();
  }

  // Getters

  const headerConfig = computed<HeaderConfig>(() => ({
    logo: getOwnerLogoImageSource(),
    links: getNavigationBarLinks(),
  }));

  const bannerConfig = computed<BannerConfig>(() => ({
    heading: getProfile(),
    logos: getBannerCarrousselLogos(),
    profileImage: getBannerImage(),
  }));

  const technologiesConfig = computed<TechnologiesConfig>(() => {
    const technologyModules = getTechnologyModules();
    return {
      technologyModules: technologyModules.map((technologyModule) => ({
        name: technologyModule.type,
        figures: technologyModule.technologies.map((technology) => {
          return {
            caption: technology.name,
            iconName: technology.iconName,
          };
        }),
        startCollapsed: shouldShowTechnologyModule(technologyModule.type),
      })),
    };
  });

  const projectsConfig = computed<ProjectsConfig>(() => ({
    mainProjects: getMainProjects(),
    subProjects: getSubProjects(),
  }));

  return {
    // State
    sections,
    isSmallDevice,

    // Actions

    // Getters
    headerConfig,
    bannerConfig,
    technologiesConfig,
    projectsConfig,
  };
});
