<template>
  <section class="section section-about-me">
    <div class="about-me-square-background"></div>
    <h2 class="about-me-heading">About me</h2>
    <div class="description">
      <header class="heading-3 description-heading"><span class="primary">Hi,</span> I'm Jose</header>
      <div class="description-text">
        <p class="description-paragraph">I'm a passionated Front end engineer, focused on developing the best solutions, in the most atomic and profitable way, based on the customers needs.</p> 
        <p class="description-paragraph">Recently I have been centered on continuous delivery and integration, design patterns, software quality techniques and best practices.</p>
      </div>
      <a 
          class="cta"
          href="/assets/documents/JoseCrespiCV.pdf" 
          download="CV_Jose_Crespi">
            Download CV
      </a>
    </div>
    <div class="introduction">
      <img loading="lazy" class="introduction-image" rel="preload" src="/assets/images/Profile/perfil2.webp" alt="Profile photo">
      <div class="introduction-profile">
        <p class="heading-3 profile-name">José Crespí Valero</p> 
        <p class="heading-3 profile-job"> Front end engineer</p>
      </div>
        <div class="introduction-media">
          <a href="mailto:crespi.valero.jose@gmail.com" aria-label="Open mail app to write me an email" target="_blank" rel="noreferrer">
            <SvgIcon :name="'Mail'" :color="'black'" :size="{height: 20, width: 20}"/>
          </a>
          <a href="https://www.linkedin.com/in/jose-cresp%C3%AD-valero-349594190/" aria-label="Open Linkedin to check my profesional profile" target="_blank" rel="noreferrer">
            <SvgIcon :name="'Linkedin'" :size="{height: 20, width: 20}"/>
          </a>
          <a href="https://github.com/jose149" aria-label="Open Github to check my projects" target="_blank" rel="noreferrer">
            <SvgIcon :name="'GitHub2'" :size="{height: 20, width: 20}"/>
          </a>
      </div>
    </div> 

       
    
  </section>           
</template>


<script lang="ts" setup>
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue'

</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
@import "@/styles/layout/AboutMe.scss";

@media (min-width: 1024px) {
}

</style>