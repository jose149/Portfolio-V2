<script setup lang="ts">
import { AppButtonState, AppButtonType } from './AppLink.model';

export interface AppButtonProps {
  link: string;
  type?: AppButtonType;
  state?: AppButtonState;
  downloadName?: string;
  ariaLabel?: string;
}
const props = withDefaults(defineProps<AppButtonProps>(), {
  type: 'primary',
  state: 'enabled',
});

interface AppButtonEmits {
  (click: 'click', event: MouseEvent): void;
}

const emit = defineEmits<AppButtonEmits>();

function handleClick(event: MouseEvent): void {
  if (props.state === 'enabled') {
    emit('click', event);
  }
}
</script>

<template>
  <a
    class="app-link"
    :class="[[props.type], [props.state]]"
    :href="props.link"
    :aria-label="props.ariaLabel"
    target="_blank"
    rel="noreferrer"
    @click="handleClick"
  >
    <slot name="linkContent"></slot>
  </a>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.app-link,
.app-link:visited,
.app-link:active {
  border-radius: $border-radius;
  padding: $link-padding;
  width: max-content;
  font: $font-link;
  cursor: pointer;
  transition: all $transition-time;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      transform-origin: center;
      filter: brightness(1.1);
    }
  }
}

.primary {
  color: white;
  background: $link-background-primary;
  text-transform: uppercase;
}

.secondary {
  color: black;
  background: $color-white;
}
</style>
