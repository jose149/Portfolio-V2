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
      <span class="banner-heading-main">
        <transition name="electric-shine" appear>
          <span>Jose Crespi Valero</span>
        </transition>
      </span>

      <span class="banner-heading-sub">Front end developer</span>
    </h1>

    <a
      ref="button"
      class="cta"
      href="mailto:crespi.valero.jose@gmail.com"
      target="_blank"
      rel="noreferrer"
    >
      Contact
    </a>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.banner-presentation {
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  .banner-carroussel {
    align-self: center;
    width: 19.2rem;
    height: 19.2rem;
    margin-bottom: 3rem;
  }

  .banner-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    // -webkit-box-reflect: below -0.8rem linear-gradient(transparent 0%, transparent
    //       30%, rgba($color-primary-light, 0.1) 100%);

    &-main {
      color: $color-primary;
      font: $font-heading-1-main;
      line-height: 1;
    }

    &-sub {
      color: $color-white;
      font: $font-heading-1-sub;
      line-height: 1;
    }
  }

  .banner-phrase {
    color: rgba($color: #dadada, $alpha: 1);
    font: $font-link;
  }

  .cta {
    border-radius: $border-radius;
    padding: $button-padding;
    width: max-content;
    background: $button-cta-background;
    color: white;
    font: $font-button;
    text-transform: uppercase;
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
