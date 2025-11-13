<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import ProjectCard from './components/ProjectCard.vue'
import { EffectCoverflow } from 'swiper/modules'
import 'swiper/css/effect-coverflow'
import 'swiper/css/bundle'

const projectImages = ref([
  {
    id: 1,
    path: 'favicon.ico',
    title: 'Project 1',
  },
  {
    id: 2,
    path: 'favicon.ico',
    title: 'Project 2',
  },
  {
    id: 3,
    path: 'favicon.ico',
    title: 'Project 3',
  },
  {
    id: 4,
    path: 'favicon.ico',
    title: 'Project 4',
  },
  {
    id: 5,
    path: 'favicon.ico',
    title: 'Project 5',
  },
  {
    id: 6,
    path: 'favicon.ico',
    title: 'Project 6',
  },
  {
    id: 7,
    path: 'favicon.ico',
    title: 'Project 7',
  },
  {
    id: 8,
    path: 'favicon.ico',
    title: 'Project 8',
  },
])

const onSwiper = (swiper) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}

const modules = [EffectCoverflow]
</script>

<template>
  <Swiper
    :slides-per-view="3"
    :space-between="5"
    :modules="modules"
    :loop="true"
    :effect="'coverflow'"
    :coverflowEffect="{
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    @swiper="onSwiper"
    @slide-change="onSlideChange"
    class="mySwiper"
  >
    <SwiperSlide v-for="project in projectImages" :key="project.id">
      <ProjectCard>
        <template #images>
          <img :src="project.path" :alt="project.title" />
        </template>
        <template #default>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, necessitatibus, est
          voluptatem beatae nam adipisci asperiores quod quis, alias facilis quibusdam.</template
        >
      </ProjectCard>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
@reference 'tailwindcss';
.img {
  @apply rounded-2xl w-full h-auto object-cover;
}
</style>
