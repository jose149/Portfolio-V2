<script setup lang="ts">
import { Project } from '../projectsViewModel';
import AppLink from '@/components/shared/AppLink/AppLink.vue';
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';

interface MainProjectProps {
  mainProject: Project;
}

const props = defineProps<MainProjectProps>();
</script>

<template>
  <article class="main-project">
    <header class="main-project-header">
      <h3 class="main-project-heading">{{ props.mainProject.name }}</h3>
      <aside class="main-project-technologies">
        <div
          v-for="technology in props.mainProject.technologies"
          class="pill-container"
        >
          <SvgIcon
            :name="technology.iconName"
            :size="{ height: 16, width: 16 }"
          />
          <p>{{ technology.name }}</p>
        </div>
      </aside>
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
        <div class="main-project-description">
          {{ props.mainProject.description }}
          <ul class="main-project-description-list">
            <li v-for="feature in props.mainProject.features">{{ feature }}</li>
          </ul>
        </div>
        <div class="main-project-buttons">
          <AppLink
            v-if="props.mainProject.link"
            type="secondary"
            :link="props.mainProject.link"
          >
            <template #linkContent>
              <SvgIcon
                class="icon"
                name="OpenTab"
                :size="{ height: 12, width: 12 }"
              />
              RUN
            </template>
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

      &::-webkit-scrollbar {
        height: 5px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: $color-secundary-2;
        border-radius: 5px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: $color-secundary-3;
      }

      .pill-container {
        background-color: $background-color-5;
        color: $color-white;
        padding: 5px 10px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        height: fit-content;
        font-size: 1rem;
        white-space: nowrap;
      }
    }
  }

  .main-project-content {
    display: flex;
    gap: 5rem 3rem;
    @media only screen and (max-width: $bp-largest) {
      flex-direction: column;
    }

    .main-project-left-side {
      flex-basis: 50%;
      height: auto;
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      color: #fff;

      .main-project-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top left;
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
      flex-basis: 50%;
      gap: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .main-project-description {
        color: #fff;
        color: $color-white;
        font-size: 1.6rem;
        font-weight: 300;
        text-align: start;

        &-list {
          margin: 2rem 0 0 2rem;
          color: #fff;
          color: $color-white;
          font-size: 1.6rem;
          font-weight: 300;
          text-align: start;
        }
      }

      .main-project-buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    }
  }
}
</style>
