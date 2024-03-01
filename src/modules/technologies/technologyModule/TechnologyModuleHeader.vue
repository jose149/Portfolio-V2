<script setup lang="ts">
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';
import { SvgIconSizeUnit } from '@/libraries/storybook/svgIcon/SvgIconModel';

interface TechnologyModuleHeaderProps {
  heading: string;
  isCollapsed: boolean;
}

const props = defineProps<TechnologyModuleHeaderProps>();
</script>

<template>
  <div class="technology-module-header">
    <SvgIcon
      class="chevron"
      :class="{ up: !props.isCollapsed }"
      name="Chevron"
      color="white"
      :size="{
        height: 1.5,
        width: 1.5,
        unit: SvgIconSizeUnit.rem,
      }"
    />
    <h3 class="technology-module-heading">
      {{ props.heading }}
    </h3>
  </div>
</template>

<style scoped lang="scss">
.technology-module-header {
  padding: 2rem 2rem;
  border-bottom: 0.5rem solid $color-primary;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  & .chevron {
    transition: all 0.25s;
    transform: rotate(-90deg);
  }

  &:hover {
    filter: brightness(1.2);
  }
  .up {
    transform: rotate(0deg);
  }
  .technology-module-heading {
    color: $color-white;
    font-size: 2rem;
  }
}
</style>
