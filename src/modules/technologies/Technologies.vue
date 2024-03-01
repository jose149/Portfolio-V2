<script lang="ts" setup>
import TechnologyModule from './technologyModule/TechnologyModule.vue';
import { TechnologiesConfig } from './technologiesViewModel';

interface TechnologiesProps {
  config: TechnologiesConfig;
}

const props = defineProps<TechnologiesProps>();
</script>

<template>
  <section class="section-content">
    <h2 class="heading-2">Technologies</h2>
    <div class="technology-modules">
      <TechnologyModule
        class="technology-module"
        v-for="technologyModule in props.config.technologyModules"
        :key="technologyModule.name"
        :heading="technologyModule.name"
        :figures="technologyModule.figures"
        :start-collapsed="technologyModule.startCollapsed"
      />
    </div>
    <div class="technologies-background-square"></div>
  </section>
</template>

<style scoped lang="scss">
.technology-modules {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .technology-module {
    grid-column: 2/-2;
    z-index: 1;
  }
}

.technologies-background-square {
  position: absolute;
  top: 95vh;
  left: 0;
  height: 100vh;
  width: 50%;
  background-color: $background-color-3;
}
</style>
