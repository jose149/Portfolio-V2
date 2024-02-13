<script lang="ts" setup>
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';
import { MainProject } from '../projectsViewModel';

export interface MainProjectProps {
  project: MainProject;
}

const props = defineProps<MainProjectProps>();
</script>
<template>
  <div class="project">
    <header class="project-header">
      <p class="heading-3 project-heading">
        {{ props.project.heading }}
      </p>
      <div class="project-technologies">
        <SvgIcon
          v-for="logo in props.project.logos"
          :name="logo"
          :size="{ width: 30, height: 30 }"
        />
      </div>
    </header>
    <img
      loading="lazy"
      class="project-image"
      :src="props.project.image"
      alt="Project image"
    />
    <div class="project-description">
      <p class="project-summary">
        {{ props.project.description }}
      </p>
      <footer class="project-footer">
        <a
          class="cta"
          :href="props.project.link"
          target="_blank"
          rel="noreferrer"
        >
          <SvgIcon name="OpenWindow" :size="{ height: 20, width: 20 }" />
          Run
        </a>
        <!-- <a class="project-repository">Open details</a> -->
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
@import '@/styles/layout/Project.scss';

@media (min-width: 1024px) {
}
</style>
