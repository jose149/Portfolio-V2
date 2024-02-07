import { ref } from 'vue';
import { defineStore } from 'pinia';
import {
  type NavigationBarTextItem,
  type Section,
} from '../models/PortfolioViewModel';
import {
  getOwnerLogoPath,
  getPortfolioSections,
} from '../models/PortfolioModel';

export const usePortfolioStore = defineStore('PortfolioStore', () => {
  const SMALL_DEVICE_THRESHOLD = 800;

  // State
  const sections = ref<Section[]>(getPortfolioSections());
  const ownerLogoPath = ref<string>(getOwnerLogoPath());

  const isSmallDevice = ref<boolean>(
    window.innerWidth < SMALL_DEVICE_THRESHOLD
  );

  // Actions

  function getNavigationTextItems(): NavigationBarTextItem[] {
    return sections.value.map((section) => ({
      id: section.id,
      text: section.title,
      url: section.url,
    }));
  }

  function getOwnerLogoImageSource(): string {
    return new URL(ownerLogoPath.value, import.meta.url).href;
  }

  // Getters

  return {
    // State
    sections,
    isSmallDevice,

    // Actions
    getNavigationTextItems,
    getOwnerLogoImageSource,

    // Getters
  };
});
