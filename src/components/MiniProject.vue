<template>
  <a class="mini-project" :href="miniProject.link" target="_blank" rel="noreferrer">
    <img loading="lazy" class="mini-project-image" :src="imageUrl" :alt="miniProject.image.alt">
    <p class="mini-project-header">
      <span class="heading-3-link header-title">{{ miniProject.title }}</span>
      <span class="heading-3-link header-link">More details <SvgIcon name="RightArrow" :size="isSmallDevice
          ?{height:15, width: 15}
          :{height:18, width:18}"/></span> 
    </p>
  </a>
</template>

<script lang="ts" setup>
import type { IImage } from './Projects.vue';
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';
import { inject } from 'vue';
import { StateKey } from '@/state/state';

export interface IMiniProject {
  title: string;
  image: IImage;
  link: string
}

const {isSmallDevice} = inject(StateKey)!;

interface MiniProjectProps{
  miniProject: IMiniProject;
}

const props = defineProps<MiniProjectProps>()

const imageUrl = new URL(props.miniProject.image.path, import.meta.url).href

</script>

<style lang="scss">
@import "@/styles/main.scss";
@import "@/styles/layout/MiniProject.scss";
</style>