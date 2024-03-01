<script lang="ts" setup>
import { BannerConfig } from '.';
import BannerPresentation from './components/BannerPresentation.vue';

interface BannerProps {
  config: BannerConfig;
}

const props = defineProps<BannerProps>();
</script>

<template>
  <section class="banner">
    <div class="container-medium banner-container">
      <img
        class="banner-image banner-left-column"
        :src="props.config.profileImage"
        alt="Profile photo"
      />

      <BannerPresentation
        :heading="props.config.heading"
        :logos="props.config.logos"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.banner {
  height: 100vh;
  background: linear-gradient(
    -20deg,
    $background-color-1 50%,
    $background-color-2 110%
  );

  .banner-container {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .banner-image {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 70%;
      width: auto;
      filter: brightness(0.8);
      object-fit: cover;
      object-position: top;

      @media only screen and (max-width: $bp-largest) {
        left: auto;
        right: 50vw;
        height: 60%;
      }
    }
  }
}
</style>
