<script setup lang="ts">
import AppLink from '@/components/shared/AppLink/AppLink.vue';
</script>

<template>
  <div class="banner-presentation">
    <h1 class="banner-heading">
      <transition name="heading-1-main" appear>
        <span class="banner-heading-main">Jose Crespi Valero</span>
      </transition>
      <transition name="heading-1-sub" appear>
        <span class="banner-heading-sub">Front end engineer</span>
      </transition>
    </h1>
    <transition name="banner-link" appear>
      <AppLink link="mailto:crespi.valero.jose@gmail.com" type="primary">
        <template #linkContent>Contact</template>
      </AppLink>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.banner-presentation {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  perspective: 100px;

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
      line-height: 0.8;
    }

    &-sub {
      color: $color-white;
      font: $font-heading-1-sub;
      line-height: 1;
    }
  }
}
</style>
