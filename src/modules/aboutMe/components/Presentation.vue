<script setup lang="ts">
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue';
</script>

<template>
  <div class="presentation">
    <div class="presentation-image">
      <img
        loading="lazy"
        class="image"
        rel="preload"
        src="/assets/images/Profile/perfil2.webp"
        alt="Profile photo"
      />
      <div class="image-overlay"></div>
    </div>

    <div class="presentation-profile">
      <p class="heading-3 profile-name">José Crespí Valero</p>
      <p class="heading-3 profile-job">Front end engineer</p>
    </div>
    <div class="presentation-media">
      <a
        href="mailto:crespi.valero.jose@gmail.com"
        aria-label="Open mail app to write me an email"
        target="_blank"
        rel="noreferrer"
      >
        <SvgIcon
          :name="'Mail'"
          :color="'black'"
          :size="{ height: 20, width: 20 }"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/jose-cresp%C3%AD-valero-349594190/"
        aria-label="Open Linkedin to check my profesional profile"
        target="_blank"
        rel="noreferrer"
      >
        <SvgIcon :name="'Linkedin'" :size="{ height: 20, width: 20 }" />
      </a>
      <a
        href="https://github.com/jose149"
        aria-label="Open Github to check my projects"
        target="_blank"
        rel="noreferrer"
      >
        <SvgIcon :name="'GitHub2'" :size="{ height: 20, width: 20 }" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.presentation {
  padding-right: 10%;
  grid-row: 2;
  grid-column: 3/6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  z-index: 1;
  @media only screen and (max-width: $bp-large) {
    padding-right: 0;
    grid-column: 2/-2;
    padding-bottom: 5rem;
  }

  &-image {
    width: 100%;
    position: relative;
    @media only screen and (max-width: $bp-large) {
      padding: 0 20%;
    }
    .image {
      width: 100%;
    }
    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        0deg,
        $background-color-1 0%,
        rgba($background-color-1, 0.3) 40%,
        transparent 100%
      );
    }
  }
  &-profile {
    .profile-name {
      color: $color-white;
      margin-bottom: 1rem;
    }
    .profile-job {
      color: $color-white;
    }
  }

  &-media {
    grid-column: 2/5;
    grid-row: 1/-1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: center;
    gap: 1.5rem;
    a {
      box-shadow: 0px 0px 10px rgba(#000000, 0.1);
      padding: 0.5rem;
      border-radius: 5px;
      fill: $color-primary;
      transition: all 0.3s;
      background-color: $color-white;
      @media (hover: hover) {
        &:hover {
          background-color: $color-primary;
          fill: $color-white;
          transform: scale(1.3);
        }
      }
    }
  }
}
</style>
