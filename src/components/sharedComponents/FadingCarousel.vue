<template>
  <div>
    <div v-for="(logo, index) in logos"
    :key="index">
      <transition
        name="fade"
        @after-enter="itemToShow = null"
        @after-leave="updateVisibleItem(index)"
        appear
      >
      <!-- <div v-if="isItemVisible(index)">
          <SvgIcon :name="`${logo}`" :size="isSmallDevice ?{height: 100, width: 100}: {height: 192, width:192}"/>
        </div> -->

        <div v-if="isItemVisible(index)">
          <SvgIcon :name="`${logo}`" :size="{height: 192, width:192}"/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue'
import type { SvgIconType } from '@/libraries/storybook/svgIcon/SvgIconModel'

interface FaidingCarousselResponseProps {
  logos: SvgIconType[]
}

const props = defineProps<FaidingCarousselResponseProps>()

const itemToShow = ref<number | null>(0)

function isItemVisible (index: number): boolean {
  return index === itemToShow.value
}

function updateVisibleItem (index: number): void {
  if (index === props.logos.length - 1) {
    itemToShow.value = 0
    return
  }
  itemToShow.value = index + 1
}
</script>

<style scoped lang="scss">

</style>
