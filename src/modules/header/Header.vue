<script setup lang="ts">
import NavigationBarHorizontal from '@/components/shared/navigationBar/NavigationBarHorizontal.vue';
import { HeaderConfig } from './HeaderViewModel';

interface HeaderProps {
  config: HeaderConfig;
  activeSection: string;
}
interface HeaderEmits {
  (eventName: 'navigation-item-clicked', sectionId: string): void;
}

const props = defineProps<HeaderProps>();
const emit = defineEmits<HeaderEmits>();

window.addEventListener('scroll', function () {
  var navbar = document.getElementsByClassName('portfolio-header');

  if (window.scrollY > 0) {
    // Cambia 50 por la cantidad de píxeles que desees para activar el cambio de color
    navbar[0].classList.remove('transparent');
  } else {
    navbar[0].classList.add('transparent');
  }
});
</script>

<template>
  <header class="portfolio-header transparent">
    <img class="header-logo" :src="props.config.logo" alt="Jose Logo" />
    <NavigationBarHorizontal
      :items="props.config.sections"
      :active-item="props.activeSection"
      @item-clicked="emit('navigation-item-clicked', $event)"
    />
  </header>
</template>

<style scoped lang="scss">
.portfolio-header {
  position: fixed;
  left: 0px;
  top: 0;
  padding: 0 7rem;
  height: 6rem;
  width: 100%;
  background-color: $background-color-3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 1);
  z-index: 2;
  transition: 0.5s;
  .header-logo {
    max-height: 70%;
    width: auto;
  }
}

.transparent {
  background-color: transparent;
  box-shadow: none;
}
</style>
