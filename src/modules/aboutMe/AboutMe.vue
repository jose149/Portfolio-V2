<script lang="ts" setup>
import Presentation from './components/Presentation.vue';
import Description from './components/Description.vue';
</script>

<template>
  <section class="section-about-me eight-column-grid">
    <div class="section-heading about-me-heading">
      <h2 class="heading-2">About me</h2>
    </div>
    <Presentation />
    <Description />
    <div class="about-me-backgorund-square"></div>
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.section-about-me {
  position: relative;
  background: $background-color-1;
  .about-me-heading {
    grid-column: 2/-2;
  }
}
.about-me-backgorund-square {
  position: absolute;
  top: -35vh;
  left: 0;
  height: 40vh;
  width: 100%;
  background-color: $background-color-3;
}
</style>
