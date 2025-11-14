<script setup>
import { ref } from 'vue'
import serviceCard from './components/serviceCard.vue'

// Data (Anda bisa ganti ini dengan data Anda)
const educationHistory = ref([
  {
    id: 1,
    icon: '/icons/campus.svg',
    alt: 'school-icon',
    title: 'S.Kom - B.sc',
    description: 'At President University (2022-2025).',
  },
  {
    id: 2,
    icon: '/icons/school.svg',
    alt: 'school-icon',
    title: 'high School - natural science',
    description: 'At MAs Diniyyah Pasia (2019-2022).',
  },
  {
    id: 3,
    icon: '/icons/elementry.svg',
    alt: 'school-icon',
    title: 'junior high school',
    description: 'At MTSs Diniyyah Pasia (2016-2019).',
  },
])
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="w-full text-center">
      <h2 class="text-3xl font-bold mb-8">Education History</h2>
    </div>
    <div class="grid w-full justify-items-center sm:flex sm:flex-wrap sm:justify-center gap-6">
      <serviceCard :datas="educationHistory" />
    </div>
  </div>
</template>

<style scoped>
/* Anda bisa menambahkan style khusus di sini jika perlu */
</style>
