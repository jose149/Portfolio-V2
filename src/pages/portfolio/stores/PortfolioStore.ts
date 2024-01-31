import { ref } from 'vue';
import { defineStore } from 'pinia';
import { NavigationBarTextItem, Section } from '../models/PortfolioViewModel';
import { getOwnerLogoPath, getPortfolioSections } from '../models/PortfolioModel';
import type { Image } from '@/general/viewModel'
import { getImageURL } from '@/libraries/helpers/iamges/images';

export const usePortfolioStore = defineStore('PortfolioStore', () => {
  // State
  const sections = ref<Section[]>(getPortfolioSections())
  const ownerLogoPath = ref<string>(getOwnerLogoPath())

  // Actions

  function getNavigationTextItems():NavigationBarTextItem[]{
    return sections.value.map((section) => ({
      id: section.id,
      text: section.title,
      url: section.url,
    }))
  }

  function getOwnerLogoImageSource():string{
    return new URL(ownerLogoPath.value, import.meta.url).href;
  }


  // Getters

  return {
    // State
    sections,

    // Actions
    getNavigationTextItems,
    getOwnerLogoImageSource,

    // Getters
  };
});