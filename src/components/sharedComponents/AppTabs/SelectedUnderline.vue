<script lang="ts" setup>
interface SelectedUnderlineProps {
  selectedTabElementWidth: number
  left: number
}
const props = defineProps<SelectedUnderlineProps>()
</script>

<template>
  <div
    class="selected-underline"
    :style="{
      width: `${props.selectedTabElementWidth}px`,
      left: `${props.left}px`
    }"
  />
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.selected-underline {
  height: 2px;
  position: absolute;
  bottom: 0;
  background-color: $color-primary-light;
  transition: 0.15s all ease-out;}
</style>
