<script lang="ts" setup>
import TechnologyModule from './technologyModule/TechnologyModule.vue';
import { TechnologiesConfig } from './technologiesViewModel';

interface TechnologiesProps {
  config: TechnologiesConfig;
}

const props = defineProps<TechnologiesProps>();
</script>

<template>
  <section class="section-technologies eight-column-grid">
    <div class="single-column section-content">
      <h2 class="section-heading heading-2">Technologies</h2>
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
    <div class="technologies-background-square"></div>
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.section-technologies {
  position: relative;
  background: $background-color-1;

  .technologies-modules {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

.technologies-background-square {
  position: absolute;
  top: -5vh;
  left: 0;
  height: 100vh;
  width: 50%;
  background-color: $background-color-3;
}
</style>
