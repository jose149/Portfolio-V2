<script lang="ts" setup>
import { ProjectsConfig } from './projectsViewModel';
import ProjectCard from './components/ProjectCard.vue';

interface ProjectsProps {
  config: ProjectsConfig;
}

const props = defineProps<ProjectsProps>();
</script>

<template>
  <section class="section-projects section-grid">
    <div class="single-column section-content">
      <div class="section-heading projects-heading">
        <h2 class="heading-2">Projects</h2>
        <a
          class="cta"
          href="https://github.com/jose149"
          aria-label="Open Github to check my projects"
          target="_blank"
          rel="noreferrer"
        >
          VIEW ALL
        </a>
      </div>
      <div class="projects">
        <ProjectCard
          v-for="project in props.config.projects"
          :key="project.name"
          :project="project"
        />
      </div>
    </div>
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

  .cta {
    border-radius: $border-radius;
    padding: $button-padding;
    width: max-content;
    background: $button-cta-background;
    color: white;
    font: $font-button;
    text-transform: uppercase;
    cursor: pointer;
    transition: all $transition-time;

    @media (hover: hover) {
      &:hover {
        transform: translateY(-2px);
        transform-origin: center;
        filter: brightness(1.1);
      }
    }
  }
}
.projects {
  width: 100%;
  border-radius: $border-radius;
  grid-column: 2/-2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media only screen and (max-width: $bp-medium) {
    gap: 1rem;
  }
}
</style>
