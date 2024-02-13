<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Profile } from '../BannerViewModel';
import FadingCarousel from '@/components/shared/fadingCarroussel/FadingCarousel.vue';

interface BannerHeadingProps {
  logos: string[];
  heading: Profile;
}

const props = defineProps<BannerHeadingProps>();

const button = ref<HTMLDivElement | null>(null);
const presentationMargin = ref<string>();
onMounted(() => {
  if (!button.value) {
    return;
  }
  const resizeObserver = new ResizeObserver(setButttonWidth);

  resizeObserver.observe(button.value);
  setButttonWidth();

  function setButttonWidth() {
    if (!button.value) {
      return;
    }
    presentationMargin.value = `-${button.value.clientWidth / 2}px`;
  }
});
</script>

<template>
  <div class="banner-presentation">
    <FadingCarousel class="banner-carroussel" :logos="props.logos!" />
    <h1 class="banner-heading">
      <transition name="electric-shine" appear>
        <span class="banner-heading-main">Hello Im Jose Crespi Valero</span>
      </transition>

      <span class="banner-heading-sub">Front end developer</span>
    </h1>

    <button
      ref="button"
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
  gap: 2.5rem;
  margin-left: v-bind(presentationMargin);

  @media only screen and (max-width: $bp-large) {
    align-items: center;
  }

  .banner-carroussel {
    align-self: center;
    width: 19.2rem;
    height: 19.2rem;
    margin-bottom: 3rem;
  }

  .banner-heading {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    // -webkit-box-reflect: below -0.8rem linear-gradient(transparent 0%, transparent
    //       30%, rgba($color-primary-light, 0.1) 100%);

    @media only screen and (max-width: $bp-large) {
      align-items: center;
    }

    &-main {
      color: $color-primary-light;
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
