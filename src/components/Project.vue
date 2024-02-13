<template>
  <div class="project">
    <header class="project-header">
      <p class="heading-3 project-heading">
        {{ project.title }}
      </p>
      <div class="project-technologies">
        <SvgIcon
          v-for="technology in project.technologies"
          :name="technology"
          :size="
            portfolioStore.isSmallDevice
              ? { width: 20, height: 20 }
              : { width: 30, height: 30 }
          "
        />
      </div>
    </header>
    <img
      loading="lazy"
      class="project-image"
      :src="projectImage"
      :alt="project.image.alt"
    />
    <div class="project-description">
      <p class="project-summary">
        {{ project.summary }}
      </p>
      <footer class="project-footer">
        <a class="cta" :href="project.url" target="_blank" rel="noreferrer">
          <SvgIcon name="OpenWindow" :size="{ height: 20, width: 20 }" />
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

const portfolioStore = usePortfolioStore();
interface ProjectProps {
  project: IProject;
}

const props = defineProps<ProjectProps>();

const projectImage = new URL(props.project.image.path, import.meta.url).href;
</script>

<style scoped lang="scss">
@import '@/styles/main.scss';
.project {
  border-radius: $border-radius;
  padding: 5rem;
  display: grid;
  grid-template-columns: repeat(4, 12%) 1fr repeat(4, 12%);
  grid-template-rows: min-content min-content;
  justify-content: center;
  row-gap: 5rem;
  box-shadow: 0 0 2rem black;
  filter: drop-shadow((0rem 1rem 1rem $color-black-dark-2));
  @media only screen and (max-width: $bp-medium) {
    row-gap: 5rem;
  }
  & > * {
    @media only screen and (max-width: $bp-medium) {
      grid-column: 1/-1;
    }
  }
  .project-header {
    grid-column: 1/-1;
    display: flex;
    align-items: center;
    gap: 10rem;
    overflow: hidden;
    @media only screen and (max-width: $bp-medium) {
      flex-direction: column;
      gap: 3rem;
    }
    .project-heading {
      font-size: 3rem;
    }
    .project-technologies {
      padding-bottom: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      overflow-x: auto;
    }
  }

  .project-image {
    grid-column: 1/6;
    width: 100%;
    border-radius: 10px;
    border: 1px solid rgba($color-white, 0.1);
    @media only screen and (max-width: $bp-medium) {
      grid-column: 1/-1;
    }
  }
  .project-description {
    grid-column: 6/-1;
    padding-left: 5rem;
    width: 100%;
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    @media only screen and (max-width: $bp-medium) {
      padding: 0;
      grid-column: 1/-1;
      gap: 5rem;
    }

    .project-summary {
      color: $color-white;
    }

    .project-footer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: end;
      @media only screen and (max-width: $bp-medium) {
        justify-content: center;
      }

      .cta {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: max-content;
        position: relative;
        padding: $button-padding;
        font-size: $button-font-size;
        font-weight: $button-font-weight;
        cursor: pointer;
        transition: all $transition-time;
        border-radius: $border-radius;
        background: $color-white;
        color: black;
        @media (hover: hover) {
          &:hover {
            transform: translateY(-2px);
            transform-origin: center;
            filter: brightness(1.1);
          }
        }
      }

      .project-repository {
        display: flex;
        font-weight: 600;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        flex-wrap: nowrap;
        font-size: 2rem;
        color: $color-primary;
      }
    }
  }
}
</style>
