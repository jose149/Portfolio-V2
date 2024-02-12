<script setup lang="ts"></script>

<template>
  <div class="grid-container">
    <div class="single-column">
      <slot name="single-column"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: 1fr calc(9vw * 8) 1fr;
  .single-column {
    grid-column: 2/3;
  }
}
</style>
