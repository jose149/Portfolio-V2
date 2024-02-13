<script lang="ts" setup>
import { ProjectsConfig } from './projectsViewModel';
import MainProject from './components/MainProject.vue';
import SubProject from './components/SubProject.vue';

interface ProjectsProps {
  config: ProjectsConfig;
}

const props = defineProps<ProjectsProps>();
</script>

<template>
  <section class="section-projects single-column-grid">
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
        <SubProject
          v-for="project in props.config.subProjects"
          :key="project.heading"
          :project="project"
        />
      </div>
    </div>
    <div class="technologies-backgorund-square"></div>
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.section-projects {
  background: $background-color-1;
}
.sub-projects {
  border-radius: $border-radius;
  grid-column: 2/-2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  @media only screen and (max-width: $bp-medium) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}
</style>
