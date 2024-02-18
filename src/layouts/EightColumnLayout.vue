<script setup lang="ts"></script>

<template>
  <div class="eight-column-layout">
    <div class="left-3-column">
      <slot name="left3Column"></slot>
    </div>
    <div class="center-8-column">
      <slot name="center8Column"></slot>
    </div>
    <div class="right-5-column">
      <slot name="right5Column"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.eight-column-layout {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(8, calc(13.75rem - 0.3rem)) 1fr;
  .left-3-column {
    position: relative;
    grid-column: 2/5;
  }
  .center-8-column {
    grid-column: 2/-2;
  }
  .right-5-column {
    position: relative;
    grid-column: -7/-2;
  }
}
</style>
