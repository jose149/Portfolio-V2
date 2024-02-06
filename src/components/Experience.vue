<!-- <template>
    <div class="soft-skills-container">
      <div
      v-for="fact in experienceFacts"
      :key="fact.title"
      class="experience-fact"
      :class="{larger: fact.isLarger}">
        <span v-if="fact.quantity" class="experience-years">{{ fact.quantity }}</span>
        <SvgIcon v-else-if="fact.icon" :name="fact.icon" color="primary-dark" :size="{height: isSmallDevice? 30: undefined}"/>
        <span class="experience-title">{{ fact.title }}</span>
      </div>
    </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';
import type { SvgIconType } from '@/libraries/storybook/svgIcon/SvgIconModel';
import { StateKey } from "@/state/state";
import { inject } from 'vue';

const {isSmallDevice} = inject(StateKey)!;

  interface ExperienceFacts {
    title: string;
    icon?: SvgIconType
    quantity?: string;
    isLarger?: boolean;
  }
  const experienceFacts: ExperienceFacts[] = [
    {
      title: 'Year Experience',
      quantity: '+2',
      isLarger: true
    },
    {
      title: 'Fast',
      icon: 'Timer'
    },
    {
      title: 'Intuitive',
      icon: 'EyePlus'
    },
    {
      title: 'Responsive',
      icon: 'Mobile'
    },
    {
      title: 'Productive',
      icon: 'Rocket'
    }
  ]
</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
@import "@/styles/layout/Experience.scss";
</style> -->
