<script lang="ts" setup>
import Presentation from './components/Presentation.vue';
import Description from './components/Description.vue';
</script>

<template>
  <section class="section-about-me eight-column-grid">
    <h2 class="about-me-heading">About me</h2>
    <Presentation />
    <Description />
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.section-about-me {
  position: relative;
  background: $background-color-1;
  padding: 5rem 0;
  .about-me-heading {
    grid-column: 1/-1;
    justify-self: center;
    color: $color-white;
    font-size: 4rem;
    z-index: 1;
  }

  .experience {
    grid-column: 2/-2;
    grid-row: 2;
  }
}
</style>
