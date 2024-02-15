<script setup lang="ts"></script>

<template>
  <div class="banner-grid-layout eight-column-grid">
    <div class="left-3-column">
      <slot name="left3Column"></slot>
    </div>
    <div class="right-5-column">
      <slot name="right5Column"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.banner-grid-layout {
  height: 100%;
  align-items: center;
  .left-3-column {
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

  .right-5-column {
    grid-column: 6/-2;
    z-index: 1;
    @media only screen and (max-width: $bp-large) {
      grid-row: 1;
      grid-column: 1/-1;
      justify-self: center;
    }
  }
}
</style>
