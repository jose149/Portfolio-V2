import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { type Section } from '../models/PortfolioViewModel';
import {
  getBannerImageSrc,
  getMainTechnologies,
  getOwnerLogoPath,
  getPortfolioSections,
  getProfile,
} from '../models/PortfolioModel';
import {
  HeaderConfig,
  NavigationBarLink,
} from '@/modules/header/HeaderViewModel';
import { BannerConfig } from '@/modules/banner';

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

  return {
    // State
    sections,
    isSmallDevice,

    // Actions

    // Getters
    headerConfig,
    bannerConfig,
  };
});
