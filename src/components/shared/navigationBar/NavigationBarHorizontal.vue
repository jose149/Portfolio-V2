<script lang="ts" setup>
import { NavigationBarLink } from '@/modules/header/HeaderViewModel';

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
      class="nav-bar-link"
      :class="{
        selected: item.isSelected,
        highlighted: item.isHighlighted,
      }"
    >
      {{ item.name }}
    </a>
  </nav>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.navigation-bar-horizontal {
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.5s;

  .nav-bar-link,
  .nav-bar-link:link,
  .nav-bar-link:visited {
    padding: 1rem 1.5rem;
    color: $color-white;
    font: $font-link;
    text-transform: uppercase;
    cursor: pointer;
  }

  // .highlighted {
  //   @extend .nav-bar-link;
  //   border-radius: $border-radius;
  //   width: max-content;
  //   background: $button-cta-background;
  //   transition: all $transition-time;

  //   @media (hover: hover) {
  //     &:hover {
  //       transform: translateY(-2px);
  //       transform-origin: center;
  //       filter: brightness(1.1);
  //     }
  //   }
  // }
  .selected {
    color: $color-primary-light;
    font-weight: 600;
  }

  @media (hover: hover) {
    .nav-bar-link:hover {
      color: $color-primary-light;
      font-weight: 600;
      filter: brightness(1.2);
    }
  }
}
</style>
