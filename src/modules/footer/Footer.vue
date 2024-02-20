<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <p>
      ©
      <span class="primary">José Crespí</span>
      Portfolio 2024
    </p>
  </footer>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.footer {
  padding: 3rem;
  background-color: $background-color-2;
  font-size: 1.6rem;
  font-weight: 500;
  color: $color-white;
  display: flex;
  align-items: center;
  justify-content: center;
  .primary {
    color: $color-primary;
  }
}
</style>
