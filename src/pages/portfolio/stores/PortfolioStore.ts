import { computed } from 'vue';
import { defineStore } from 'pinia';
import { Section } from '../models/PortfolioViewModel';
import { portfolioSections } from '../models/PortfolioModel';

export const usePortfolioStore = defineStore('PortfolioStore', () => {
  // State

  // Actions

  // Getters
  const sections = computed<Section[]>(()=>portfolioSections)

  return {
    // Actions

    // Getters
    sections
  };
});