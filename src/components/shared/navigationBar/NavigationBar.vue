<template>
  <nav class="navigation-bar" :class="{mobile:isSmallDevice, desktop: !isSmallDevice, top: (!isScrollAtTop && !isSmallDevice)}">
    <ul class="nav-bar-list">
      <li 
      class="nav-bar-item"
      v-for="section in sections"
      :key="section.id"
      >
        <a :href="section.id" :aria-label="`Move to section ${section.name}`" class="nav-bar-link" :class="{highlighted: section.isWatching}"> 
          <SvgIcon v-if="isSmallDevice" class="nav-bar-icon" :class="{'icon-highlighted': section.isWatching}" :name="section.iconName" :size="{height: 12, width:12}"/>
          <span v-else> {{section.name}}</span> 
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


  const {isSmallDevice, isScrollAtTop, sections} = inject(StateKey)!;
  
</script>

<style scoped lang="scss">
  @import "@/styles/main.scss";
  @import "@/styles/components/NavigationBar.scss";
</style>