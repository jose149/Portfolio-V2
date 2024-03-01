<script lang="ts" setup>
import { NavigationBarItem } from '@/modules/header/HeaderViewModel';
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';
import { SvgIconSizeUnit } from '@/libraries/storybook/svgIcon/SvgIconModel';

interface NavigationBarProps {
  items: NavigationBarItem[];
  activeItem: string;
}

interface NavigationBarTextEmits {
  (eventName: 'item-clicked', sectionId: string): void;
}

const props = defineProps<NavigationBarProps>();

const emit = defineEmits<NavigationBarTextEmits>();
</script>

<template>
  <nav class="navigation-bar-horizontal">
    <a
      v-for="item in props.items"
      :key="item.id"
      :href="item.id"
      :aria-label="`Move to section ${item.name}`"
      class="navigation-bar-link"
      :class="{ active: item.id === props.activeItem }"
      @click.prevent="emit('item-clicked', item.id)"
    >
      <SvgIcon
        :name="item.iconName"
        :size="{ height: 80, unit: SvgIconSizeUnit['%'] }"
        :color="'white'"
      />
    </a>
  </nav>
</template>

<style scoped lang="scss">
.navigation-bar-horizontal {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: inherit;
  z-index: 2;
  .navigation-bar-link,
  .navigation-bar-link:link,
  .navigation-bar-link:active,
  .navigation-bar-link:visited {
    border: solid 1px rgba($color: white, $alpha: 0.1);
    position: relative;
    border-radius: 50%;
    height: 60%;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active {
    background-color: $color-primary;
  }
}
</style>
