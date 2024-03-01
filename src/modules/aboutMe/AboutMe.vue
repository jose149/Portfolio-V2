<script lang="ts" setup>
import Presentation from './components/Presentation.vue';
import Description from './components/Description.vue';
</script>

<template>
  <section class="section-content">
    <h2 class="section-heading heading-2">About me</h2>
    <div class="about-me-content container-small">
      <Presentation class="about-me-profile" />
      <Description class="about-me-description" />
    </div>
    <!-- <div class="about-me-backgorund-square"></div> -->
  </section>
</template>

<style scoped lang="scss">
.about-me-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem 5%;

  .about-me-profile {
    flex: 0 0 45%;
    @media only screen and (max-width: $bp-medium) {
      flex: 0 0 80%;
    }
  }

  .about-me-description {
    flex: 0 0 50%;
    @media only screen and (max-width: $bp-medium) {
      flex: 0 0 100%;
    }
  }
}
.about-me-backgorund-square {
  position: relative;
  height: 40vh;
  width: 100%;
  background-color: $background-color-3;
  z-index: 2;
}
</style>
