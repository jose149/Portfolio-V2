<template>
  <section class="section section-projects">
    <h2 class="projects-heading">Projects</h2>
    <Project
    class="project"
    v-for="project in projects"
    :key="project.title"
    :project="project"
    />
    <div class="project mini-projects">
      <MiniProject
        class="mini-project"
        v-for="miniProject in miniProjects"
        :key="miniProject.title"
        :mini-project="miniProject"/>
    </div>
  </section>

</template>


<script lang="ts" setup>
import Project, { type IProject } from './Project.vue'
import MiniProject, { type IMiniProject } from './MiniProject.vue'

export interface IImage {
  path: string;
  alt: string;
}


const projects: IProject[]= [
  {
    title:'TripPlanner',
    summary: 'As a Sembo Trip Planner key member, I contributed to develop an innovative travel tool that allows users to effortlessly crate full travel experiences integrating accommodation, transportation, and activities. Enhancing the travel experience, making it more enjoyable and accessible for everyone.',
    image: {path: '/assets/images/Projects/TripPlanner.jpg', alt: 'Trip Planner'},
    technologies: ['Vue', 'TypeScript', 'Vitest', 'Cypress', 'StoryBook', 'GraphQL', 'Pinia'],
    url:'https://www.sembo.co.uk/travel/plan?pax=rpp'
  },
]

const miniProjects: IMiniProject[]= [
  {
    title:'Todo List',
    image: {path: '/assets/images/Miniprojects/TodoList.webp', alt: 'Todo list project'},
    link: 'https://github.com/jose149/ToDoList'
  },
  {
    title:'Organization Table',
    image: {path: '/assets/images/Miniprojects/UsersList.webp', alt: 'Users list project'},
    link: 'https://github.com/jose149/OrganizationTable'
  },
]

</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
@import "@/styles/layout/Projects.scss";

</style>