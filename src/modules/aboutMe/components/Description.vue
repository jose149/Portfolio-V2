<script setup lang="ts">
import AppLink from '@/components/shared/AppLink/AppLink.vue';
</script>

<template>
  <div class="description">
    <header class="description-heading">
      <span class="primary">Hi,</span>
      I'm Jose
    </header>
    <div class="description-text">
      <p class="description-paragraph">
        I'm a passionated front end engineer, focused on developing the best
        solutions, in the most atomic and profitable way, based on the customers
        needs.
      </p>
      <p class="description-paragraph">
        Recently I have been centered on continuous delivery and integration,
        design patterns, software quality techniques and best practices.
      </p>
    </div>
    <AppLink
      :type="'primary'"
      link="/documents/CV Jose Crespi UK.pdf"
      downloadName="CV Jose Crespi"
    >
      <template #linkContent>Download CV</template>
    </AppLink>
  </div>
</template>

<style scoped lang="scss">
.description {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 3rem;
  z-index: 1;
  @media only screen and (max-width: $bp-large) {
    align-items: center;
  }
  &-heading {
    font-size: 2.4rem;
    line-height: 1;
    font-family: $font-primary;
    font-weight: 400;
    line-height: 1;
    color: $color-white;
    .primary {
      color: $color-primary-light;
    }
  }

  &-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &-paragraph {
    color: $color-white;
    font-size: 1.6rem;
    font-weight: 300;
    text-align: start;
  }
}
</style>
