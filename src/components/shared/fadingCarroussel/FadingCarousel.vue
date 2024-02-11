<script lang="ts" setup>
import { ref } from 'vue';
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';
import type { SvgIconType } from '@/libraries/storybook/svgIcon/SvgIconModel';
import { SvgIconSizeUnit } from '@/libraries/storybook/svgIcon/SvgIconModel';

interface FaidingCarousselResponseProps {
  logos: SvgIconType[];
}

const props = defineProps<FaidingCarousselResponseProps>();

const itemToShow = ref<number | null>(0);

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
        appear
        @after-enter="itemToShow = null"
        @after-leave="updateVisibleItem(index)"
      >
        <div v-if="isItemVisible(index)">
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
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
