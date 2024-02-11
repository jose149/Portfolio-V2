<script lang="ts" setup>
import { NavigationBarLink } from '@/modules/header/HeaderViewModel';
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';
import { SvgIconSizeUnit } from '@/libraries/storybook/svgIcon/SvgIconModel';

interface NavigationBarTextProps {
  items: NavigationBarLink[];
}

const props = defineProps<NavigationBarTextProps>();
</script>

<template>
  <nav class="navigation-bar-horizontal">
    <a
      v-for="item in props.items"
      :key="item.id"
      :href="item.id"
      :aria-label="`Move to section ${item.name}`"
      class="navigation-bar-link"
      :class="{ highlighted: item.isSelected }"
    >
      <SvgIcon
        :class="{ 'icon-highlighted': item.isSelected }"
        :name="item.iconName"
        :size="{ height: 60, width: 60, unit: SvgIconSizeUnit['%'] }"
        :color="'white'"
      />
    </a>
  </nav>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.navigation-bar-horizontal {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 6vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: $color-background-navigation-bar-mobile;
  z-index: 2;
  .navigation-bar-link,
  .navigation-bar-link:link,
  .navigation-bar-link:visited {
    position: relative;
    border-radius: 15px;
    height: 100%;
    background-color: $color-background-navigation-bar-mobile-icons;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon-highlighted {
      fill: red;
    }
  }
}
</style>