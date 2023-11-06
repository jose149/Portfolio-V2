<script setup lang="ts">
import NavigationBar from '@/components/sharedComponents/NavigationBar.vue'
import Banner from '@/components/Banner.vue'
import Technologies from '@/components/Technologies.vue'
import Projects from '@/components/Projects.vue'
import AboutMe from '@/components/AboutMe.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
import { StateKey, setUpState } from '@/state/state'
import { onMounted, provide } from 'vue'
import { elementIntersectionObserver } from '@/libraries/helpers/IntersectionObserver'
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue'

const PortfolioState = setUpState()
provide(StateKey, PortfolioState);

onMounted(() => {
  const sectionsElement = PortfolioState.sections.value.map((section) => document.querySelector(section.id) as HTMLElement)

  sectionsElement.forEach((sectionElement) => elementIntersectionObserver(sectionElement, (isIntersected) => {
    if(isIntersected){
      PortfolioState.sections.value.forEach((section) => section.isWatching = false);
      PortfolioState.sections.value.find((section) => section.id === `#${sectionElement.id}`)!.isWatching = true;
    }
  }))
  
})
</script>

<template>
  <a v-if="PortfolioState.isSmallDevice.value" aria-label="Open mail app to write me an email" class="contact-icon" href="mailto:crespi.valero.jose@gmail.com">
    <SvgIcon :name="'Mail'" :color="'white'" :size="{height: 20, width:20}"></SvgIcon>
  </a>
  <nav>
    <NavigationBar/>
  </nav>
  <header>
    <Banner id="section-0"/>
  </header>
  <main>
    <Technologies id="section-1"/>
    <Projects id="section-2"/>
    <AboutMe id="section-3"/>
    <Contact id="section-4"/>
  </main>
  <footer>
    <Footer/>
  </footer>
</template>

<style lang="scss">
@import "./styles/main.scss";
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
