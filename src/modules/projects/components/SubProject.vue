<script lang="ts" setup>
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';
import { SubProject } from '../projectsViewModel';

interface SubProjectProps {
  project: SubProject;
}

const props = defineProps<SubProjectProps>();
</script>

<template>
  <a
    class="mini-project"
    :href="props.project.link"
    target="_blank"
    rel="noreferrer"
  >
    <img
      loading="lazy"
      class="mini-project-image"
      :src="props.project.image"
      :alt="props.project.heading"
    />
    <p class="mini-project-header">
      <span class="heading-3-link header-title">
        {{ props.project.heading }}
      </span>
      <span class="heading-3-link header-link">
        More details
        <SvgIcon name="RightArrow" :size="{ height: 15, width: 15 }" />
      </span>
    </p>
  </a>
</template>

<style lang="scss">
@import '@/styles/main.scss';
.mini-project {
  box-shadow: 0 0 1rem black;
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &-image {
    width: 100%;
    aspect-ratio: 5 / 3;
    object-fit: cover;

    filter: saturate(0.3);
    transition: all 0.5s;
    @media only screen and (max-width: $bp-medium) {
      filter: none;
    }
  }

  &-header {
    display: flex;
    flex-direction: column;
  }
}
.header-title {
  color: $color-white;
}
.header-link {
  color: $color-primary;
  font-size: 1.8rem;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media only screen and (max-width: $bp-medium) {
    font-size: 1.5rem;
    gap: 1rem;
  }
}

@media (hover: hover) {
  .mini-project:hover .mini-project-image {
    filter: none;
  }

  .mini-project:hover {
    filter: brightness(1.1);
    transform: scale(1.1);
  }
}
</style>
