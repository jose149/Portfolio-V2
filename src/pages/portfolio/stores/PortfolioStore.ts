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
import { HeaderConfig } from '@/modules/header/HeaderViewModel';
import { BannerConfig } from '@/modules/banner';
import { TechnologiesConfig } from '@/modules/technologies/technologiesViewModel';
import { shouldShowTechnologyModule } from './PortfolioStoreLogic';
import { ProjectsConfig } from '@/modules/projects/projectsViewModel';
import { elementIntersectionObserver } from '@/libraries/helpers/observers/intersectionObserver';

export const usePortfolioStore = defineStore('PortfolioStore', () => {
  const SMALL_DEVICE_THRESHOLD = 800;

  // State
  const sections = ref<Section[]>(getPortfolioSections());
  const ownerLogoPath = ref<string>(getOwnerLogoPath());

  const isSmallDevice = ref<boolean>(
    window.innerWidth < SMALL_DEVICE_THRESHOLD
  );

  // Actions
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

  function setSectionsIntersectionObserver(): void {
    sections.value.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (!sectionElement) {
        throw new Error(
          `section HTML Element ${section.name} with Id ${section.id} not found in the Dom`
        );
      }
      elementIntersectionObserver(sectionElement, setActive);

      function setActive(isIntersected: boolean): void {
        if (!sectionElement) {
          throw new Error(
            `section HTML Element ${section.name} with Id ${section.id} not found in the Dom`
          );
        }
        sections.value.forEach((section) => (section.active = false));
        console.log('setting all to false');
        if (isIntersected) {
          const currentSection = sections.value.find(
            (section) => section.id === `${sectionElement.id}`
          );
          if (currentSection) {
            currentSection.active = true;
            console.log(currentSection.name, currentSection.active);
          }
        }
      }
    });
  }

  // Getters

  const headerConfig = computed<HeaderConfig>(() => {
    console.log('headerConfig');
    return { logo: getOwnerLogoImageSource(), sections: sections.value };
  });

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
    setSectionsIntersectionObserver,

    // Getters
    headerConfig,
    bannerConfig,
    technologiesConfig,
    projectsConfig,
  };
});
