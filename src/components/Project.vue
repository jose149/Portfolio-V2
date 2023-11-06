<template>
  <div class="project">
      <header class="project-header">
        <p class="heading-3 project-heading">{{ project.title }}</p>
        <div class="project-technologies">
          <SvgIcon v-for="technology in project.technologies" :name="technology" :size="isSmallDevice?{width: 20, height:20}:{width: 30, height:30}"/>
        </div>
      </header>
      <img loading="lazy" class="project-image" src="/assets/images/Projects/tripPlanner.webp" alt="hola">
      <div class="project-description">
        <p class="project-summary">{{ project.summary }}</p>
        <footer class="project-footer">
          <a class="cta" :href="project.url" target="_blank" rel="noreferrer">
            <SvgIcon name="OpenWindow" :size="{height:20, width: 20}"/>
            Play
          </a>
          <!-- <a class="project-repository">Open details</a> -->
        </footer>
      </div>
  </div>

</template>


<script lang="ts" setup>
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';
import type { SvgIconType } from '@/libraries/storybook/svgIcon/SvgIconModel';
import type { IImage } from './Projects.vue';


export interface IProject {
  title: string;
  summary: string;
  image: IImage;
  url: string;
  description?: string;
  technologies?: SvgIconType[];
  date?: Date;
}
import { StateKey } from "@/state/state";
import { inject } from 'vue';

const {isSmallDevice} = inject(StateKey)!;
interface ProjectProps{
  project: IProject;
}

defineProps<ProjectProps>();

</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
@import "@/styles/layout/Project.scss";

@media (min-width: 1024px) {
}

</style>