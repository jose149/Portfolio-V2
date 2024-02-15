<script setup lang="ts"></script>

<template>
  <div class="description">
    <header class="heading-3 description-heading">
      <span class="primary">Hi,</span>
      I'm Jose
    </header>
    <div class="description-text">
      <p class="description-paragraph">
        I'm a passionated Front end engineer, focused on developing the best
        solutions, in the most atomic and profitable way, based on the customers
        needs.
      </p>
      <p class="description-paragraph">
        Recently I have been centered on continuous delivery and integration,
        design patterns, software quality techniques and best practices.
      </p>
    </div>
    <a
      class="cta"
      href="/assets/documents/JoseCrespiCV.pdf"
      download="CV_Jose_Crespi"
    >
      Download CV
    </a>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.description {
  padding-right: 2rem;
  grid-column: 6/-2;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  gap: 7rem;
  z-index: 1;
  @media only screen and (max-width: $bp-large) {
    grid-row: 3;
    grid-column: 2/-2;
    align-items: center;
  }
  &-heading {
    font-size: 4rem;
    .primary {
      color: $color-primary-light;
    }
  }

  &-text {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  &-paragraph {
    color: $color-white;
    font-size: 1.8rem;
    font-weight: 300;
    text-align: start;
  }

  .cta {
    width: max-content;
    position: relative;
    padding: $button-padding;
    font-size: $button-font-size;
    font-weight: $button-font-weight;
    cursor: pointer;
    transition: all $transition-time;
    border-radius: $border-radius;
    background: linear-gradient(
      135deg,
      $color-primary-light 0%,
      $color-primary-dark 100%
    );
    color: white;
    @media (hover: hover) {
      &:hover {
        transform: translateY(-2px);
        transform-origin: center;
        filter: brightness(1.1);
      }
    }
  }
}
</style>
