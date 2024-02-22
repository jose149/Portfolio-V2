<script setup lang="ts">
import AppLink from '@/components/shared/AppLink/AppLink.vue';
</script>

<template>
  <div class="banner-presentation">
    <h1 class="banner-heading">
      <span class="banner-heading-main">
        <transition name="electric-shine" appear>
          <span>Jose Crespi Valero</span>
        </transition>
      </span>

      <span class="banner-heading-sub">Front end engineer</span>
    </h1>

    <AppLink link="mailto:crespi.valero.jose@gmail.com" type="primary">
      <template #linkContent>Contact</template>
    </AppLink>
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
  gap: 5rem;

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
}
</style>
