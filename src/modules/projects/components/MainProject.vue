<script setup lang="ts">
import { Project } from '../projectsViewModel';
import AppLink from '@/components/shared/AppLink/AppLink.vue';

interface MainProjectProps {
  mainProject: Project;
}

const props = defineProps<MainProjectProps>();
</script>

<template>
  <article class="main-project">
    <header class="main-project-header">
      <h3 class="main-project-heading">{{ props.mainProject.name }}</h3>
      <aside class="main-project-technologies"></aside>
    </header>
    <div class="main-project-content">
      <div class="main-project-left-side">
        <img
          alt="project image"
          class="main-project-image"
          :src="props.mainProject.image"
          loading="lazy"
        />
        <img
          v-if="props.mainProject.organisationLogo"
          loading="lazy"
          class="main-project-organisation-logo"
          :src="props.mainProject.organisationLogo"
          :alt="props.mainProject.organisationLogo"
        />
      </div>
      <div class="main-project-right-side">
        <p class="main-project-description">
          {{ props.mainProject.description }}
        </p>
        <div class="main-project-buttons">
          <AppLink
            v-if="props.mainProject.link"
            type="secondary"
            :link="props.mainProject.link"
          >
            <template #linkContent>Run</template>
          </AppLink>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.main-project {
  background-color: $background-color-4;
  width: 100%;
  padding: 5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .main-project-header {
    display: flex;
    gap: 3.25rem;
    align-items: center;

    .main-project-heading {
      text-wrap: nowrap;
      font-size: 2.4rem;
      line-height: 1;
      font-family: $font-primary;
      font-weight: 400;
      line-height: 1;
      color: $color-white;
    }
    .main-project-technologies {
      overflow: auto;
      display: flex;
      position: relative;
      white-space: nowrap;
      align-items: flex-end;
      padding: 0 15px 2px;
      height: 45px;
      width: 100%;
      gap: 10px;
      mask: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        #fff 5%,
        #fff 95%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }

  .main-project-content {
    display: flex;
    .main-project-left-side {
      position: relative;
      width: 60%;
      border-radius: 10px;
      overflow: hidden;
      color: #fff;
      aspect-ratio: auto;

      .main-project-image {
        width: 100%;
        height: 100%;
      }

      .main-project-organisation-logo {
        position: absolute;
        bottom: 5%;
        right: 5%;
        height: 20%;
        aspect-ratio: 1/1;
        object-fit: cover;
      }
    }

    .main-project-right-side {
      width: 40%;
      gap: 20px;
      padding-left: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .main-project-description {
        color: #fff;
        color: $color-white;
        font-size: 1.6rem;
        font-weight: 300;
        text-align: start;
      }

      .main-project-buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
}
</style>
