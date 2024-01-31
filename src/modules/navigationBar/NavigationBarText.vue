<script lang="ts" setup>
  
  import { NavigationBarTextItem } from '@/pages/portfolio/models/PortfolioViewModel';

  interface NavigationBarTextProps{
    items: NavigationBarTextItem[]
  }

  const props = defineProps<NavigationBarTextProps>()
  
</script>

<template>
  <nav class="navigation-bar-text">
    <ul class="nav-bar-list">
      <li 
      class="nav-bar-item"
      v-for="item in props.items"
      :key="item.id"
      >
        <a :href="item.id" :aria-label="`Move to section ${item.text}`" class="nav-bar-link" :class="{highlighted: item.isSelected}">
          <span> {{item.text}}</span> 
        </a>
      </li>  
      <li
      class="nav-bar-item-contact"
      >
        <a href="mailto:crespi.valero.jose@gmail.com" class="nav-bar-link-contact"> Contact </a>
      </li>  
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  @import "@/styles/main.scss";
  @import "./NavigationBar.scss";
</style>