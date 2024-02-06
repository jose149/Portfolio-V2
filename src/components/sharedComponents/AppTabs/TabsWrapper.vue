<script setup lang="ts">
import { ref, watchEffect } from "vue";

import SelectedUnderline from "./SelectedUnderline.vue";

interface TabsWrapperProps {
  tabTitles: any[];
  selectedTitleIndex: number;
}

type TabsWrapperEmits = (
  eventName: "selected-tab-title-index",
  selectedTitleIndex: number,
) => void;

const props = defineProps<TabsWrapperProps>();
const emit = defineEmits<TabsWrapperEmits>();

const selectedTitleIndex = ref<number>(props.selectedTitleIndex);

function setSelectedTabTitleIndex(index: number): void {
  selectedTitleIndex.value = index;
  emit("selected-tab-title-index", selectedTitleIndex.value);
}

/*
 *  SelectedUnderline animation
 */
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
  { flush: "post" },
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
