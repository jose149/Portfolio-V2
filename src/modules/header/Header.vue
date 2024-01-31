<script setup lang='ts'>
import NavigationBarText from '@/modules/navigationBar/NavigationBarText.vue'

import { NavigationBarTextItem } from '@/pages/portfolio/models/PortfolioViewModel';

interface HeaderProps{
  image: string;
  items: NavigationBarTextItem[];
}

const props = defineProps<HeaderProps>()
</script>

<template>
  <header class="portfolio-header">
    <img :src="props.image" alt="Jose Logo"/>
    <NavigationBarText :items="props.items"/>
  </header>
</template>

<style scoped lang='scss'>
.portfolio-header{
  position: fixed;
  left: 0px;
  top: 0;
  padding-right: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 0 10px rgba(0, 0, 0, 0.8);
  z-index: 2;
}
</style>