<script lang="ts" setup>
import { 
  transformPropsFormat,
  SVG_ICON_FILE_NAME_MAP,
 } from './SvgIconModel';
 
 import type { 
  SvgIconColor, 
  SvgIconSize, 
  SvgIconTranslate, 
  SvgIconType, 
  SvgIconTransformedProps
 } from './SvgIconModel';

import { computed, defineAsyncComponent } from 'vue';

  export interface SvgIconProps {
    name: SvgIconType;
    translate?: SvgIconTranslate;
    size?: SvgIconSize;
    color?: SvgIconColor;
  }

  const props = defineProps<SvgIconProps>();

  const settings = computed<SvgIconTransformedProps>(() =>
    transformPropsFormat(props.name, props.translate, props.size, props.color)
  );
  
  const dynamicComponent = computed(() => {
  // NOTE:
  // Be catious when doing changes here.
  // We are using this Vite plugin to make those dynamic imports work:
  // https://www.npmjs.com/package/vite-plugin-dynamic-import
  const name = SVG_ICON_FILE_NAME_MAP[props.name];
  return defineAsyncComponent(() => import(`./icons/${name}.vue`));
});
</script>

<template>
  <div v-if="$attrs.class">
    <Suspense>
      <component
      :is="dynamicComponent"
      :width="settings.width"
      :height="settings.height"
      :viewBox="settings.viewBox"
      :style="settings.style"
      :class="props.name"
    />
  </Suspense>
  </div>
  <template v-else>
    <Suspense>
      <component
        :is="dynamicComponent"
        :width="settings.width"
        :height="settings.height"
        :viewBox="settings.viewBox"
        :style="settings.style"
        :class="props.name"
      />
    </Suspense>
  </template>
</template>