import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { type Section } from '../models/PortfolioViewModel';
import {
  getBannerImageSrc,
  getProjects,
  getOwnerLogoPath,
  getPortfolioSections,
  getProfile,
  getTechnologyModules,
} from '../models/PortfolioModel';
import { HeaderConfig } from '@/modules/header/HeaderViewModel';
import { BannerConfig } from '@/modules/banner';
import { TechnologiesConfig } from '@/modules/technologies/technologiesViewModel';
import {
  getButtonPosition,
  shouldCollapseTechnologyModule,
} from './PortfolioStoreLogic';
import { ProjectsConfig } from '@/modules/projects/projectsViewModel';
import { elementIntersectionObserver } from '@/libraries/helpers/observers/intersectionObserver';
import { useWindowSize } from '@vueuse/core';
import { getTechnologies } from '../models/data/technologies';

export const usePortfolioStore = defineStore('PortfolioStore', () => {
  const SMALL_DEVICE_THRESHOLD = 1000;

  // State
  const sections = ref<Section[]>(getPortfolioSections());
  const ownerLogoPath = ref<string>(getOwnerLogoPath());

  const isSmallDevice = ref<boolean>(
    window.innerWidth < SMALL_DEVICE_THRESHOLD
  );

  const { height: viewportHeight } = useWindowSize();

  // Actions
  function getOwnerLogoImageSource(): string {
    return new URL(ownerLogoPath.value, import.meta.url).href;
  }

  function getBannerCarrousselLogos(): string[] {
    return getTechnologies()
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

      function setActive(entries: IntersectionObserverEntry[]): void {
        if (!sectionElement) {
          throw new Error(
            `section HTML Element ${section.name} with Id ${section.id} not found in the Dom`
          );
        }

        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          const section: Section | undefined = sections.value.find(
            (section) => section.id === sectionId
          );

          if (section) {
            const sectionHeight = entry.boundingClientRect.height;
            const sizeProportion = sectionHeight / viewportHeight.value;
            const relativeTntersectionRatio =
              entry.intersectionRatio * sizeProportion;

            section.visibilityRatio = relativeTntersectionRatio;
          }
        });
      }
    });
  }

  function scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }
    element.scrollIntoView({ behavior: 'smooth' });
  }

  // Getters
  const currentActiveSection = computed<string>(() => {
    const copiedSections = [...sections.value];
    const sortedSections = copiedSections.sort(
      (sectionA, sectionB) =>
        sectionB.visibilityRatio - sectionA.visibilityRatio
    );

    return sortedSections[0].id;
  });

  const headerConfig = computed<HeaderConfig>(() => {
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
        startCollapsed: shouldCollapseTechnologyModule(technologyModule.type),
      })),
    };
  });

  const projectsConfig = computed<ProjectsConfig>(() => ({
    mainProjects: getProjects(),
    subProjects: [],
    buttonPosition: getButtonPosition(isSmallDevice.value),
  }));

  return {
    // State
    sections,
    isSmallDevice,

    // Actions
    setSectionsIntersectionObserver,
    scrollTo,

    // Getters
    currentActiveSection,
    headerConfig,
    bannerConfig,
    technologiesConfig,
    projectsConfig,
  };
});
