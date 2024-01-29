<template>
  <nav class="navigation-bar" :class="{mobile:isSmallDevice, desktop: !isSmallDevice, top: (!isScrollAtTop && !isSmallDevice)}">
    <ul class="nav-bar-list">
      <li 
      class="nav-bar-item"
      v-for="item in props.items"
      :key="item.id"
      >
        <a :href="item.id" :aria-label="`Move to section ${item.title}`" class="nav-bar-link" :class="{highlighted: section.isWatching}"> 
          <SvgIcon v-if="isSmallDevice" class="nav-bar-icon" :class="{'icon-highlighted': section.isWatching}" :name="section.iconName" :size="{height: 12, width:12}"/>
          <span v-else> {{item.title}}</span> 
        </a>
      </li>  
      <li v-if="!isSmallDevice"
      class="nav-bar-item-contact"
      >
        <a href="mailto:crespi.valero.jose@gmail.com" class="nav-bar-link-contact"> Contact </a>
      </li>  
    </ul>
  </nav>
  <a v-if="isSmallDevice" aria-label="Open mail app to write me an email" class="contact-icon" href="mailto:crespi.valero.jose@gmail.com">
    <SvgIcon :name="'Mail'" :color="'white'" :size="{height: 20, width:20}"></SvgIcon>
  </a>
</template>
  
  
<script lang="ts" setup>
  
  import { inject } from 'vue';
  import {StateKey} from '@/state/state';
  import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue'
  import { NavigationBarItem } from '@/pages/portfolio/models/PortfolioViewModel';

  interface NavigationBarProps{
    items: NavigationBarItem[]
  }

  const props = defineProps<NavigationBarProps>()


  const {isSmallDevice, isScrollAtTop, sections} = inject(StateKey)!;
  
</script>

<style scoped lang="scss">
  @import "@/styles/main.scss";
  @import "./NavigationBar.scss";
</style>