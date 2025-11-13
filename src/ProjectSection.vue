<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import ProjectCard from './components/ProjectCard.vue'
import { EffectCreative, Scrollbar } from 'swiper/modules'
import 'swiper/css/effect-creative'
import 'swiper/css/bundle'

// ** Data for project images and titles */
const projectImages = ref([
  {
    id: 1,
    path: 'logo.png',
    title: 'Project 1',
  },
  {
    id: 2,
    path: 'logo.png',
    title: 'Project 2',
  },
  {
    id: 3,
    path: 'logo.png',
    title: 'Project 3',
  },
  {
    id: 4,
    path: 'logo.png',
    title: 'Project 4',
  },
  {
    id: 5,
    path: 'logo.png',
    title: 'Project 5',
  },
  {
    id: 6,
    path: 'logo.png',
    title: 'Project 6',
  },
  {
    id: 7,
    path: 'logo.png',
    title: 'Project 7',
  },
  {
    id: 8,
    path: 'logo.png',
    title: 'Project 8',
  },
])

// ** Responsive Swiper Configuration */
const screenWidth = ref(window.innerWidth)
const breakPoint = ref({
  0: {
    swiperSlidePerView: 1,
    swiperSpaceBetween: 15,
    swiperModules: [Scrollbar],
    swiperEffect: 'slide',
    swiperCreative: {},
    swiperScrollbar: { draggable: true },
  },
  640: {
    swiperSlidePerView: 2,
    swiperSpaceBetween: 15,
    swiperModules: [Scrollbar],
    swiperEffect: 'slide',
    swiperCreative: {},
    swiperScrollbar: { draggable: true },
  },
  768: {
    swiperSlidePerView: 3,
    swiperSpaceBetween: 15,
    swiperModules: [Scrollbar],
    swiperEffect: 'slide',
    swiperCreative: {},
    swiperScrollbar: { draggable: true },
  },
  1024: {
    swiperSlidePerView: 1,
    swiperSpaceBetween: 0,
    swiperModules: [EffectCreative],
    swiperEffect: 'creative',
    swiperCreative: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
    swiperScrollbar: false,
  },
  1280: {
    swiperSlidePerView: 1,
    swiperSpaceBetween: 0,
    swiperModules: [EffectCreative],
    swiperEffect: 'creative',
    swiperCreative: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
    swiperScrollbar: false,
  },
})

const updateWidth = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})

const currentSwiperConfig = computed(() => {
  const width = screenWidth.value

  const sortedBreakPoints = Object.keys(breakPoint.value)
    .map(Number)
    .sort((a, b) => b - a)
  for (const bp of sortedBreakPoints) {
    if (width >= bp) {
      return breakPoint.value[bp]
    }
  }
  return breakPoint.value[0]
})
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="flex flex-col lg:flex-row lg:gap-8">
      <div class="w-full lg:w-1/3 mb-8 lg:mb-0 lg:flex lg:flex-col lg:justify-center">
        <h2 class="text-3xl font-bold text-gray-800 lg:text-center">Proyek Unggulan Kami</h2>
        <p class="mt-4 text-gray-600 lg:text-center">
          Ini adalah tulisan yang Anda minta. Di layar besar, tulisan ini akan berada di sebelah
          kiri slider. Di layar kecil, tulisan ini akan berada di atas slider.
        </p>
      </div>

      <div class="w-full lg:w-2/3">
        <Swiper
          :key="currentSwiperConfig.swiperEffect"
          :slides-per-view="currentSwiperConfig.swiperSlidePerView"
          :space-between="currentSwiperConfig.swiperSpaceBetween"
          :modules="currentSwiperConfig.swiperModules"
          :effect="currentSwiperConfig.swiperEffect"
          :loop="false"
          :creative-effect="currentSwiperConfig.swiperCreative"
          :scrollbar="currentSwiperConfig.swiperScrollbar"
          :centered-slides="false"
          :grab-cursor="true"
          class="mySwiper"
        >
          <SwiperSlide v-for="project in projectImages" :key="project.id">
            <ProjectCard>
              <template #images>
                <img :src="project.path" :alt="project.title" />
              </template>
              <template #default>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, necessitatibus, est
                voluptatem beatae nam adipisci asperiores quod quis, alias facilis quibusdam.
              </template>
            </ProjectCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';
.img {
  @apply object-cover;
}
.swiper-slide {
  @apply rounded-2xl;
}
</style>
