<template>
  <section class="section section-technologies">
    <div class="technology-modules-background"></div>
    <div class="technology-modules">
      <AppTabs
        v-if="isSmallDevice"
        :tab-titles="technologyModules.map((module) => module.type)"
        :default-selected-title="selectedModule.type ?? TechnologyModuleType.FrontEnd"
        @selected-tab-title="selectTechnologyFromTabs"
      />
      <div v-else class="app-cards">
        <button 
        class="technology-module"
        :class="{selected: technologyModule.type === selectedModule.type}"
        v-for="technologyModule in technologyModules"
        :key="technologyModule.type"
        @:click="selectTechnology(technologyModule.type)"
        >
          <SvgIcon :name="technologyModule.iconName" :size="{height:50, width:50}" color="white"/>
          <p class="heading-3">{{ technologyModule.type }}</p>
          <p class="heading-4 module-open">Open Technology <SvgIcon name="RightArrow" :size="{height:17, width:17}"/></p>
        </button>
      </div>
    </div>
    
    <div class="technologies">
      <div class="technologies-content">
        <figure class="technology" v-for="technology in selectedModule.technologies">
        <SvgIcon :name="technology.iconName" :size="isSmallDevice? {
          height:50,width: 50
        }:{
          height:120,width: 120
        }"/>
        <figcaption class="fig-caption technology-caption">{{ technology.name }}</figcaption>
      </figure>
      </div>
    </div>  
  </section>

</template>

<script lang="ts" setup>
import { technologyModules, type ITechnologyModule, TechnologyModuleType } from "@/libraries/data/technologies";
import AppTabs from "@/components/sharedComponents/AppTabs/AppTabs.vue";
import { inject, ref } from "vue";
import { StateKey } from "@/state/state";
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue'

const {isSmallDevice} = inject(StateKey)!;

const predefinedSelectedModule = technologyModules.find((technologyModule) => technologyModule.type === TechnologyModuleType.FrontEnd)
const selectedModule = ref<ITechnologyModule>(predefinedSelectedModule!)

function selectTechnology(technologyType: TechnologyModuleType): void{
  selectedModule.value = technologyModules.find((technologyModule) => technologyModule.type === technologyType)!
}

function selectTechnologyFromTabs(technologyTypeString: string):void{
  selectTechnology(technologyTypeString as TechnologyModuleType)
}
</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
@import "@/styles/layout/Technologies.scss";

</style>