import { computed } from 'vue';
import { defineStore } from 'pinia';
import { Section } from '../models/PortfolioViewModel';
import { getOwnerLogo, portfolioSections } from '../models/PortfolioModel';
import type { Image } from '@/general/viewModel'
import { getImageURL } from '@/libraries/helpers/iamges/images';

export const usePortfolioStore = defineStore('PortfolioStore', () => {
  // State

  // Actions

  // Getters
  const sections = computed<Section[]>(()=>portfolioSections)
  const logoImage = computed<Image>(()=> {
    const ownerLogo = getOwnerLogo()
    return {
      src: getImageURL(ownerLogo).href,
      alt: ownerLogo.alt
    }
    })

  return {
    // Actions

    // Getters
    sections,
    logoImage
  };
});