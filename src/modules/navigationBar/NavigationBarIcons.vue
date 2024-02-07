<script lang="ts" setup>
import { inject } from 'vue';
import { StateKey } from '@/state/state';
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';
import { type NavigationBarIconItem } from '@/pages/portfolio/models/PortfolioViewModel';

interface NavigationBarIconsProps {
  items: NavigationBarIconItem[];
}

const props = defineProps<NavigationBarIconsProps>();

const { isSmallDevice, isScrollAtTop } = inject(StateKey)!;
</script>

<template>
  <nav
    class="navigation-bar"
    :class="{
      mobile: isSmallDevice,
      desktop: !isSmallDevice,
      top: !isScrollAtTop && !isSmallDevice,
    }"
  >
    <ul class="nav-bar-list">
      <li v-for="item in props.items" class="nav-bar-item" :key="item.id">
        <a
          :href="item.id"
          :aria-label="`Move to section ${item.id}`"
          class="nav-bar-link"
          :class="{ highlighted: item.isSelected }"
        >
          <SvgIcon
            class="nav-bar-icon"
            :class="{ 'icon-highlighted': item.isSelected }"
            :name="item.iconName"
            :size="{ height: 12, width: 12 }"
          />
        </a>
      </li>
    </ul>
  </nav>
  <a
    aria-label="Open mail app to write me an email"
    class="contact-icon"
    href="mailto:crespi.valero.jose@gmail.com"
  >
    <SvgIcon
      :name="'Mail'"
      :color="'white'"
      :size="{ height: 20, width: 20 }"
    />
  </a>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
@import './NavigationBar.scss';
</style>
