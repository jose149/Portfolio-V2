<script lang="ts" setup>
import TechnologyModule from '@/components/technologies/TechnologyModule.vue';
import { TechnologiesConfig } from './technologiesViewModel';

interface TechnologiesProps {
  config: TechnologiesConfig;
}

const props = defineProps<TechnologiesProps>();

// function shouldShowTechnologyModule(module: TechnologyModuleType): boolean {
//   switch (module) {
//     case TechnologyModuleType.FrontEnd:
//       return true;
//     case TechnologyModuleType.BackEnd:
//       return false;
//     case TechnologyModuleType.UxUi:
//       return false;

//     default:
//       return false;
//   }
// }
</script>

<template>
  <section class="section section-technologies">
    <h2 class="technologies-heading">Technologies</h2>
    <article class="technologies-modules">
      <TechnologyModule
        v-for="technologyModule in props.config.technologyModules"
        :heading="technologyModule.type"
        :technologies="technologyModule.technologies"
        :show="shouldShowTechnologyModule(technologyModule.type)"
      />
    </article>
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.section-technologies {
  background: $color-background;
  .technologies-heading {
    padding-bottom: 5rem;
    justify-self: center;
    color: $color-white;
    font-size: 4rem;
  }

  .technologies-modules {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
