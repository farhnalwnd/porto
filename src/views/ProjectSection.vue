<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { Autoplay, EffectCreative, Scrollbar } from 'swiper/modules'
import 'swiper/css/effect-creative'
import 'swiper/css/bundle'
import aos from 'aos'

const projectImages = ref([
  {
    id: 1,
    path: '/portofolio/porto-vote.webp',
    title: 'Aplikasi Sistem Voting Online berbasis PHP Native dan Bootstrap',
    project: 'Voting App',
    deascription:
      'Built using native PHP, MySQL, and Bootstrap. This application allows users to vote, while administrators can manage user data, voting objects, and view event statistics through the CRUD panel.',
  },
  {
    id: 2,
    path: '/portofolio/porto-web.webp',
    title: 'Sistem Penganggaran Perusahaan berbasis Laravel dan Tailwind CSS',
    project: 'Budgeting System',
    deascription:
      'Developed with Laravel, Tailwind CSS, and jQuery. This system manages budget requests per department, supports budget transfers between departments, and is equipped with approval and email notification features.',
  },
  {
    id: 3,
    path: '/portofolio/porto-mormade.webp',
    project: 'Mormade Website',
    title: 'Mormade Web Platform & CMS',
    deascription:
      'Built with Filament, Livewire, and Tailwind CSS. The backend system is operational, while the frontend is still under development. This website serves as an external site for the Mormade brand.',
  },
  {
    id: 4,
    path: '/portofolio/porto-rs.webp',
    project: 'Requisition System',
    title: 'Aplikasi Sistem Requisition & Manajemen Gudang berbasis Laravel',
    deascription:
      'Built with Laravel, Tailwind CSS, and jQuery. This system manages warehouse requisitions, equipped with multi-level approval request features and status notifications via email.',
  },
  {
    id: 5,
    path: '/portofolio/porto-foto.webp',
    project: 'Statistics Dashboard',
    title: 'Dashboard Analitik dan Visualisasi Data menggunakan Tableau',
    deascription:
      'A statistics dashboard created using Tableau, with data sourced from CSV files. This project was created for the purpose of learning data visualization from various sources.',
  },
  {
    id: 6,
    path: '/portofolio/porto-budgeting.webp',
    project: 'Voice Navigation Website',
    title: 'voice-navigation-website',
    deascription:
      'Built using Django. This website can navigate between pages using voice commands and has a text-to-speech feature to read the page content aloud.',
  },
])

// ** Responsive Swiper Configuration */
const screenWidth = ref(window.innerWidth)
const breakPoint = ref({
  0: {
    swiperSlidePerView: 1,
    swiperSpaceBetween: 15,
    swiperModules: [Scrollbar, Autoplay],
    swiperEffect: 'slide',
    swiperCreative: {},
    swiperScrollbar: { draggable: true },
  },
  640: {
    swiperSlidePerView: 2,
    swiperSpaceBetween: 15,
    swiperModules: [Scrollbar, Autoplay],
    swiperEffect: 'slide',
    swiperCreative: {},
    swiperScrollbar: { draggable: true },
  },
  768: {
    swiperSlidePerView: 3,
    swiperSpaceBetween: 15,
    swiperModules: [Scrollbar, Autoplay],
    swiperEffect: 'slide',
    swiperCreative: {},
    swiperScrollbar: { draggable: true },
  },
  1024: {
    swiperSlidePerView: 1,
    swiperSpaceBetween: 0,
    swiperModules: [EffectCreative, Autoplay],
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
    swiperModules: [EffectCreative, Autoplay],
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
  aos.init({
    disable: false,
    duration: 1000,
    offset: 200,
    once: false,
    anchorPlacement: 'center-bottom',
    easing: 'ease-out-cubic',
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
  aos.refresh()
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
        <div class="flex items-center justify-center">
          <h2 class="text-3xl font-bold text-center">Project Portofolio</h2>
        </div>
        <div class="flex mt-4 w-full justify-center">
          <p class="text-center text-pretty xl:text-lg">
            Here are some projects I have worked on, both individually and as part of a team.
          </p>
        </div>
      </div>

      <div data-aos="zoom-in-up" class="w-full lg:w-2/3">
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
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          class="mySwiper"
        >
          <SwiperSlide v-for="project in projectImages" :key="project.id">
            <ProjectCard>
              <template #images>
                <img
                  :src="project.path"
                  :alt="project.title"
                  loading="lazy"
                  class="w-full h-full object-cover"
                />
              </template>
              <template #default>
                <p class="text-amber-400 lg:text-xl">
                  <strong>{{ project.project }}</strong>
                </p>
                <p class="text-pretty text-sm mt-2 lg:text-lg">{{ project.deascription }}</p>
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
  @apply rounded-2xl flex items-center justify-center;
}
</style>
