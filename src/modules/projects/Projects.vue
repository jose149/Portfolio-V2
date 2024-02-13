<script lang="ts" setup>
import { ProjectsConfig } from './projectsViewModel';
import MainProject from './components/MainProject.vue';

interface ProjectsProps {
  config: ProjectsConfig;
}

const props = defineProps<ProjectsProps>();
</script>

<template>
  <section class="section-content single-column-grid">
    <div class="single-column section-content">
      <h2 class="heading-2">Projects</h2>
      <div class="main-projects">
        <MainProject
          v-for="project in props.config.mainProjects"
          :key="project.heading"
          :project="project"
        />
      </div>
      <div class="sub-projects">
        <!-- <SubProject
          v-for="project in props.config.subProjects"
          :key="project.heading"
          :project="project"
        /> -->
      </div>
    </div>
    <div class="technologies-backgorund-square"></div>
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
</style>
