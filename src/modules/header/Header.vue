<script setup lang="ts">
import NavigationBarHorizontal from '@/components/shared/navigationBar/NavigationBarHorizontal.vue';
import { HeaderConfig } from './HeaderViewModel';

interface HeaderProps {
  config: HeaderConfig;
}

const props = defineProps<HeaderProps>();
</script>

<template>
  <header class="portfolio-header single-column-grid">
    <div class="portfolio-header-content single-column">
      <img class="header-logo" :src="props.config.logo" alt="Jose Logo" />
      <NavigationBarHorizontal :items="props.config.links" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.portfolio-header {
  position: fixed;
  left: 0px;
  top: 0;
  height: fit-content;
  width: 100%;
  // box-shadow: 1px 0 10px rgba(0, 0, 0, 0.8);
  z-index: 2;

  &-content {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-logo {
      max-height: 70%;
      width: auto;
    }
  }
}
.single-column-grid {
  display: grid;
  grid-template-columns: 1fr calc(8 * 12rem) 1fr;
  grid-template-rows: 7rem;
  .single-column {
    grid-column: 2/3;
    height: 100%;
    width: 100%;
  }
}
</style>
