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
    <h2 class="section-heading heading-2">Technologies</h2>
    <TechnologyModule
      v-for="technologyModule in props.config.technologyModules"
      :key="technologyModule.name"
      :heading="technologyModule.name"
      :figures="technologyModule.figures"
      :start-collapsed="technologyModule.startCollapsed"
      class="technology-module"
    />
    <div class="technologies-background-square"></div>
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.section-technologies {
  background: $background-color-1;

  .technology-module {
    grid-column: 2/-2;
    z-index: 1;
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
