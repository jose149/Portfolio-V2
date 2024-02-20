<script setup lang="ts"></script>

<template>
  <div class="banner-grid-layout eight-column-grid">
    <div class="left-3-column">
      <slot name="left3Column"></slot>
    </div>
    <div class="center-column">
      <slot name="centerColumn"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.banner-grid-layout {
  position: relative;
  height: 100%;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  .left-3-column {
    position: absolute;
    height: 100%;
    grid-column: 2/5;
    align-self: end;
    justify-self: start;
    display: flex;
    align-items: end;
    z-index: 0;
    @media only screen and (max-width: $bp-largest) {
      grid-row: 1;
      grid-column: 1/4;
    }
    @media only screen and (max-width: $bp-large) {
      justify-self: flex-end;
    }
  }

  .center-column {
    grid-row: 1;
    grid-column: 1/-1;
    justify-self: center;
    z-index: 1;
  }
}
</style>
