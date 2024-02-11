<script setup lang="ts"></script>

<template>
  <div class="eight-column-layout">
    <div class="left-3-column">
      <slot name="left3Column"></slot>
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
  grid-template-columns: 1fr repeat(8, 9vw) 1fr;
  .left-3-column {
    position: relative;
    grid-column: 2/5;
  }

  .right-5-column {
    position: relative;
    grid-column: -7/-2;
  }
}
</style>
