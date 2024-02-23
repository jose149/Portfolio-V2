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
      <img
        loading="lazy"
        class="project-image"
        :src="props.project.image"
        :alt="props.project.name"
      />
      <figcaption class="project-card-caption">
        Run {{ props.project.name }}
      </figcaption>
      <img
        v-if="props.project.organisationLogo"
        loading="lazy"
        class="project-organisation-logo"
        :src="props.project.organisationLogo"
        :alt="props.project.organisationLogo"
      />
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

.project-card {
  position: relative;
  padding: 5rem 3rem;
  background-color: $background-color-4;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      filter: scale(1.1);
    }

    &:hover .project-image {
      filter: saturate(0) brightness(0.3) blur(1px);
    }

    &:hover .project-card-caption {
      top: 50%;
      transform: translate(-50%, -50%) rotateX(0deg);
      opacity: 1;
    }

    &:hover .project-title {
      transform: rotateX(-45deg);
    }
  }

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

  &-caption {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%) rotateX(-45deg) scale(0.7);
    color: black;
    transition: all 0.5s;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    color: $color-primary;
    opacity: 0;
    backface-visibility: hidden;
  }

  .project-organisation-logo {
    position: absolute;
    bottom: 7rem;
    right: 5rem;
    height: 6rem;
    width: 6rem;
    object-fit: cover;
  }
}
</style>
