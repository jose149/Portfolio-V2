<template>
  <nav class="navigation-menu">
    <ul class="navigation-menu-list">
      <li
        class="navigation-menu__item"
        v-for="section in sections"
        :key="section"
      >
        <a class="navigation-menu__link"> {{ section }} </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";

enum Sections {
  home = "home",
  technologies = "technologies",
  projects = "projects",
  aboutMe = "about me",
  contact = "contact",
}
const sections = ref(Sections);
</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
@import "@/styles/layout/VerticalNavigationBar.scss";
</style>
