<script setup lang="ts"></script>

<template>
  <div class="about-me-grid-layout">
    <div class="left-4-column">
      <slot name="left4Column"></slot>
    </div>
    <div class="center-column">
      <slot name="centerColumn"></slot>
    </div>
    <div class="right-4-column">
      <slot name="left4Column"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.about-me-grid-layout {
  height: 100%;
  .left-4-column {
    position: absolute;
    height: 100%;
    grid-column: 2/5;
    align-self: end;
    justify-self: start;
    display: flex;
    align-items: end;
    z-index: 0;
    @media only screen and (max-width: $bp-large) {
      grid-row: 1;
      grid-column: 1/4;
      justify-self: flex-end;
    }
    @media only screen and (max-width: $bp-small) {
      grid-column: 1/5;
    }
  }

  .center-column {
    grid-row: 1;
    grid-column: 1/-1;
    justify-self: center;
    z-index: 1;
  }
  .right-4-column {
    position: absolute;
    height: 100%;
    grid-column: 2/5;
    align-self: end;
    justify-self: start;
    display: flex;
    align-items: end;
    z-index: 0;
    @media only screen and (max-width: $bp-large) {
      grid-row: 1;
      grid-column: 1/4;
      justify-self: flex-end;
    }
    @media only screen and (max-width: $bp-small) {
      grid-column: 1/5;
    }
  }
}
</style>
