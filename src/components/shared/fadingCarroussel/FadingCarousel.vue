<script lang="ts" setup>
import { ref, watch } from 'vue';
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';
import type { SvgIconType } from '@/libraries/storybook/svgIcon/SvgIconModel';
import { SvgIconSizeUnit } from '@/libraries/storybook/svgIcon/SvgIconModel';

interface FaidingCarousselResponseProps {
  start: boolean;
  logos: SvgIconType[];
}

const props = defineProps<FaidingCarousselResponseProps>();

const itemToShow = ref<number | null>(null);

watch(
  () => props.start,
  () => (itemToShow.value = 0)
);

function isItemVisible(index: number): boolean {
  return index === itemToShow.value;
}

function updateVisibleItem(index: number): void {
  if (index === props.logos.length - 1) {
    itemToShow.value = 0;
    return;
  }
  itemToShow.value = index + 1;
}
</script>

<template>
  <div class="fading-carroussel">
    <div v-for="(logo, index) in logos" :key="index">
      <transition
        name="fade"
        @after-enter="itemToShow = null"
        @after-leave="updateVisibleItem(index)"
      >
        <div class="carroussel-item" v-if="isItemVisible(index)">
          <SvgIcon
            :name="`${logo}`"
            :size="{ height: 100, width: 100, unit: SvgIconSizeUnit['%'] }"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fading-carroussel {
  display: flex;
  justify-content: center;
  align-items: center;
}
.carroussel-item {
  transition: opacity 2s;
}
</style>
