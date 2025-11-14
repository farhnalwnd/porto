<script setup>
import { ref } from 'vue'
import serviceCard from './components/serviceCard.vue'
import ToolsMarque from './components/toolsMarque.vue'

const services = ref([
  {
    id: 1,
    icon: '/icons/web-developer.svg',
    alt: 'web-developer-icon',
    skill: 'Web Development',
    description: 'Building responsive and dynamic websites using modern technologies.',
  },
  {
    id: 2,
    icon: '/icons/iot.svg',
    alt: 'iot-icon',
    skill: 'IoT Developer',
    description: 'Creating user-friendly mobile applications for Android and iOS platforms.',
  },
  {
    id: 3,
    icon: '/icons/data-science.svg',
    alt: 'data-science-icon',
    skill: 'Data Science',
    description: 'Designing intuitive user interfaces and enhancing user experience.',
  },
  {
    id: 4,
    icon: '/icons/devops.svg',
    alt: 'devops-icon',
    skill: 'DevOps Engineer',
    description: 'Designing intuitive user interfaces and enhancing user experience.',
  },
  {
    id: 5,
    icon: '/icons/web-design.svg',
    alt: 'web-design-icon',
    skill: 'Web Design',
    description: 'Designing intuitive user interfaces and enhancing user experience.',
  },
])

const marqueeTools = ref([
  {
    id: 1,
    icon: '/icons/ajax.svg',
    alt: 'ajax-icon',
  },
  {
    id: 2,
    icon: '/icons/figma.svg',
    alt: 'figma-icon',
  },
  {
    id: 3,
    icon: '/icons/git.svg',
    alt: 'git-icon',
  },
  {
    id: 4,
    icon: '/icons/github.svg',
    alt: 'github-icon',
  },
  {
    id: 5,
    icon: '/icons/golang.svg',
    alt: 'golang-icon',
  },
  {
    id: 6,
    icon: '/icons/google-data.svg',
    alt: 'google-data-icon',
  },
  {
    id: 7,
    icon: '/icons/laravel.svg',
    alt: 'laravel-icon',
  },
  {
    id: 8,
    icon: '/icons/linux.svg',
    alt: 'linux-icon',
  },
  {
    id: 9,
    icon: '/icons/php.svg',
    alt: 'php-icon',
  },
  {
    id: 10,
    icon: '/icons/sql.svg',
    alt: 'sql-icon',
  },
  {
    id: 11,
    icon: '/icons/tailwind.svg',
    alt: 'tailwind-icon',
  },
  {
    id: 12,
    icon: '/icons/vue.svg',
    alt: 'vue-icon',
  },
  {
    id: 13,
    icon: '/icons/Livewire.svg',
    alt: 'livewire-icon',
  },
  {
    id: 14,
    icon: '/icons/Alpine.svg',
    alt: 'alpine-icon',
  },
])
</script>
<template>
  <!-- service -->
  <div class="container mx-auto px-4 py-12 md:-mt-24 lg:-mt-36">
    <div class="w-full flex items-center justify-center">
      <h2 class="text-3xl font-bold text-center mb-8">What I Do</h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-6">
      <serviceCard v-for="service in services" :key="service.id">
        <template #icon>
          <img :src="service.icon" :alt="service.alt" class="w-16 h-16 scale-90" />
        </template>
        <template #skill>
          <h3 class="text-xl font-semibold mb-2">{{ service.skill }}</h3>
        </template>
        <template #description>
          <p class="text-amber-200 text-center">{{ service.description }}</p>
        </template>
      </serviceCard>
    </div>
  </div>

  <!-- marquee -->
  <div class="container mx-auto px-4 py-12">
    <div class="w-full flex items-center justify-center">
      <h2 class="text-3xl font-bold text-center mb-8">Tools I Use</h2>
    </div>
    <div
      class="w-full py-4 bg-gray-100 rounded-lg inset-shadow-sm inset-shadow-amber-400 text-white overflow-hidden flex"
    >
      <div class="animate-marquee-scroll shrink-0 whitespace-nowrap">
        <ToolsMarque :tools="marqueeTools" class="inline-block" />
        <ToolsMarque :tools="marqueeTools" class="inline-block" />
        <ToolsMarque :tools="marqueeTools" class="inline-block" />
      </div>
      <div class="animate-marquee-scroll shrink-0 whitespace-nowrap" aria-hidden="true">
        <ToolsMarque :tools="marqueeTools" class="inline-block" />
        <ToolsMarque :tools="marqueeTools" class="inline-block" />
        <ToolsMarque :tools="marqueeTools" class="inline-block" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';
</style>
