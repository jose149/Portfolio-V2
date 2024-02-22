<script lang="ts" setup>
import AppLink from '@/components/shared/AppLink/AppLink.vue';
import { Position, ProjectsConfig } from './projectsViewModel';
import ProjectCard from './components/ProjectCard.vue';

interface ProjectsProps {
  config: ProjectsConfig;
}

const props = defineProps<ProjectsProps>();
</script>

<template>
  <section class="section-projects eight-column-grid">
    <div class="section-heading projects-heading">
      <h2 class="heading-2">Projects</h2>
      <AppLink
        v-if="props.config.buttonPosition === Position.Top"
        type="primary"
        link="https://github.com/jose149"
        aria-label="Open Github to check my projects"
      >
        <template #linkContent>VIEW ALL</template>
      </AppLink>
    </div>
    <div class="projects">
      <ProjectCard
        v-for="project in props.config.projects"
        :key="project.name"
        :project="project"
      />
    </div>
    <AppLink
      v-if="props.config.buttonPosition === Position.Bottom"
      class="projects-link-bottom"
      type="primary"
      link="https://github.com/jose149"
      aria-label="Open Github to check my projects"
    >
      <template #linkContent>VIEW ALL</template>
    </AppLink>
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.section-projects {
  position: relative;
  background: $background-color-1;
}
.projects-heading {
  grid-column: 2/-2;
  display: flex;
  justify-content: space-between;
}
.projects {
  grid-column: 2/-2;
  width: 100%;
  border-radius: $border-radius;
  grid-column: 2/-2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  z-index: 1;

  @media only screen and (max-width: $bp-medium) {
    grid-template-columns: 1fr;
  }
}
.projects-link-bottom {
  grid-column: 2/-2;
  justify-self: center;
  z-index: 1;
}
</style>
