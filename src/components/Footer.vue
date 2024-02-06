<template>
  <footer class="footer" :class="{ large: isSmallDevice }">
    <p>© <span class="primary">José Crespí</span> Portfolio 2023</p>
  </footer>
</template>

<script setup lang="ts">
import { StateKey } from "@/state/state";
import { inject } from "vue";

const { isSmallDevice } = inject(StateKey)!;
</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
.footer {
  padding: 3rem;
  background-color: $color-black-light;
  font-size: 1.6rem;
  font-weight: 500;
  color: $color-white;
  display: flex;
  align-items: center;
  justify-content: center;
  .primary {
    color: $color-primary-lighest;
  }
}
.large {
  padding-bottom: 10rem;
}
</style>
