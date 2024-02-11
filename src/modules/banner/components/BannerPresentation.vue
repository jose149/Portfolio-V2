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
      <span class="banner-heading-main">{{ props.heading.name }}</span>
      <span class="banner-heading-sub">{{ props.heading.job }}</span>
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
    gap: 2rem;

    @media only screen and (max-width: $bp-medium) {
      align-items: center;
    }

    &-main {
      color: $color-primary-light;
      text-transform: uppercase;
      // TODO Move font into a variable
      font-family: $font-primary;
      font-size: $heading-1-main-font-size;
      font-weight: $heading-1-font-weight;

      line-height: 100%;
      -webkit-box-reflect: below -0.8rem linear-gradient(transparent 0%, transparent
            30%, rgba($color-primary-light, 0.1) 100%);

      // TODO Move animation to a vue transition
      animation: animate 2s linear 2.5s;

      @media only screen and (max-width: $bp-medium) {
        font-size: calc($heading-1-main-font-size * 0.8);
      }
    }
    &-sub {
      // TODO Move font into a variable
      font-family: $font-primary;
      font-size: $heading-1-sub-font-size;
      font-weight: $heading-1-font-weight;

      letter-spacing: calc(2px - 1px);
      color: $color-white;

      @media only screen and (max-width: $bp-medium) {
        font-size: calc($heading-1-sub-font-size * 0.8);
      }
    }
  }
  .cta {
    border-radius: $border-radius;
    padding: $button-padding;
    width: max-content;
    background: linear-gradient(
      135deg,
      $color-primary-light 0%,
      $color-primary-dark 100%
    );
    color: white;

    // TODO Move font into a variable
    font-size: $button-font-size;
    font-weight: $button-font-weight;

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

@keyframes animate {
  50% {
    color: white;
    text-shadow: 0 0 1.5rem $color-primary-light;
  }
}
</style>
