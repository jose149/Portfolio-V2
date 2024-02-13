<script setup lang="ts">
import { Profile } from '../BannerViewModel';
import FadingCarousel from '@/components/shared/fadingCarroussel/FadingCarousel.vue';

interface BannerHeadingProps {
  logos: string[];
  heading: Profile;
}

const props = defineProps<BannerHeadingProps>();
</script>

<template>
  <div class="banner-presentation">
    <FadingCarousel class="banner-carroussel" :logos="props.logos!" />
    <h1 class="banner-heading">
      <transition name="electric-shine" appear>
        <span class="banner-heading-main">Jose Crespi Valero</span>
      </transition>

      <span class="banner-heading-sub">Front end developer</span>
    </h1>
    <button
      class="cta"
      href="mailto:crespi.valero.jose@gmail.com"
      target="_blank"
      rel="noreferrer"
    >
      Contact
    </button>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.banner-presentation {
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 5rem;

  @media only screen and (max-width: $bp-large) {
    align-items: center;
  }

  .banner-carroussel {
    align-self: center;
    width: 19.2rem;
    height: 19.2rem;
  }

  .banner-heading {
    display: flex;
    flex-direction: column;
    // -webkit-box-reflect: below -0.8rem linear-gradient(transparent 0%, transparent
    //       30%, rgba($color-primary-light, 0.1) 100%);

    @media only screen and (max-width: $bp-medium) {
      align-items: center;
    }

    &-main {
      color: $color-primary-light;
      font: $font-heading-1-main;

      @media only screen and (max-width: $bp-medium) {
        font-size: calc($heading-1-main-font-size * 0.8);
      }
    }

    &-sub {
      color: $color-white;
      font: $font-heading-1-sub;

      @media only screen and (max-width: $bp-medium) {
        font-size: calc($heading-1-sub-font-size * 0.8);
        letter-spacing: calc($heading-1-sub-letter-spacing * 0.8);
      }
    }
  }

  .cta {
    border-radius: $border-radius;
    padding: $button-padding;
    width: max-content;
    background: $button-cta-background;
    color: white;
    font: $font-button;
    cursor: pointer;
    transition: all $transition-time;

    @media (hover: hover) {
      &:hover {
        transform: translateY(-2px);
        transform-origin: center;
        filter: brightness(1.1);
      }
    }
  }
}
</style>
