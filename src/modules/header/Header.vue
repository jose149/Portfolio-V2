<script setup lang='ts'>
import NavigationBar from '@/modules/navigationBar/NavigationBar.vue'

// import type { Image } from '@/general/viewModel'
import { Section } from '@/pages/portfolio/models/PortfolioViewModel';

interface HeaderProps{
  image: string;
  links: Section[];
}

const props = defineProps<HeaderProps>()
</script>

<template>
  <header>
    <AppImage :image="props.image"/>
    <NavigationBar :links="props.links"/>
  </header>
</template>

<style scoped lang='scss'></style>