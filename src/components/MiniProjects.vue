<!-- <template>
  <section id="section--2" class="section mini-projects">
      <MiniProject 
      class="mini-project"
        v-for="miniProject in miniProjects"
        :key="miniProject.title"
        :mini-project="miniProject"/>
  </section>

</template>


<script lang="ts" setup>
import MiniProject, { type IMiniProject } from './MiniProject.vue'

export interface IImage {
  url: string;
  alt: string;
}

const miniProjects: IMiniProject[]= [
  {
    title:'TripPlanner',
    image: {url: '@/../assets/images/Projects/tripPlanner.png', alt: 'Trip Planner'},
  },
  {
    title:'TripPlanner',
    image: {url: '@/../assets/images/Projects/tripPlanner.png', alt: 'Trip Planner'},
  },
  {
    title:'TripPlanner',
    image: {url: '@/../assets/images/Projects/tripPlanner.png', alt: 'Trip Planner'},
  },{
    title:'TripPlanner',
    image: {url: '@/../assets/images/Projects/tripPlanner.png', alt: 'Trip Planner'},
  },
  {
    title:'TripPlanner',
    image: {url: '@/../assets/images/Projects/tripPlanner.png', alt: 'Trip Planner'},
  },
  {
    title:'TripPlanner',
    image: {url: '@/../assets/images/Projects/tripPlanner.png', alt: 'Trip Planner'},
  },
]

</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
@import "@/styles/layout/MiniProjects.scss";

@media (min-width: 1024px) {
}

</style> -->