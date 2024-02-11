<script setup lang="ts"></script>

<template>
  <div class="banner-grid-layout">
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
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(8, 9vw) 1fr;
  align-items: center;
  @media only screen and (max-width: $bp-large) {
    grid-template-columns: 1fr repeat(8, 11vw) 1fr;
  }
  .left-3-column {
    height: 100%;
    grid-column: 2/5;
    align-self: end;
    justify-self: center;
    display: flex;
    align-items: end;
    z-index: 0;
    @media only screen and (max-width: $bp-large) {
      grid-row: 1;
      grid-column: 1/3;
    }
  }

  .right-5-column {
    grid-column: -7/-2;
    justify-self: flex-end;
    z-index: 1;
    @media only screen and (max-width: $bp-large) {
      grid-row: 1;
      grid-column: 2/-2;
      justify-self: center;
    }
  }
}
</style>
