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
  <div class="banner-heading">
    <FadingCarousel class="banner-carroussel" :logos="props.logos!" />
    <h1 class="heading-1 heading">
      <span class="heading-1-main">{{ props.heading.name }}</span>
      <span class="heading-1-sub">{{ props.heading.job }}</span>
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
.banner-heading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 5rem;
  @media only screen and (max-width: $bp-medium) {
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
    box-shadow: -2px 2px 5px rgba($color: #000000, $alpha: 0.4);
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
