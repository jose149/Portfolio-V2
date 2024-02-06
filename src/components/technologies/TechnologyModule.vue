<script setup lang="ts">
import { type SvgIconType } from "@/libraries/storybook/svgIcon/SvgIconModel";
import SvgIcon from "@/libraries/storybook/svgIcon/SvgIcon.vue";
import { StateKey } from "@/state/state";
import { inject, onMounted, ref } from "vue";
interface TechnologyModuleTechnology {
  name: string;
  iconName: SvgIconType;
}
interface TechnologyModuleProps {
  heading: string;
  technologies: TechnologyModuleTechnology[];
  show: boolean;
}
const props = defineProps<TechnologyModuleProps>();
const { isSmallDevice } = inject(StateKey)!;
const showModule = ref<boolean>(props.show);

const techGroup = ref<HTMLDivElement | null>(null);
const groupHeight = ref<string>("");

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
    <header class="technology-module-header" @click="showModule = !showModule">
      <SvgIcon
        class="chevron"
        :class="{ up: showModule }"
        name="Chevron"
        color="white"
        :size="
          isSmallDevice
            ? {
                height: 10,
                width: 10,
              }
            : {
                height: 16,
                width: 16,
              }
        "
      />
      <h3 class="technology-module-heading">
        {{ $props.heading }}
      </h3>
    </header>
    <div class="technology-module-description" :class="{ open: showModule }">
      <div ref="techGroup" class="technologies-container">
        <figure
          class="technology"
          v-for="technology in props.technologies"
          :key="technology.iconName"
        >
          <SvgIcon
            :name="technology.iconName"
            :size="
              isSmallDevice
                ? {
                    height: 30,
                    width: 30,
                  }
                : {
                    height: 60,
                    width: 60,
                  }
            "
          />
          <figcaption class="fig-caption technology-caption">
            {{ technology.name }}
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.technology-module {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;

  &-header {
    padding: 2rem 2rem;
    border-bottom: 0.5rem solid $color-primary;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    & .chevron {
      transition: all 0.25s;
      transform: rotate(-90deg);
    }

    &:hover {
      filter: brightness(1.2);
    }
    .up {
      transform: rotate(0deg);
    }
    .technology-module-heading {
      color: $color-white;
      font-size: 2rem;
    }
  }

  &-description {
    height: 0;
    overflow: hidden;
    transition: all 0.5s;
    --webkit-transition: all 0.5s;
    &.open {
      height: v-bind(groupHeight);
    }
    .technologies-container {
      padding: 2rem;
      display: flex;
      flex-wrap: wrap;
      row-gap: 2rem;

      .technology {
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
  }
}
</style>
