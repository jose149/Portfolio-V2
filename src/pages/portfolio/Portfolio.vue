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
  />
  <StickyBottomNavigationBar
    v-else
    :items="portfolioStore.headerConfig.sections"
  />
  <main>
    <Banner id="section-1" :config="portfolioStore.bannerConfig" />
    <Technologies id="section-2" :config="portfolioStore.technologiesConfig" />
    <Projects id="section-3" :config="portfolioStore.projectsConfig" />
    <AboutMe id="section-4" />
    <Contact id="section-5" />
  </main>
  <Footer />
</template>

<style lang="scss">
@import '@/styles/main.scss';
#app {
  width: 100%;
  background-color: $background-color-1;
  overflow: hidden;
}
// .contact-icon {
//   position: fixed;
//   bottom: 10rem;
//   right: 5rem;
//   background-color: $color-primary;
//   padding: 1.5rem;
//   border-radius: 50%;
//   transition: all 0.5s;
//   z-index: 2;
//   box-shadow: 0 0 0.5rem black;
//   filter: drop-shadow(0 0 0.5rem black);
// }
</style>
