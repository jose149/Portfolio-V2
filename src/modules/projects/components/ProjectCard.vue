<script lang="ts" setup>
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';
import { Project } from '../projectsViewModel';

interface ProjectCardProps {
  project: Project;
}

const props = defineProps<ProjectCardProps>();
</script>

<template>
  <div
    class="project"
    :href="props.project.link"
    target="_blank"
    rel="noreferrer"
  >
    <a
      class="project-card"
      :href="props.project.link"
      target="_blank"
      rel="noreferrer"
    >
      <div class="project-content">
        <img
          loading="lazy"
          class="project-image"
          :src="props.project.image"
          :alt="props.project.name"
        />
        <img
          v-if="props.project.organisationLogo"
          loading="lazy"
          class="project-organisation-logo"
          :src="props.project.organisationLogo"
          :alt="props.project.organisationLogo"
        />
      </div>
    </a>
    <span class="project-title">
      {{ props.project.name }}
    </span>
    <a
      v-if="props.project.repositoryUrl"
      class="project-link"
      :href="props.project.repositoryUrl"
    >
      More details
      <SvgIcon name="RightArrow" :size="{ height: 15, width: 15 }" />
    </a>
  </div>
</template>

<style lang="scss">
@import '@/styles/main.scss';
.project {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .project-card {
    padding: 5rem 3rem;
    background-color: $background-color-4;
    cursor: pointer;

    @media (hover: hover) {
      &:hover .project-image {
        transform: scale(1.1);
      }
      &:hover .project-content {
        filter: saturate(0.5) blur(1px);
      }
    }

    .project-content {
      position: relative;
      overflow: hidden;
      filter: saturate(0.8);

      @media only screen and (max-width: $bp-medium) {
        filter: none;
      }

      .project-image {
        position: relative;
        width: 100%;
        aspect-ratio: 5 / 3;
        object-fit: cover;

        transition: 0.3s;
      }
      .project-organisation-logo {
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        height: 6rem;
        width: 6rem;
        object-fit: cover;
      }
    }
  }

  &-header {
    display: flex;
    flex-direction: column;
  }
}
.project-title {
  color: $color-white;
  font-size: 2.2rem;
}
.project-link {
  color: $color-primary;
  font-size: 2.2rem;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media only screen and (max-width: $bp-medium) {
    font-size: 1.5rem;
    gap: 1rem;
  }
}
</style>
