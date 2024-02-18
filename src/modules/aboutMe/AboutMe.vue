<script lang="ts" setup>
import Presentation from './components/Presentation.vue';
import Description from './components/Description.vue';
</script>

<template>
  <section class="section-about-me eight-column-grid">
    <h2 class="section-heading heading-2">About me</h2>
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
}
.about-me-backgorund-square {
  position: absolute;
  top: -37vh;
  left: 0;
  height: 40vh;
  width: 100%;
  background-color: $background-color-3;
}
</style>
