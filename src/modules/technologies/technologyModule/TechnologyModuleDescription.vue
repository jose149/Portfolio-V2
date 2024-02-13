<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Figure } from '../technologiesViewModel';
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';

interface TechnologyModuleDescriptionProps {
  figures: Figure[];
}

interface TechnologyModuleDescriptionEmits {
  (eventName: 'resizeOberserver', techGroup: HTMLDivElement | null): void;
}

const props = defineProps<TechnologyModuleDescriptionProps>();

const emit = defineEmits<TechnologyModuleDescriptionEmits>();

const techGroup = ref<HTMLDivElement | null>(null);
onMounted(() => {
  const resizeObserver = new ResizeObserver(() =>
    emit('resizeOberserver', techGroup.value)
  );
  if (!techGroup.value) {
    return;
  }
  resizeObserver.observe(techGroup.value);
});
</script>

<template>
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
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.technologies-container {
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;

  .technology {
    position: relative;
    width: 20%;
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
</style>
