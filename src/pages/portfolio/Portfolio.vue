<script setup lang="ts">
import Header from '@/modules/header/Header.vue'
import Banner from '@/components/Banner.vue'
import Technologies from '@/components/Technologies.vue'
import Projects from '@/components/Projects.vue'
import AboutMe from '@/components/AboutMe.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
import { usePortfolioStore } from './stores/PortfolioStore'

const portfolioStore = usePortfolioStore()
</script>

<template>
  <Header :image="''" :links="portfolioStore.sections"/>
  <main>
    <Banner id="section-0"/>
    <AboutMe id="section-1"/>
    <Technologies id="section-2"/>
    <Projects id="section-3"/>
    <Contact id="section-4"/>
  </main>
  <Footer/>
</template>

<style lang="scss">
@import "@/styles/main.scss";
#app{
  width: 100%;
  background-color: $color-background;
  overflow: hidden;
}
.contact-icon{
  position: fixed;
  bottom: 10rem;
  right: 5rem;
  background-color: $color-primary;
  padding: 1.5rem;
  border-radius: 50%;
  transition: all 0.5s;
  z-index: 2;
  box-shadow: 0 0 .5rem black;
  filter: drop-shadow(0 0 .5rem black);
}
.dark-square{
  position: absolute;
  top: 115vh;
  left: 0;
  height: 165vh;
  width: 50%;
  background-color: $color-background2;
  z-index: 1;
}
</style>
