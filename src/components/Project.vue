<template>
  <div class="project">
      <header class="project-header">
        <p class="heading-3 project-heading">{{ project.title }}</p>
        <div class="project-technologies">
          <SvgIcon v-for="technology in project.technologies" :name="technology" :size="portfolioStore.isSmallDevice?{width: 20, height:20}:{width: 30, height:30}"/>
        </div>
      </header>
      <img loading="lazy" class="project-image" :src="projectImage" :alt="project.image.alt">
      <div class="project-description">
        <p class="project-summary">{{ project.summary }}</p>
        <footer class="project-footer">
          <a class="cta" :href="project.url" target="_blank" rel="noreferrer">
            <SvgIcon name="OpenWindow" :size="{height:20, width: 20}"/>
            Run
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
import { usePortfolioStore } from '@/pages/portfolio/stores/PortfolioStore';

export interface IProject {
  title: string;
  summary: string;
  image: IImage;
  url: string;
  description?: string;
  technologies?: SvgIconType[];
  date?: Date;
}

const portfolioStore = usePortfolioStore()
interface ProjectProps{
  project: IProject;
}

const props = defineProps<ProjectProps>();

const projectImage = new URL(props.project.image.path, import.meta.url).href;

</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
@import "@/styles/layout/Project.scss";

@media (min-width: 1024px) {
}

</style>