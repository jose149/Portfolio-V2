<script lang="ts" setup>
import { ProjectsConfig } from './projectsViewModel';
import ProjectCard from './components/ProjectCard.vue';

interface ProjectsProps {
  config: ProjectsConfig;
}

const props = defineProps<ProjectsProps>();
</script>

<template>
  <section class="section-projects eight-column-grid">
    <div class="single-column section-content">
      <h2 class="heading-2">Projects</h2>
    </div>
    <div class="projects">
      <ProjectCard
        v-for="project in props.config.projects"
        :key="project.name"
        :project="project"
      />
    </div>
    <div class="technologies-backgorund-square"></div>
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.section-projects {
  background: $background-color-1;
}
.projects {
  border-radius: $border-radius;
  grid-column: 2/-2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  @media only screen and (max-width: $bp-medium) {
    gap: 1rem;
  }
}
</style>
