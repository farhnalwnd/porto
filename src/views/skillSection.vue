<script setup>
import { ref } from 'vue'
import serviceCard from '@/components/serviceCard.vue'
import ToolsMarque from '@/components/toolsMarque.vue'

const services = ref([
  {
    id: 1,
    icon: '/icons/web-developer.svg',
    alt: 'web-developer-icon',
    title: 'Web Development',
    description: 'Building responsive and dynamic websites using modern technologies.',
  },
  {
    id: 2,
    icon: '/icons/iot.svg',
    alt: 'iot-icon',
    title: 'IoT Developer',
    description:
      'Developing solutions for smart devices, sensors, and integrating hardware with internet-based data systems.',
  },
  {
    id: 3,
    icon: '/icons/data-science.svg',
    alt: 'data-science-icon',
    title: 'Data Science',
    description:
      'Extracting valuable insights from data using statistical analysis, and data visualization.',
  },
  {
    id: 4,
    icon: '/icons/devops.svg',
    alt: 'devops-icon',
    title: 'DevOps Engineer',
    description:
      'Streamlining software development and operations using automation, CI/CD pipelines, and infrastructure management.',
  },
  {
    id: 5,
    icon: '/icons/web-design.svg',
    alt: 'web-design-icon',
    title: 'Web Design',
    description:
      'Creating visually appealing and user-friendly website layouts, focusing on UI/UX and brand identity.',
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
  {
    id: 15,
    icon: '/icons/Arduino.svg',
    alt: 'arduino-icon',
  },
  {
    id: 16,
    icon: '/icons/affinity.svg',
    alt: 'affinity-icon',
  },
  {
    id: 17,
    icon: '/icons/python.svg',
    alt: 'python-icon',
  },
  {
    id: 18,
    icon: '/icons/raspberry.svg',
    alt: 'raspberry-icon',
  },
])
</script>
<template>
  <!-- service -->
  <div class="container mx-auto px-4 py-12">
    <div class="w-full text-center">
      <h2 class="text-3xl font-bold mb-8">Skills</h2>
    </div>
    <div class="grid w-full justify-items-center sm:flex sm:flex-wrap sm:justify-center gap-6">
      <serviceCard :datas="services" />
    </div>
  </div>

  <!-- marquee -->
  <div class="container mx-auto px-4 py-12">
    <div class="w-full text-center">
      <h2 class="text-3xl font-bold mb-8">Tools & Tech</h2>
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
