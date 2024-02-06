<template>
  <div ref="carrousselContainer" class="horizontal-carroussel">
    <button v-if="!isSmallDevice"
    class="arrow-button arrow-button-left"
    @:click="rotateCarrousselTo('left')">
      <SvgIcon
      :name="'Arrow'"
      :color="'white'"
      :size="{height:50, width: 50}"
      />
    </button>
    <ProductCard
      v-for="(item, index) in items"
      class="carroussel-item"
      :style="{
        transform: (index===currentIndex) ?'':`translate(${getItemXTranslation(index)}%, -50%) scale(${getItemScale(index)})`,
        'z-index':`${getItemDeep(index)}`,
        opacity: `${isItemVisible(index)?1:0}`
      }"
      :key="index"
      :card="item"
      :is-selected="index===currentIndex"
      :is-highlighted="index===configuration.initialIndex"
    />
    <button v-if="!isSmallDevice" class="arrow-button arrow-button-right" @:click="rotateCarrousselTo('right')">
      <SvgIcon
      :name="'Arrow'"
      :color="'white'"
      :size="{height:50, width: 50}"
      />
    </button>
  </div>
</template>

<script lang="ts" setup>
import ProductCard from '@/components/sharedComponents/ProductCard.vue'
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue'
import { inject, onMounted, ref } from 'vue'
import { StateKey } from '@/state/state'

const { isSmallDevice } = inject(StateKey)!

interface CarrousselConfiguration {
  visibleItems: number
  initialIndex: number
}
interface CarrousselProps {
  items: any[]
  configuration?: CarrousselConfiguration

}
const props = withDefaults(defineProps<CarrousselProps>(), {
  configuration: () => ({ visibleItems: 3, initialIndex: 0 })
})

function isItemVisible (index: number): boolean {
  const relativeIndex = getEquivalentIndex(index)
  return relativeIndex >= currentIndex.value - sideVisibleItems && relativeIndex <= currentIndex.value + sideVisibleItems
}

function getEquivalentIndex (index: number): number {
  if (currentIndex.value <= 0 + sideVisibleItems && index >= (numberOfItems - 1) - (sideVisibleItems - currentIndex.value)) {
    return index - (numberOfItems)
  }
  if (currentIndex.value >= (numberOfItems - 1) - sideVisibleItems && index <= sideVisibleItems) {
    return index + (numberOfItems)
  }
  return index
}

function getItemXTranslation (index: number): number {
  const factor = isSmallDevice.value ? 40 : 75
  console.log(factor)
  const relativeIndex = getEquivalentIndex(index)
  return -50 - factor * (currentIndex.value - (relativeIndex))
}

function getItemScale (index: number): number {
  const relativeIndex = getEquivalentIndex(index)
  return 1 - 0.2 * Math.abs((relativeIndex) - currentIndex.value)
}

function getItemDeep (index: number): number {
  const relativeIndex = getEquivalentIndex(index)
  const totalItems = props.configuration.visibleItems
  return totalItems - Math.abs((relativeIndex) - currentIndex.value)
}

function rotateCarrousselTo (side: 'left' | 'right'): void {
  if (side === 'left') {
    if (currentIndex.value === 0) {
      currentIndex.value = numberOfItems - 1
      return
    }
    currentIndex.value--
  } else {
    if (currentIndex.value === (numberOfItems - 1)) {
      currentIndex.value = 0
      return
    }
    currentIndex.value++
  }
}

const currentIndex = ref<number>(props.configuration.initialIndex)

const numberOfItems = props.items.length
const sideVisibleItems = Math.trunc(props.configuration.visibleItems / 2)
const carrousselContainer = ref<HTMLElement>()
onMounted(() => {
})
</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
.horizontal-carroussel{
  position: relative;
  width: 100%;
  aspect-ratio: 7 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: $bp-medium) {
    aspect-ratio: 6 / 3;
  }

  .arrow-button{
    position: absolute;
    cursor: pointer;
    border-radius: 50%;
    z-index: 5;
    &-left{
      transform: rotateZ(180deg);
      left: 0;
    }
    &-right{
      right: 0;
    }
  }
    .carroussel-item{
      position: absolute;
      top: 50%;
      left: 50%;
    }
}
</style>
