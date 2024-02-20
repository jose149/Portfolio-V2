<script lang="ts" setup>
import AppLink from '@/components/shared/AppLink/AppLink.vue';
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';
</script>
<template>
  <section class="eight-column-grid section-contact">
    <main class="contact-content">
      <div class="contact-info">
        <p class="contact-info-heading">Contact info</p>
        <ul class="contact-info-methods">
          <li class="contact-info-method">
            <SvgIcon name="Phone" :size="{ height: 20, width: 20 }" />
            +34 67130094
          </li>
          <li class="contact-info-method">
            <SvgIcon name="Mail" :size="{ height: 20, width: 20 }" />
            crespi.valero.jose@gmail.com
          </li>
        </ul>
      </div>
      <div class="contact-cta">
        <p class="contact-heading">Let’s work together on our next project</p>
        <AppLink type="primary" link="mailto:crespi.valero.jose@gmail.com">
          <template #linkContent>Contact</template>
        </AppLink>
      </div>
    </main>
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.section-contact {
  padding: 10rem 0;
}
.contact-content {
  background-color: $background-color-2;
  padding: 5rem;
  grid-column: 2/-2;
  display: grid;
  grid-template-columns: 50% 50%;
  @media only screen and (max-width: $bp-large) {
    row-gap: 5rem;
  }
  .contact-info {
    @media only screen and (max-width: $bp-large) {
      grid-column: 1/-1;
    }
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &-heading {
      color: #fff;
      font-size: 2rem;
      font-weight: 500;
    }
    &-methods {
      color: #ccc;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .contact-info-method {
        color: #ccc;
        font-size: 1.6rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 2rem;
      }
    }
  }
  .contact-cta {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5rem;
    @media only screen and (max-width: $bp-large) {
      grid-column: 1/-1;
      align-items: center;
    }

    .contact-heading {
      color: #fff;
      font-size: 4rem;
      font-weight: 500;
      line-height: 1;
      @media only screen and (max-width: $bp-large) {
        font-size: 3rem;
      }
    }
  }
}
</style>
