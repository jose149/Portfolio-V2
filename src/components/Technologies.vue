<script lang="ts" setup>
import {
  technologyModules,
  TechnologyModuleType,
} from '@/libraries/data/technologies';
import TechnologyModule from '@/components/technologies/TechnologyModule.vue';

function shouldShowTechnologyModule(module: TechnologyModuleType): boolean {
  switch (module) {
    case TechnologyModuleType.FrontEnd:
      return true;
    case TechnologyModuleType.BackEnd:
      return false;
    case TechnologyModuleType.UxUi:
      return false;

    default:
      return false;
  }
}
</script>

<template>
  <section class="section section-technologies">
    <h2 class="technologies-heading">Technologies</h2>
    <article class="technologies-modules">
      <TechnologyModule
        v-for="technologyModule in technologyModules"
        :heading="technologyModule.type"
        :technologies="technologyModule.technologies"
        :show="shouldShowTechnologyModule(technologyModule.type)"
      />
    </article>
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
@import '@/styles/layout/Technologies.scss';
</style>
@/pages/portfolio/models/technologies
