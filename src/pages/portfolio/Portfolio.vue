<script setup lang="ts">
import Header from '@/modules/header/Header.vue';
import Banner from '@/modules/banner/Banner.vue';
import StickyBottomNavigationBar from '@/components/shared/navigationBar/StickyBottomNavigationBar.vue';
// import Technologies from '@/components/Technologies.vue';
// import Projects from "@/components/Projects.vue";
// import AboutMe from '@/components/AboutMe.vue'
// import Contact from '@/components/Contact.vue'
// import Footer from '@/components/Footer.vue'
import { usePortfolioStore } from '@/pages/portfolio/stores/PortfolioStore';

const portfolioStore = usePortfolioStore();
const SMALL_DEVICE_THRESHOLD = 800;
window.addEventListener('resize', () => {
  portfolioStore.isSmallDevice = window.innerWidth < SMALL_DEVICE_THRESHOLD;
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
    :items="portfolioStore.headerConfig.links"
  />
  <main>
    <Banner id="section-0" :config="portfolioStore.bannerConfig" />
    <!-- <Technologies id="section-2" /> -->
    <!-- <AboutMe id="section-1"/> -->
    <Projects id="section-3" />
    <!-- <Contact id="section-4"/> -->
  </main>
  <!-- <Footer/> -->
</template>

<style lang="scss">
@import '@/styles/main.scss';
#app {
  width: 100%;
  background-color: $color-background;
  overflow: hidden;
}
.header {
  height: 60px;
}
.contact-icon {
  position: fixed;
  bottom: 10rem;
  right: 5rem;
  background-color: $color-primary;
  padding: 1.5rem;
  border-radius: 50%;
  transition: all 0.5s;
  z-index: 2;
  box-shadow: 0 0 0.5rem black;
  filter: drop-shadow(0 0 0.5rem black);
}
.dark-square {
  position: absolute;
  top: 115vh;
  left: 0;
  height: 165vh;
  width: 50%;
  background-color: $color-background2;
  z-index: 1;
}
</style>
