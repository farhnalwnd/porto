<script setup>
import { ref } from 'vue'
import serviceCard from '@/components/serviceCard.vue'

const educationHistory = ref([
  {
    id: 1,
    icon: '/icons/campus.svg',
    alt: 'school-icon',
    title: 'S.Kom - B.sc',
    description: 'At President University.',
    period: '2022-2025',
  },
  {
    id: 2,
    icon: '/icons/school.svg',
    alt: 'school-icon',
    title: 'Senior High School - Natural Science',
    description: 'At MAs Ponpes Modern Diniyyah Pasia.',
    period: '2019-2022',
  },
  {
    id: 3,
    icon: '/icons/elementry.svg',
    alt: 'school-icon',
    title: 'Junior High School',
    description: 'At MTSs Ponpes Modern Diniyyah Pasia.',
    period: '2016-2019',
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

<style scoped></style>
