<template>
  <section class="section section-banner">
    <img
      class="banner-image"
      src="/assets/images/Profile/perfil1.webp"
      alt="Profile photo"
    />
    <article class="banner-content">
      <FadingCarousel class="carrousel" :logos="mainTechnologylogos!" />
      <h1 class="heading-1 heading">
        <span class="heading-1-main">Jose Crespi Valero</span>
        <span class="heading-1-sub">Front end developer</span>
      </h1>
      <a
        class="cta"
        href="mailto:crespi.valero.jose@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        Contact
      </a>
    </article>
  </section>
</template>

<script lang="ts" setup>
import FadingCarousel from '@/components/sharedComponents/FadingCarousel.vue';
import { getMainTechnologies } from '@/libraries/data/technologies';

const mainTechnologies = getMainTechnologies();
const mainTechnologylogos = mainTechnologies
  .map((technology) => technology.iconName)
  .filter((icon) => !!icon);
</script>

<style scoped lang="scss">
@import '@/styles/main.scss';
@import '@/styles/layout/Banner.scss';
</style>
