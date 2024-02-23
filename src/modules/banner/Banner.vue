<script lang="ts" setup>
import { BannerConfig } from '.';
import BannerPresentation from './components/BannerPresentation.vue';
import FadingCarousel from '@/components/shared/fadingCarroussel/FadingCarousel.vue';

interface BannerProps {
  config: BannerConfig;
}

const props = defineProps<BannerProps>();
</script>

<template>
  <section class="banner banner-grid-layout eight-column-grid">
    <img
      class="banner-image banner-left-column"
      :src="props.config.profileImage"
      alt="Profile photo"
    />
    <FadingCarousel
      class="banner-carroussel banner-center-column row1"
      :logos="props.config.logos"
    />
    <BannerPresentation
      class="banner-center-column banner-presentation"
      :heading="props.config.heading"
    />
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.banner {
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    -20deg,
    $background-color-1 50%,
    $background-color-2 110%
  );
  @media only screen and (max-width: $bp-medium) {
    height: 90vh;
  }

  .banner-image {
    max-height: 70%;
    width: 100%;
    filter: brightness(0.8);
    object-fit: cover;
    object-position: top;
    @media only screen and (max-width: $bp-largest) {
      max-height: 70%;
      width: auto;
      object-fit: cover;
      object-position: top;
    }
  }

  .banner-carroussel {
    grid-row: 2;
    align-self: flex-start;
    width: 19.2rem;
    height: 19.2rem;
  }

  .banner-presentation {
    align-self: flex-start;
    grid-row: 3;
  }

  .banner-backgorund-square {
    position: absolute;
    bottom: 0;
    left: 0;
    border-top-right-radius: 15px;
    height: 5vh;
    width: 50%;
    background-color: $background-color-3;
  }
}

.banner-grid-layout {
  position: relative;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  align-items: center;
  .banner-left-column {
    position: absolute;
    height: 100%;
    grid-column: 2/5;
    align-self: end;
    justify-self: start;
    display: flex;
    align-items: end;
    z-index: 0;

    @media only screen and (max-width: $bp-large) {
      justify-self: start;
    }

    @media only screen and (max-width: $bp-medium) {
      justify-self: flex-end;
      grid-column: 1/5;
    }

    @media only screen and (max-width: $bp-smallest) {
      grid-column: 2/6;
    }
  }

  .banner-center-column {
    grid-column: 1/-1;
    justify-self: center;
    z-index: 1;
  }
}
</style>
