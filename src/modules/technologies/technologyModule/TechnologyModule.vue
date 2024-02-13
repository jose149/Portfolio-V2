<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Figure } from '@/modules/technologies/technologiesViewModel';
import TechnologyModuleHeader from './TechnologyModuleHeader.vue';
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';

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
      <div ref="techGroup" class="technologies-container">
        <figure
          v-for="figure in props.figures"
          :key="figure.iconName"
          class="technology"
        >
          <SvgIcon
            :name="figure.iconName"
            :size="{
              height: 30,
              width: 30,
            }"
          />
          <figcaption class="fig-caption technology-caption">
            {{ figure.caption }}
          </figcaption>
        </figure>
      </div>
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
  border-radius: 5px;
  background: $background-color-4;

  &-description {
    height: 0;
    width: 100%;
    overflow: hidden;
    transition: all 0.5s;
    --webkit-transition: all 0.5s;
    &.open {
      height: v-bind(groupHeight);
    }
    .technologies-container {
      padding: 3rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;

      .technology {
        width: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1rem;
        filter: saturate(0.7);
        &-caption {
          color: $color-white;
        }
      }
    }
  }
}
</style>
