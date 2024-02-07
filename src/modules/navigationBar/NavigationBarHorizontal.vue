<script lang="ts" setup>
import { type NavigationBarTextItem } from '@/pages/portfolio/models/PortfolioViewModel';

interface NavigationBarTextProps {
  items: NavigationBarTextItem[];
}

const props = defineProps<NavigationBarTextProps>();
</script>

<template>
  <nav class="navigation-bar-horizontal">
    <a
      v-for="item in props.items"
      :key="item.id"
      :href="item.id"
      :aria-label="`Move to section ${item.text}`"
      class="nav-bar-link"
      :class="{ highlighted: item.isSelected }"
    >
      {{ item.text }}
    </a>
  </nav>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
@import './NavigationBar.scss';
</style>
