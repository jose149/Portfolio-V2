<script lang="ts" setup>
import FadingCarousel from '@/components/shared/fadingCarroussel/FadingCarousel.vue';
import { BannerConfig } from '.';

interface BannerProps {
  config: BannerConfig;
}

const props = defineProps<BannerProps>();
</script>

<template>
  <section class="banner">
    <img
      class="banner-image"
      :src="props.config.profileImage"
      alt="Profile photo"
    />
    <div class="banner-square"></div>

    <article class="banner-content">
      <FadingCarousel class="banner-carroussel" :logos="props.config.logos!" />
      <h1 class="heading-1 heading">
        <span class="heading-1-main">{{ props.config.heading.name }}</span>
        <span class="heading-1-sub">{{ props.config.heading.job }}</span>
      </h1>
      <button
        class="cta"
        href="mailto:crespi.valero.jose@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        Contact
      </button>
    </article>
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.banner {
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    0deg,
    $color-black-dark 0%,
    $color-black-light 100%
  );
  display: grid;
  grid-template-columns: 1fr repeat(8, 9vw) 1fr;
  align-items: center;

  @media only screen and (max-width: $bp-large) {
    height: 100dvh;
  }
  .banner-image {
    align-self: flex-end;
    position: absolute;
    bottom: 10vh;
    justify-self: center;
    grid-column: 2 / 5;
    max-height: 70%;
    width: auto;
    z-index: 0;
    @media only screen and (max-width: $bp-large) {
      height: 60%;
      justify-self: end;
      grid-column: 2 / 6;
    }
  }

  .banner-square {
    position: absolute;
    bottom: 0;
    left: 0;
    border-top-right-radius: 15px;
    height: 10vh;
    width: 50%;
    background: linear-gradient(
      180deg,
      $color-black-light 0%,
      $color-black-light-2 100%
    );
    z-index: 0;
  }

  .banner-content {
    justify-self: end;
    z-index: 1;
    grid-column: 5/-2;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 5rem;
    @media only screen and (max-width: $bp-medium) {
      justify-self: center;
      grid-column: 2 / -2;
      align-items: center;
    }
    .banner-carroussel {
      align-self: center;
      width: 19.2rem;
      height: 19.2rem;
    }

    .heading {
      display: flex;
      flex-direction: column;

      @media only screen and (max-width: $bp-medium) {
        align-items: center;
      }
    }
    .cta {
      line-height: 1.6;
      width: max-content;
      position: relative;
      padding: $button-padding;
      font-size: $button-font-size;
      font-weight: $button-font-weight;
      cursor: pointer;
      transition: all $transition-time;
      border-radius: $border-radius;
      background: linear-gradient(
        135deg,
        $color-primary-light 0%,
        $color-primary-dark 100%
      );
      color: white;
      @media (hover: hover) {
        &:hover {
          transform: translateY(-2px);
          transform-origin: center;
          filter: brightness(1.1);
        }
      }
    }
  }
}
</style>
