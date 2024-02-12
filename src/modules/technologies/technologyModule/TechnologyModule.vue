<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Figure } from '@/modules/technologies/technologiesViewModel';
import TechnologyModuleHeader from './TechnologyModuleHeader.vue';
import TechnologyModuleDescription from './TechnologyModuleDescription.vue';

interface TechnologyModuleProps {
  heading: string;
  figures: Figure[];
  startCollapsed?: boolean;
}
const props = defineProps<TechnologyModuleProps>();
const isCollapsed = ref<boolean>(props.startCollapsed);

function toggleCollapseBox(): void {
  isCollapsed.value = !isCollapsed.value;
}

const techGroup = ref<HTMLDivElement | null>(null);
const groupHeight = ref<string>('');

onMounted(() => {
  const resizeObserver = new ResizeObserver(setGroupHeight);
  if (!techGroup.value) {
    return;
  }
  resizeObserver.observe(techGroup.value);
  setGroupHeight();
});

function setGroupHeight() {
  groupHeight.value = `${techGroup.value?.clientHeight}px`;
}
</script>

<template>
  <div class="technology-module">
    <TechnologyModuleHeader
      :heading="props.heading"
      :is-collapsed="isCollapsed"
      @click="toggleCollapseBox"
    />
    <div class="technology-module-description" :class="{ open: !isCollapsed }">
      <TechnologyModuleDescription ref="techGroup" :figures="props.figures" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.technology-module {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background: linear-gradient(
    -20deg,
    $color-black-dark 0%,
    $color-black-light 90%,
    $color-black-dark 120%
  );
  box-shadow: 0px 0px 5px rgba(white, 0.1);

  &-description {
    height: 0;
    overflow: hidden;
    transition: all 0.5s;
    --webkit-transition: all 0.5s;
    &.open {
      height: v-bind(groupHeight);
    }
  }
}
</style>
