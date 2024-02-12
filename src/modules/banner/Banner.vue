<script lang="ts" setup>
import { BannerConfig } from '.';
import BannerPresentation from './components/BannerPresentation.vue';
import BannerGridLayout from './layouts/BannerGridLayout.vue';

interface BannerProps {
  config: BannerConfig;
}

const props = defineProps<BannerProps>();
</script>

<template>
  <section class="banner">
    <BannerGridLayout>
      <template #left3Column>
        <img
          class="banner-image"
          :src="props.config.profileImage"
          alt="Profile photo"
        />
      </template>
      <template #right5Column>
        <BannerPresentation
          :heading="props.config.heading"
          :logos="props.config.logos"
        />
      </template>
    </BannerGridLayout>
    <div class="banner-backgorund-square"></div>
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.banner {
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    -20deg,
    $color-black-dark 0%,
    $color-black-light 90%,
    $color-black-dark 120%
  );

  @media only screen and (max-width: $bp-large) {
    height: 100dvh;
  }

  .banner-image {
    margin-bottom: 10vh;
    max-height: 70%;
    width: auto;

    @media only screen and (max-width: $bp-large) {
      height: 60%;
      margin-bottom: 6vh;
    }
  }

  .banner-backgorund-square {
    position: absolute;
    bottom: 0;
    left: 0;
    border-top-right-radius: 15px;
    height: 10vh;
    width: 45%;
    // background: linear-gradient(
    //   180deg,
    //   $color-black-light 0%,
    //   $color-black-light-2 100%
    // );
    background-color: #1d1d1d;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23050505' fill-opacity='0.34' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

    @media only screen and (max-width: $bp-large) {
      height: 6vh;
      width: 100%;
    }
  }
}
</style>
