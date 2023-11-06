<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import SelectedUnderline from './SelectedUnderline.vue';

export interface AppTabsProps {
  tabTitles: string[];
  defaultSelectedTitle?: string;
}

const props = defineProps<AppTabsProps>();

const defaultSelectedTitleIndex = props.tabTitles.findIndex((title) => title === props.defaultSelectedTitle)

interface AppTabsEmits {
  (event: 'selected-tab-title', selectedTitle: string): void;
}

const emit = defineEmits<AppTabsEmits>();

const selectedTitleIndex = ref<number>(defaultSelectedTitleIndex);

function setSelectedTabTitleIndex(titleIndex: number): void {
  selectedTitleIndex.value = titleIndex;
  const selectedTabTitle = props.tabTitles[titleIndex]
  emit('selected-tab-title', selectedTabTitle);
}

const tabElements = ref<Element[]>([]);
const selectedTabElementWidth = ref(0);
const left = ref(0);
watchEffect(
  () => {
    selectedTabElementWidth.value =
      tabElements.value[selectedTitleIndex.value].clientWidth;

    left.value =
      tabElements.value[selectedTitleIndex.value].getBoundingClientRect().left -
      tabElements.value[0].getBoundingClientRect().left;
  },
  { flush: 'post' }
);
</script>

<template>
  <div class="tabs-wrapper">
    <ul class="tabs-header">
      <li
        v-for="(title, index) in props.tabTitles"
        :key="index"
        :ref="(element) => (tabElements[index] = element as Element)"
        :class="[
          `tab-title-${index}`,
          { selected: index === selectedTitleIndex },
        ]"
        @click="setSelectedTabTitleIndex(index)"
      >
        {{ title }}
      </li>
    </ul>
    <SelectedUnderline
      :selected-tab-element-width="selectedTabElementWidth"
      :left="left"
    />
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.tabs-wrapper {
  max-width: 100%;
  position: relative;
  .tabs-header {
    list-style: none;
    line-height: 1;
    display: flex;
    & li {
      width: fit-content;
      text-align: left;
      color: $color-white;
      cursor: pointer;
      transition: 0.15s all ease-out;
      padding-bottom: 1rem;
      margin-left: 0;
      font-size: 15px;

      &:not(:first-child) {
        margin-left: 15px;
      }

      &.selected {
        color: $color-primary-light;
      }
    }
  }
}
</style>