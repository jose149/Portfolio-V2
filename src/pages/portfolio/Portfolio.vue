<script setup lang="ts">
import Header from '@/modules/header/Header.vue';
import Banner from '@/modules/banner/Banner.vue';
import Projects from '@/modules/projects/Projects.vue';
import Technologies from '@/modules/technologies/Technologies.vue';
import StickyBottomNavigationBar from '@/components/shared/navigationBar/StickyBottomNavigationBar.vue';
import AboutMe from '@/modules/aboutMe/AboutMe.vue';
import Contact from '@/modules/contact/Contact.vue';
import Footer from '@/modules/footer/Footer.vue';
import { usePortfolioStore } from '@/pages/portfolio/stores/PortfolioStore';
import { onMounted } from 'vue';

const portfolioStore = usePortfolioStore();
const SMALL_DEVICE_THRESHOLD = 800;
window.addEventListener('resize', () => {
  portfolioStore.isSmallDevice = window.innerWidth < SMALL_DEVICE_THRESHOLD;
});
onMounted(() => {
  portfolioStore.setSectionsIntersectionObserver();
});
</script>

<template>
  <Header
    v-if="!portfolioStore.isSmallDevice"
    class="header"
    :config="portfolioStore.headerConfig"
    :active-section="portfolioStore.currentActiveSection"
    @navigation-item-clicked="portfolioStore.scrollTo"
  />
  <StickyBottomNavigationBar
    v-else
    :items="portfolioStore.headerConfig.sections"
    :active-item="portfolioStore.currentActiveSection"
    @item-clicked="portfolioStore.scrollTo"
  />
  <main>
    <Banner
      id="section-1"
      class="container-full-screen"
      :config="portfolioStore.bannerConfig"
    />
    <Technologies
      id="section-2"
      class="container-medium"
      :config="portfolioStore.technologiesConfig"
    />
    <Projects
      id="section-3"
      class="container-medium"
      :config="portfolioStore.projectsConfig"
    />
    <AboutMe id="section-4" class="container-medium" />
    <Contact id="section-5" class="container-medium" />
  </main>
  <Footer />
</template>

<style lang="scss">
#app {
  width: 100%;
  background-color: $background-color-1;
}
</style>
