<script lang="ts" setup>
import TechnologyModule from './technologyModule/TechnologyModule.vue';
import { TechnologiesConfig } from './technologiesViewModel';

interface TechnologiesProps {
  config: TechnologiesConfig;
}

const props = defineProps<TechnologiesProps>();
</script>

<template>
  <section class="section-technologies single-column-grid">
    <div class="single-column">
      <h2 class="technologies-heading">Technologies</h2>
      <div class="technologies-modules">
        <TechnologyModule
          v-for="technologyModule in props.config.technologyModules"
          :key="technologyModule.name"
          :heading="technologyModule.name"
          :figures="technologyModule.figures"
          :start-collapsed="technologyModule.startCollapsed"
        />
      </div>
    </div>
    <div class="technologies-backgorund-square"></div>
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.section-technologies {
  position: relative;
  background: $color-background;

  .technologies-heading {
    color: $color-white;
    font: $font-heading-2;
  }

  .technologies-modules {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

.single-column-grid {
  padding: 10rem 0;
  display: grid;
  grid-template-columns: 1fr calc(12rem * 8) 1fr;
  .single-column {
    width: 100%;
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    z-index: 1;
  }
}

.technologies-backgorund-square {
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-right-radius: 15px;
  height: 95%;
  width: 45%;
  // background: linear-gradient(
  //   180deg,
  //   $color-black-light-2 0%,
  //   $color-black-light 100%
  // );
  background-color: #1d1d1d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23050505' fill-opacity='0.34' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  @media only screen and (max-width: $bp-large) {
    width: 100%;
  }
}
</style>
