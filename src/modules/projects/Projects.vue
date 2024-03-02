<script lang="ts" setup>
import AppLink from '@/components/shared/AppLink/AppLink.vue';
import { Position, ProjectsConfig } from './projectsViewModel';
import SubProject from './components/SubProject.vue';
import MainProject from './components/MainProject.vue';

interface ProjectsProps {
  config: ProjectsConfig;
}

const props = defineProps<ProjectsProps>();
</script>

<template>
  <section class="section-content">
    <div class="section-heading projects-heading">
      <h2 class="heading-2">Projects</h2>
      <AppLink
        v-if="props.config.buttonPosition === Position.Top"
        type="secondary"
        link="https://github.com/jose149"
        aria-label="Open Github to check my projects"
      >
        <template #linkContent>VIEW ALL</template>
      </AppLink>
    </div>

    <div class="main-projects">
      <MainProject
        v-for="project in props.config.mainProjects"
        :key="project.name"
        :main-project="project"
      />
    </div>

    <div class="sub-projects">
      <SubProject
        v-for="subPproject in props.config.subProjects"
        :key="subPproject.name"
        :sub-project="subPproject"
      />
    </div>

    <AppLink
      v-if="props.config.buttonPosition === Position.Bottom"
      class="projects-link-bottom"
      type="secondary"
      link="https://github.com/jose149"
      aria-label="Open Github to check my projects"
    >
      <template #linkContent>VIEW ALL</template>
    </AppLink>
  </section>
</template>

<style scoped lang="scss">
.projects-heading {
  display: flex;
  justify-content: space-between;
}

.main-projects {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  z-index: 1;
}
.projects-link-bottom {
  justify-self: center;
  z-index: 1;
}
</style>
