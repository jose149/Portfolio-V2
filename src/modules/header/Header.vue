<script setup lang="ts">
import NavigationBarHorizontal from '@/components/shared/navigationBar/NavigationBarHorizontal.vue';
import { HeaderConfig } from './HeaderViewModel';

interface HeaderProps {
  config: HeaderConfig;
}

const props = defineProps<HeaderProps>();
</script>

<template>
  <header class="portfolio-header">
    <img class="header-logo" :src="props.config.logo" alt="Jose Logo" />
    <NavigationBarHorizontal :items="props.config.links" />
  </header>
</template>

<style scoped lang="scss">
.portfolio-header {
  position: fixed;
  left: 0px;
  top: 0;
  padding: 0 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 0 10px rgba(0, 0, 0, 0.8);
  z-index: 2;
  .header-logo {
    max-height: 100%;
  }
}
</style>
