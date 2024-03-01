<script setup lang="ts">
import AppLink from '@/components/shared/AppLink/AppLink.vue';
import { trackContactButtonClicked } from '@/libraries/helpers/trackData/trackingEvents';
import FadingCarousel from '@/components/shared/fadingCarroussel/FadingCarousel.vue';
import { ref } from 'vue';
import { Profile } from '../BannerViewModel';

interface BannerProps {
  logos: string[];
  heading: Profile;
}

const props = defineProps<BannerProps>();

const startCarroussel = ref<boolean>(false);

function initCarroussel(): void {
  startCarroussel.value = true;
}
</script>

<template>
  <div class="banner-presentation">
    <transition name="banner-carroussel" appear @after-enter="initCarroussel">
      <FadingCarousel
        class="banner-carroussel banner-center-column"
        :start="startCarroussel"
        :logos="props.logos"
      />
    </transition>
    <h1 class="banner-heading">
      <transition name="heading-1-main" appear>
        <span class="banner-heading-main">Jose Crespi Valero</span>
      </transition>
      <transition name="heading-1-sub" appear>
        <span class="banner-heading-sub">Front end engineer</span>
      </transition>
    </h1>
    <transition name="banner-link" appear>
      <AppLink
        class="banner-link"
        link="mailto:crespi.valero.jose@gmail.com"
        type="primary"
        @click="trackContactButtonClicked"
      >
        <template #linkContent>Contact</template>
      </AppLink>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.banner-presentation {
  height: 40%;
  display: grid;
  grid-template-rows: 30% max-content 1fr;
  justify-items: center;
  align-items: center;
  gap: 5rem;
  z-index: 1;

  .banner-carroussel {
    height: 100%;
    aspect-ratio: 1/1;
  }

  .banner-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    &-main {
      color: $color-primary;
      font: $font-heading-1-main;
      line-height: 0.8;
    }

    &-sub {
      color: $color-white;
      font: $font-heading-1-sub;
      line-height: 1;
    }
  }

  .banner-link {
    align-self: flex-start;
  }
}
</style>
