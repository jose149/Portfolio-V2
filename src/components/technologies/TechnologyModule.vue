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
    <header class="technology-module-header"
      @click="showModule = !showModule">
      <SvgIcon name="Chevron" color="white" :size="isSmallDevice? {
          height:16,width: 16
        }:{
          height:16,width: 16
        }"/>
      <h3 class="technology-module-heading"> 
        {{  $props.heading }}
      </h3> 
    </header>
    <transition name="lifting">
      <div class="technology-module-description" v-if="showModule">
      <figure class="technology" v-for="technology in props.technologies" :key="technology.iconName">
        <SvgIcon :name="technology.iconName" :size="isSmallDevice? {
          height:50,width: 50
        }:{
          height:60,width: 60
        }"/>
        <figcaption class="fig-caption technology-caption">{{ technology.name }}</figcaption>
      </figure>
    </div>
    </transition>
    
  </div>

</template>

<style scoped lang='scss'>
  @import "@/styles/main.scss";
  .technology-module{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: $color-black-dark-2;
    border-radius: 15px;

    &-header{
      padding: 2rem 2rem;
      border-bottom: .5rem solid $color-primary;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 1.5rem;

      &:hover{
        filter: brightness(1.2);
      }
      .technology-module-heading{
        color:$color-white;
        font-size: 2rem;
      }
    }

    &-description {
      box-sizing: border-box;
      overflow: hidden;
      box-sizing: border-box;
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
        filter: saturate(0.7);
        &-caption{
          color: $color-white;
        }
      }
    }
  }
</style>