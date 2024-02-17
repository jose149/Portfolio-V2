<script setup lang="ts"></script>

<template>
  <div class="banner-grid-layout eight-column-grid">
    <div class="left-column">
      <slot name="leftColumn"></slot>
    </div>
    <div class="right-column">
      <slot name="rightColumn"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.banner-grid-layout {
  position: relative;
  height: 100%;
  align-items: center;
  .left-column {
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

  .right-column {
    grid-row: 1;
    grid-column: 1/-1;
    justify-self: center;
    z-index: 1;
  }
}
</style>
