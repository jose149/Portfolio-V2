<template>
<section class="section section-contact">
  <main class="contact-content">
    <div class="contact-info">
      <p class="contact-info-heading">Contact info</p>
      <ul class="contact-info-methods">
        <li class="contact-info-method"><SvgIcon name="Phone" :size="isSmallDevice
          ?{height:16,width: 16}
          :{height:20, width:20}"/> +34 67130094</li>
        <li class="contact-info-method"><SvgIcon name="Mail" :size="isSmallDevice
          ?{height:16,width: 16}:{height:20, width:20}"/> crespi.valero.jose@gmail.com</li>
      </ul>
    </div>
    <div class="contact-cta">
      <p class="contact-heading">Let’s work together on our next project</p>
      <a class="cta" href="mailto:crespi.valero.jose@gmail.com" target="_blank" rel="noreferrer">
          Contact
      </a>
    </div>
  </main>
</section>
</template>


<script lang="ts" setup>
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue'
import { StateKey } from "@/state/state";
import { inject } from 'vue';

const {isSmallDevice} = inject(StateKey)!;


</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
@import "@/styles/layout/Contact.scss";

</style>
