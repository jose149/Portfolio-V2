<script setup lang='ts'>
import { SvgIconType } from '@/libraries/storybook/svgIcon/SvgIconModel';
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue'
import { StateKey } from '@/state/state';
import { inject, ref } from 'vue';
interface TechnologyModuleTechnology{
  name: string;
  iconName: SvgIconType;
}
interface TechnologyModuleProps {
  heading: string;
  technologies: TechnologyModuleTechnology[]
  show: boolean;
}
const props = defineProps<TechnologyModuleProps>()
  const {isSmallDevice} = inject(StateKey)!;
  const showModule = ref<boolean>(props.show);
</script>

<template>
  <div class="technology-module">
    <h3 class="technology-module-heading" @click="showModule = !showModule"> {{  $props.heading }}</h3>
    <div class="technology-module-description" v-if="showModule">
      <figure class="technology" v-for="technology in $props.technologies" :key="technology.iconName">
        <SvgIcon :name="technology.iconName" :size="isSmallDevice? {
          height:50,width: 50
        }:{
          height:60,width: 60
        }"/>
        <figcaption class="fig-caption technology-caption">{{ technology.name }}</figcaption>
      </figure>
    </div>

  </div>

</template>

<style scoped lang='scss'>
  @import "@/styles/main.scss";
  .technology-module{
    border-radius: 15px;
    width: 100%;
    box-shadow: 0 0 2px $color-black-lightest-4;
    display: flex;
    flex-direction: column;

    &-heading{
      color:white;
      padding: 1rem 1.5rem;
      border-bottom: .5rem solid $color-primary;
      cursor: pointer;
    }

    &-description {
      padding: 3rem 2rem;
      display: flex;
      flex-wrap: wrap;
      row-gap: 2rem;
      flex-shrink: 0;

      .technology{
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1rem;
        filter: saturate(0.4);
        &-caption{
          color: $color-white;
        }
      }
    }
  }
</style>