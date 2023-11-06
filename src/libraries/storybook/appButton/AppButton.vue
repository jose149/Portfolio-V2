<script setup lang="ts">
import { computed } from 'vue';

import type { AppButtonState, AppButtonType } from './AppButton.model';
import LoadingDots from './LoadingDots.vue';

export interface AppButtonProps {
  type: AppButtonType;
  state?: AppButtonState;
  wide?: boolean;
}

const props = withDefaults(defineProps<AppButtonProps>(), { state: 'default' });

interface AppButtonEmits {
  (click: 'click', event: MouseEvent): void;
}

const emit = defineEmits<AppButtonEmits>();

const inLoadingState = computed(() => props.state === 'loading');

function handleClick(event: MouseEvent): void {
  if (props.state === 'default') {
    emit('click', event);
  }
}
</script>

<template>
  <button
    :class="{
      'app-button': true,
      [props.type]: true,
      [props.state]: true,
      wide: props.wide,
    }"
    @click="handleClick"
  >
    <LoadingDots v-if="inLoadingState" class="loading-dots" />
    <slot name="left-icon"></slot>
    <span
      :class="{
        hidden: inLoadingState,
        'no-availability-text': props.state === 'no-availability',
      }"
    >
      <slot />
    </span>
    <slot name="right-icon"></slot>
  </button>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.app-button {
  position: relative;
  padding: $button-padding;
  font-size: $button-font-size;
  font-weight: $button-font-weight;
  cursor: pointer;
  transition: all $transition-time;
  border-radius: $border-radius;

  &.wide {
    width: 100%;
  }

  &.loading {
    cursor: not-allowed;
  }

  @media (hover: hover) {
    &:not(.disabled):not(.loading):not(.no-availability):hover {
      transform: translateY(-2px);
      transform-origin: center;
      filter: brightness(1.1);
    }
  }

  &.primary {
    background: linear-gradient(135deg, $color-primary-light 0%, $color-primary-dark 100%);
    color: white;
  }

  &.white {
    background-color: $color-white;
    color: black;
  }

  .loading-dots {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }

  .hidden {
    visibility: hidden;
  }

  .no-availability-text {
    opacity: 20%;
  }
}
</style>
